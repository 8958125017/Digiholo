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
import { HomePage } from '../home/home';

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
   netStatus:any;
constructor(private fb: FormBuilder,public alertCtrl: AlertController, private network: Network,private barcodeScanner: BarcodeScanner,public navCtrl: NavController,public toastCtrl: ToastController,public events: Events,public menuCtrl: MenuController, public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {
    this.netStatus=localStorage.getItem('NetworkStatus'); 
 
  }

loginWithFB() {
    // this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
    //   this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
    //     this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
    //   });
    // });
  }
scanProduct(){
  
 //this.navCtrl.push(AboutPage,{ 'getOwnproductId': 'Activa-i4','getOwnstremKey': 'keyActiva-i402'});
   this.barcodeScanner.scan().then((barcodeData) => {   
   this.hexa3a(barcodeData.text);      
        });
}

hexa3a(data:any){       
       var strKey=data;
            var status = this.isHex(strKey);
            if(status){     
                   if(strKey){ 
                    this.hex2a(strKey); //found hex avaliable in string
                   }
                   else{
                     
                  let toast = this.toastCtrl.create({
                         message: "somthing went wrong!!",
                         showCloseButton: true,
                         closeButtonText: 'Ok',
                         duration: 5000
                    });
                   toast.present();
                }
     }
   }

 isHex(typeString) {
  
  var a =typeString; 
  var regExp = /^[-+]?[0-9A-Fa-f]+\.?[0-9A-Fa-f]*?$/;
   var regex=/^[0-9]+$/;   
     if(regex.test(a)){
       let toast = this.toastCtrl.create({
                         message: "somthing went wrong  !!",
                         showCloseButton: true,
                         closeButtonText: 'Ok',
                         duration: 5000
                    });
                   toast.present();
       return false;
     }
   if(typeof a === 'string' && regExp.test (a)){
     return true;
   }
 
}


     hex2a(a) {
       var haxKey=a;
        var type=typeof(haxKey);
              var hex = haxKey.toString();//force conversion
              var str = '';
              for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2){
               str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
               str;               
             }
           this.selectedProduct=str;         
           if(this.selectedProduct){
            var data = JSON.parse(this.selectedProduct);   
            if(typeof(data)=="object"){
              this.navCtrl.push(AboutPage, { 'getOwnproductId': data.productName,'getOwnstremKey': data.productKeyName});     
            }
          }else{
             let toast = this.toastCtrl.create({
                                   message: 'somthing went wrong',
                                   showCloseButton: true,
                                   closeButtonText: 'Ok',
                                   duration: 5000
                              });
                             toast.present();  
          }
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
       if(this.netStatus=="offline")    {
         this.navCtrl.push(HomePage);
     }   else{
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

//  scanProduct(){
//  //this.navCtrl.push(AboutPage,{ 'getOwnproductId': 'Activa-i4','getOwnstremKey': 'keyActiva-i402'});
//    this.barcodeScanner.scan().then((barcodeData) => {
//           this.selectedProduct=barcodeData.text;
//           if(this.selectedProduct){
//             var data = JSON.parse(this.selectedProduct);      
//             this.navCtrl.push(AboutPage, { 'getOwnproductId': data.productName,'getOwnstremKey': data.rawTxid});           
//           }
//         });
// }


}
