import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { NavController, NavParams,MenuController,ToastController,AlertController,LoadingController,Events} from 'ionic-angular';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { SignupPage } from '../signup/signup';
import { DashboardPage } from '../dashboard/dashboard';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AboutPage } from '../about/about';
import { SetupService } from '../../services/setup.service';
import { Network } from '@ionic-native/network';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  userData: any;
  loginForm: FormGroup;
  loginDetail: any = { email: '', password: '',ip:'',location:'',_id:'' };
  responseData:any;
  public user:any;
  submitted = false;
  public userId:any;
  selectedProduct: any; 
   userImage:any;
constructor(private fb: FormBuilder,public alertCtrl: AlertController, private network: Network,private barcodeScanner: BarcodeScanner,public navCtrl: NavController,public toastCtrl: ToastController,public events: Events,public menuCtrl: MenuController, public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {

 
  }

loginWithFB() {
    // this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
    //   this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
    //     this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
    //   });
    // });
  }
scanProduct(){

 this.navCtrl.push(AboutPage,{ 'getOwnproductId': 'Dell-12','getOwnstremKey': 'key111'});
   // this.barcodeScanner.scan().then((barcodeData) => {
   //        this.selectedProduct=barcodeData.text;
   //        if(this.selectedProduct){
   //          var data = JSON.parse(this.selectedProduct);      
   //          this.navCtrl.push(AboutPage, { 'getOwnproductId': data.productName,'getOwnstremKey': data.rawTxid});           
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
           
      let loading = this.loadingCtrl.create({
        content: 'Logging please wait...',
        dismissOnPageChange: true,
        showBackdrop: true,
        duration:15000,
        enableBackdropDismiss: true
      }); 
       loading.present();
      this.loginDetail.email=this.loginDetail.email.toLowerCase();
      let postData={
         email:this.loginDetail.email.toLowerCase(),
         password:this.loginDetail.password,
         location:"Delhi",
         ip:"182.64.10.38",
        _id:"5b090ececff8e96a8b0b911a"
      }
  // loading.dismiss();
     const url =this._setupService.basePath+'/multichain/user/login';
       this._setupService.PostRequest(url,postData).subscribe((response) => {       
          var respon=JSON.parse(response[0].json._body);                               
          if(respon.responseCode== 200){
            this.responseData = response;                     
             localStorage.setItem('logindetail',JSON.stringify(this.responseData));
              this.user=JSON.parse(localStorage.getItem('logindetail'));                 
              var res=JSON.parse(this.user[0].json._body);                          
              this.userId=res.data.uuid; 
              if(res.data.image){
                this.userImage=res.data.image;
               }else{
                 this.userImage="assets/img/marty-avatar.jpeg";
               }
               this.events.publish("shareObject", this.userId);      
               this.events.publish("userImage", this.userImage);    
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
      // this.network.onConnect().subscribe(data => {      
      // }, error => console.error(error));
     
      // this.network.onDisconnect().subscribe(data => {
      //   let alert = this.alertCtrl.create({
      //     title: 'Network was disconnected :-(',
      //     subTitle: 'Please check your connection. And try again',
      //     buttons: ['OK']
      //   });
      //   alert.present();
      // }, error => console.error(error));
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
