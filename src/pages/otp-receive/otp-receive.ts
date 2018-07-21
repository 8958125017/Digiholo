import { Component } from '@angular/core';
import { IonicPage,NavController,Platform,AlertController,NavParams,ToastController,LoadingController} from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import {Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { SetupService } from '../../services/setup.service'
import { LoginPage } from '../../pages/login/login';
import {  FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
declare var SMS:any;
declare var document:any;


@IonicPage()
@Component({
  selector: 'page-otp-receive',
  templateUrl: 'otp-receive.html',
})
export class OtpReceivePage {
  otpForm: FormGroup;
  userDetails:any;
  otpVerifyDetail: any = { 
    		                  userName: "",  
    		                  otp: "",                 
    		                  mobile: ""
                        };

  constructor(public alertCtrl: AlertController,private fb: FormBuilder,
    public platform:Platform,public toastCtrl: ToastController,
    public androidPermissions: AndroidPermissions,public loadingCtrl: LoadingController,
    public http:Http,public _setupService: SetupService,
    public navCtrl:NavController,
    public navParams: NavParams) {
  
    this.userDetails=JSON.parse(localStorage.getItem('UserDetaisAfterSignup'));     
    this.otpVerifyDetail.userName=this.userDetails[0].json.data.userName;
    this.otpVerifyDetail.mobile=this.userDetails[0].json.data.contactNumber;
    

    document.addEventListener('onSMSArrive', function(e){
    var sms = e.data;      
     console.log("received sms "+JSON.stringify( sms ) );
      if(sms.address) //look for your message address
     {      
       var otpArray = sms.body.split(':');
       var otp = otpArray[1];
       this.otpVerifyDetail.otp=otp;
      // alert("this.otpVerifyDetail.otp = = 1"+this.otpVerifyDetail.otp)
      this.stopSMS();
      this.verify_otp();
     }
      
    });
   this.checkPermission();
      }
    checkPermission()
    {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
        success => {
          
          //if permission granted
          this.receiveSMS();
        },
      err =>{
        
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).
        then(success=>{
          this.receiveSMS();
        },
      err=>{
        console.log("cancelled")
      });
      });
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
      
    }
    receiveSMS()
    {
      
      if(SMS) SMS.startWatch(function(){
        console.log('watching started');
      }, function(){
        console.log('failed to start watching');
      });
    }
    stopSMS()
    {
      if(SMS) SMS.stopWatch(function(){
        console.log('watching stopped');
      }, function(){
        console.log('failed to stop watching');
      });
    }

    otpFormInit(){
            this.otpForm = this.fb.group({
                  'otp': new FormControl('', Validators.required),
                  'userName': new FormControl(''),
                  'mobile': new FormControl('')                    
                 });
              }

    verifyOTP()
    {
      
       let loading = this.loadingCtrl.create({
       content: 'Logging please wait...'
      }); 
        loading.present();
      
      if(this.otpVerifyDetail.mobile.length==0)
      {
      	loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'OTP Required!',
          subTitle: 'Please enter your OTP and proceed',
          buttons: ['OK']
        });
        alert.present();
      }
      else
      {
      	let postData = {
                                    userName : this.otpVerifyDetail.userName,
                                    otp : this.otpVerifyDetail.otp,
                                    contactNumber : this.otpVerifyDetail.mobile                                    
                       };                       
     const url = this._setupService.basePath + '/multichain/user/verifyOtp';
     this._setupService.PostRequestUnautorized(url,postData).subscribe((response)=>{
     loading.dismiss();
       if(response[0].json.responseCode==200){
      	let toast = this.toastCtrl.create({
                     message: response[0].json.responseMessage,
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
       localStorage.removeItem("UserDetaisAfterSignup");
       this.navCtrl.push(LoginPage);
      }else{
         localStorage.removeItem("UserDetaisAfterSignup");
      }
     });
       
      }
    }

  ngOnInit() { 

        this.otpFormInit();
         this.otpForm.reset();      
      }
}