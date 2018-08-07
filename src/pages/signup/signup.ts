import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { NavController, NavParams,AlertController,Platform,LoadingController,MenuController,ToastController} from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { SetupService } from '../../services/setup.service'; 
import { LoginPage } from '../../pages/login/login';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Http, Headers } from '@angular/http';
import { OtpReceivePage } from '../otp-receive/otp-receive';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  public userInfo:any;
  signupForm: FormGroup;
  signupDetail: any = { 
                  userName: '',  
                  email: '',                 
                  password: '',
                  confirmPassword:'',
                  contactNumber: ''
                };
  submitted = false;
  responseData:any;

  otp='';
  mobile='';
 netStatus:any;
  constructor(
              public platform:Platform,
              public androidPermissions: AndroidPermissions,
              public http:Http,
              public navCtrl: NavController,
              private fb: FormBuilder,
              public loadingCtrl: LoadingController,
              public userData: UserData,
              public alertCtrl: AlertController,
              public menuCtrl: MenuController, 
              public navParams: NavParams,
              public _setupService: SetupService,
              public toastCtrl: ToastController
              ) {
                 let backAction =  platform.registerBackButtonAction(() => {        
                    this.navCtrl.pop();
                    backAction();
                  },2)
                  this.netStatus=localStorage.getItem('NetworkStatus'); 
  }

  signUpFormInit(){
            this.signupForm = this.fb.group({
                  'userName': new FormControl('',Validators.compose([Validators.required])),
                  'email': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z][-_.a-zA-Z0-9]{2,29}\@((\[[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,15}|[0-9]{1,3})(\]?)$/)])),
                  'password': new FormControl('',Validators.compose([Validators.required,Validators.minLength(6), Validators.maxLength(16),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/)])),
                  'confirmPassword': new FormControl('', Validators.required),
                  'contactNumber': new FormControl('',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])),
                  
                  
              }, { validator: this.matchingPasswords('password', 'confirmPassword') });
          }

    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {       
        return (group: FormGroup): { [key: string]: any } => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }

      ngOnInit() {     
        this.signUpFormInit();
      }

  
  onSignup(){   
       if(this.netStatus=="offline")    {
         this.navCtrl.push(HomePage);
     } else{      
      let loading = this.loadingCtrl.create({
       content: 'Sign up please wait...',
        dismissOnPageChange: true,
        showBackdrop: true,
        duration:15000,
        enableBackdropDismiss: true
      }); 
        loading.present();
        let postData ={
                                    userName : this.signupDetail.userName,
                                    email: this.signupDetail.email.toLowerCase(),
                                    contactNumber:"+91"+this.signupDetail.contactNumber,
                                    password:this.signupDetail.password
                                };   
    
    const url = this._setupService.basePath + '/multichain/user/customerUser';
     this._setupService.PostRequestUnautorized(url,postData).subscribe((response)=>{       
      loading.dismiss(); 
      if(response[0].json.responseCode== 200){
          localStorage.setItem('UserDetaisAfterSignup',JSON.stringify(response));         
           this.responseData = response;      
           this.userInfo=response[0].json.data;
           this.navCtrl.push(OtpReceivePage);  
    }else{              
         this.responseData = response;           
              let toast = this.toastCtrl.create({
                     message: response[0].json.responseMessage,
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
      }          
    });   
   }
  }

  
  onLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
     ionViewDidEnter() {   
          this.menuCtrl.enable(false);
    }
    
   ionViewWillLeave() {
     // enable the root left menu when leaving the tutorial page
    this.menuCtrl.enable(true);
  }
}