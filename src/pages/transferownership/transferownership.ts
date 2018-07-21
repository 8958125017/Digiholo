import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController, NavParams ,Platform,AlertController} from 'ionic-angular';
import { SetupService } from '../../services/setup.service'
import {  FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { OwnedproductinfoPage } from'../../pages/ownedproductinfo/ownedproductinfo';
import { Network } from '@ionic-native/network';
/**
 * Generated class for the TransferownershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transferownership',
  templateUrl: 'transferownership.html',
})
export class TransferownershipPage {

transferOwnerShipForm: FormGroup;
productInfo: any = { data: ''};
userOwnerData:any;
user:any;
userAdd:any;
productName:any;
streamKey:any;
strKey:any;
  constructor(platform:Platform,public navCtrl: NavController,public alertCtrl: AlertController, private network: Network,public toastCtrl: ToastController,private fb: FormBuilder,public _setupService: SetupService, public navParams: NavParams) {
       this.userOwnerData=JSON.parse(localStorage.getItem('tempOwnerData')); 
       this.user=JSON.parse(localStorage.getItem('logindetail'));
          if(this.user)            {
            var res=JSON.parse(this.user[0].json._body);
            this.userAdd=res.data.userAddress;
           
          }    
         this.productName = this.navParams.get('getOwnproductId');
         this.streamKey = this.navParams.get('getOwnstremKey');       
         this.strKey =  this.streamKey
     let backAction =  platform.registerBackButtonAction(() => {        
              this.navCtrl.pop();
              backAction();
            },2)
    
  }

  transferownershipform(){
      this.transferOwnerShipForm = this.fb.group({
            'data': new FormControl('', Validators.required),                     
        });
    }

  transferOwnership(){ 
    let postData={
          "userAddress":this.userAdd,
          "contactNumber":this.productInfo.data,
          "productName":this.productName,
          "productKeyName":this.streamKey,
          "data":this.userOwnerData
    }

   console.log("postData = = "+JSON.stringify(postData));
 	 const url = this._setupService.basePath + '/multichain/user/transferOwnerShip'
          this._setupService.PostRequest(url , postData)
        .subscribe((response) => {    
        var res=JSON.parse(response[0].json._body); 
          if(res.responseCode==200){
            let toast = this.toastCtrl.create({
                     message: res.responseMessage,
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
               this.transferOwnerShipForm.reset();
               this.navCtrl.push(OwnedproductinfoPage, { 'getOwnproductId': this.productName,'getOwnstremKey': this.streamKey}); 
          }else{     
              this.transferOwnerShipForm.reset();
                let toast = this.toastCtrl.create({
                     message: 'Somthing went wrong...',
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
             
          }
       
        })
    }
  ionViewDidLoad() {
    // this.network.onConnect().subscribe(data => {      
    //   }, error => console.error(error));
     
    //   this.network.onDisconnect().subscribe(data => {
    //     let alert = this.alertCtrl.create({
    //       title: 'Network was disconnected :-(',
    //       subTitle: 'Please check your connection. And try again',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //   }, error => console.error(error));
    // console.log('ionViewDidLoad ProfilePage');
  }

  ngOnInit() {     
  this.transferownershipform();
}

}
