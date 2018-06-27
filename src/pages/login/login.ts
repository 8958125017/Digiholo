import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { NavController, NavParams,MenuController,ToastController,LoadingController,Events} from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { UserOptions,LoginDetail } from '../../interfaces/user-options';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { SignupPage } from '../signup/signup';
import { DashboardPage } from '../dashboard/dashboard';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AboutPage } from '../about/about';
import { SetupService } from '../../services/setup.service'
@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  login: UserOptions = { username: '', password: '' };
  loginDetail: any = { email: '', password: '',ip:'',location:'',_id:'' };
  responseData:any;
  public user:any;
  submitted = false;
  public userName:any;
   selectedProduct: any; 
   
constructor(public userData: UserData,private fb: FormBuilder,private barcodeScanner: BarcodeScanner,public navCtrl: NavController,public toastCtrl: ToastController,public events: Events,public menuCtrl: MenuController, public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {

 
  }


scanProduct(){

  this.navCtrl.push(AboutPage, { 'productID': "SUMSUMG-1012",'stremKey': "796f31fb04a44305bd5e50e57733b83d17fce27380e7c3ea0e79bb2aa2c92358"})
   // this.barcodeScanner.scan().then((barcodeData) => {
   //        this.selectedProduct=barcodeData.text;
   //        if(this.selectedProduct){
   //          var data = JSON.parse(this.selectedProduct);      
   //          this.navCtrl.push(AboutPage, { 'productID': data.productName,'stremKey': data.rawTxid});           
   //        }
   //      });
}

      loginFormInit(){
            this.loginForm = this.fb.group({
                  'email': new FormControl('', Validators.required),
                  'password': new FormControl('', Validators.required)                    
              });
          }

      ngOnInit() { 

        this.loginFormInit();
         this.loginForm.reset();      
      }

      onlogin(){ 
      this.navCtrl.setRoot(DashboardPage);      
      let loading = this.loadingCtrl.create({
       content: 'Logging please wait...'
      }); 
        loading.present();
      this.loginDetail.email=this.loginDetail.email.toLowerCase();
      let postData={
         email:this.loginDetail.email,
         password:this.loginDetail.password,
         location:"Delhi",
         ip:"182.64.10.38",
        _id:"5b090ececff8e96a8b0b911a"
      }
   // loading.dismiss();
     const url =this._setupService.basePath+'/multichain/user/login';
       this._setupService.PostRequest(url,postData).subscribe((response) => {        
        
        var res=JSON.parse(response[0].json._body);                       
          if(res.responseCode== 200){
            this.responseData = response;                     
             localStorage.setItem('logindetail',JSON.stringify(this.responseData));
              this.user=JSON.parse(localStorage.getItem('logindetail'));                 
              var res=JSON.parse(this.user[0].json._body);              
              this.userName=res.data.email; 
              this.events.publish("shareObject", this.userName);         
              loading.dismiss(); 
              let toast = this.toastCtrl.create({
                     message: res.responseMessage,
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
              toast.present(); 
              this.navCtrl.setRoot(DashboardPage);
        }else{
                     
                     loading.dismiss();
                     let toast = this.toastCtrl.create({
                     message: 'somthing went wrong please retry',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
        } 
       
        })    
  }


    ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
      this.menuCtrl.enable(false);
    }
   ionViewWillLeave() {
     // enable the root left menu when leaving the tutorial page
    this.menuCtrl.enable(true);
  }
  
  
  onSignup() {
    this.navCtrl.push(SignupPage);
  }
  forgotPassword(){
      this.navCtrl.push(ForgotpasswordPage);
 }

}
