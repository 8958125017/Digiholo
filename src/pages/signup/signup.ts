import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { NavController, NavParams,AlertController,LoadingController,MenuController,ToastController} from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { UserOptions,SignUpDetails } from '../../interfaces/user-options';
import { SetupService } from '../../services/setup.service' 
import { LoginPage } from '../../pages/login/login';



@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  public userInfo:any;
  signupForm: FormGroup;
  signup1: UserOptions = { username: '', password: '' };
  signupDetail: any = { 
                  userName: '',  
                  email: '',                 
                  password: '',
                  confirmPassword:'',
                  contactNumber: ''
                };
  submitted = false;
  responseData:any;

  constructor(public navCtrl: NavController,private fb: FormBuilder,public loadingCtrl: LoadingController,public userData: UserData,public alertCtrl: AlertController,public menuCtrl: MenuController, public navParams: NavParams,public _setupService: SetupService,public toastCtrl: ToastController) {
  }

  signUpFormInit(){
            this.signupForm = this.fb.group({
                  'userName': new FormControl('', Validators.required),
                  'email': new FormControl('', Validators.required),
                  'password': new FormControl('', Validators.required),
                  'confirmPassword': new FormControl('', Validators.required),
                  'contactNumber': new FormControl('', Validators.required)
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
      let loading = this.loadingCtrl.create({
       content: 'Logging please wait...'
      }); 
        loading.present();
        let postData ={
                                    userName : this.signupDetail.userName,
                                    email: this.signupDetail.email,
                                    contactNumber:this.signupDetail.contactNumber,
                                    password:this.signupDetail.password
                                };
    loading.dismiss();
    console.log("postData  = ="+JSON.stringify(postData));
    const url = this._setupService.basePath + '/multichain/user/customerUser';
     this._setupService.PostRequestUnautorized(url,postData).subscribe((response)=>{
     loading.dismiss(); 
      if(response[0].json.responseCode== 200){
           this.responseData = response;      
           this.userInfo=response[0].json.data;
          //localStorage.setItem('signUp',JSON.stringify(this.responseData));
         // const response=JSON.parse(localStorage.getItem('signUp'));                  
           let toast = this.toastCtrl.create({
                     message: 'OTP sent to your mobile no',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
      let prompt = this.alertCtrl.create({
      title: 'One Time Password',      
      inputs: [
        {          
          name: 'otp',
          type: 'password',
          placeholder: 'One Time Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            let toast = this.toastCtrl.create({
                     message: 'account created please login and verify !!',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present();
                console.log("data "+data);
                this.navCtrl.setRoot(LoginPage); 
          }
        },
        {
          text: 'submit',
          handler: data => {
            if(!data.otp){
              let toast = this.toastCtrl.create({
                     message: 'Otp should be required please signUp retry',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
               
                toast.present();
            }

              else{
                 let loading = this.loadingCtrl.create({
                 content: 'verifying otp...'
               });
               let postData={
                   userName:this.userInfo.userName,
                   contactNumber:this.userInfo.contactNumber,
                   otp:this.userInfo.otp
                 }

               loading.present();
                const url2 = this._setupService.basePath + 'multichain/user/verifyOtp';
                 this._setupService.PostRequestUnautorized(url2,postData).subscribe((response) => {  
                loading.dismiss(); 
                if(response.responseCode== 200){
                     let toast = this.toastCtrl.create({
                     message: 'SignUp successfully',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                 });               
                toast.present();
                this.navCtrl.setRoot(LoginPage);
                }             
             });
            }      
          }
        }
      ],
      enableBackdropDismiss: false
    });
    prompt.present();      
         
     }else{
       
       loading.dismiss();
          this.responseData = response;
           
              let toast = this.toastCtrl.create({
                     message: this.responseData.message,
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
      }          
    });   
  }

  
  onLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
     ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
      this.menuCtrl.enable(false);
    }
   ionViewWillLeave() {
     // enable the root left menu when leaving the tutorial page
    this.menuCtrl.enable(true);
  }
}