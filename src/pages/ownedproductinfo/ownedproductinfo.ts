import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,Platform,ToastController,ActionSheetController,AlertController} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SetupService } from '../../services/setup.service';
import { TransferownershipPage } from '../../pages/transferownership/transferownership'
import { StorelocationPage } from '../../pages/storelocation/storelocation';
/**
 * Generated class for the OwnedproductinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ownedproductinfo',
  templateUrl: 'ownedproductinfo.html',
})
export class OwnedproductinfoPage {
  user:any;
  userAdd:any;
  dataList:any
  ataList:any[]=[];
  origin:any;
  description:any;
  manufacture:any;
  desc:any;
  display:any[]=[];
  qrCode: any;
  qrCode2: any;
  productDate:any;
  ownerId:any;
  qrcodestatus:boolean=false;
  ownerstatus:boolean=false;
  section: string = 'one';
  somethings: any = new Array(20);
  userEmail:any;
  productTime:any;   
  // new response
  dataItem:any;
  productName:any;
  stremKey:any;
   constructor(public navCtrl: NavController,public alertCtrl: AlertController,private sharingVar: SocialSharing,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController,public platform:Platform,public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {
     let backAction =  platform.registerBackButtonAction(() => {        
          this.navCtrl.pop();
          backAction();
        },2)
        this.user=JSON.parse(localStorage.getItem('logindetail'));
          if(this.user)            {
            var res=JSON.parse(this.user[0].json._body);
            this.userAdd=res.data.userAddress;
           this.userEmail=res.data.email;
          }  
        
        this.productName = this.navParams.get('getOwnproductId');
        this.stremKey = this.navParams.get('getOwnstremKey');        
        if(this.productName&&this.stremKey){          
          this.getOwnerproductInfo(this.productName,this.stremKey,this.userAdd);  
        }
       
   }
   
   getOwnerproductInfo(productName:any,productKey:any,userAddress:any){
                         let loading = this.loadingCtrl.create({
                           content: 'please wait...',
                            dismissOnPageChange: true,
                            showBackdrop: true,
                            duration:15000,
                            enableBackdropDismiss: true
                          });
                         loading.present();
                        let postData={
                                   userAddress:userAddress,
                                   productName:productName,
                                   productKeyName:productKey
                             }
                       const url = this._setupService.basePath + '/multichain/product/listStreamKeyItems'
                      this._setupService.PostRequestUnautorized(url,postData).subscribe((response)=>{   
                       loading.dismiss();    
                       if(response[0].json.responseCode==200)
                      {  
                       
                        this.dataList = [];  
                        this.dataItem=response[0].json.data;
                        console.log("this.dataItem.length = = "+this.dataItem.length);
                        var index=this.dataItem.length-1; 
                        console.log("index = = "+index);
                         console.log("this.dataItem[index] = = "+this.dataItem[index].data.asset.status);
                        this.ownerstatus=this.dataItem[index].data.asset.status;

                        var desc=   this.dataItem[index].data.asset.description; 
                        var tempData=this.dataItem[index];   
                        localStorage.setItem('tempOwnerData',JSON.stringify(tempData));                    
                        for(var key in desc)
                         {      
                          let data={
                                   key:key,
                                   value:desc[key],
                          }
                          this.display.push(data);                          
                         }this.ownerId=this.dataItem[index].data.asset.description
                        
                        for(var i=0;i<1;i++) {
                           this.origin=this.dataItem[i].data.asset.location;
                           if(this.dataItem[i].data.asset.time){
                             this.productTime=this.dataItem[i].data.asset.time;
                           }else{
                              this.productTime=new Date();
                           }

                        }       

                        
                      }
                      else{
                     
                           let toast = this.toastCtrl.create({
                                   message: response[0].json.responseMessage,
                                   showCloseButton: true,
                                   closeButtonText: 'Ok',
                                   duration: 5000
                              });
                             toast.present();                   
                          // this.navCtrl.setRoot(DashboardPage);
                          }
               });
            }
  
  transferOwnership(){
    this.navCtrl.push(TransferownershipPage, { 'getOwnproductId': this.productName,'getOwnstremKey': this.stremKey});

  }
  showConfirm(){
                var productName="Hp-Laptop";
                var streamKey="dwidhwdhwididjasjasojaskcj";

                 var a="productName"+" "+ this.productName +","+"productKeyName"+" "+this.stremKey;
                let actionSheet = this.actionSheetCtrl.create({
                  title: 'Share address Via',
                  buttons: [
                    {
                      text: 'whatsapp',
                      role: 'destructive',
                      handler: () => {
                      this.whatsUpShare(a)   }
                    },{
                      text: 'facebook',
                       role: 'destructive',
                      handler: () => {
                       this.facebookShare(a)
                      }
                    },{
                      text: 'message',
                      role: 'destructive',
                      handler: () => {
                       this.messageShare(a);
                      }
                    },
                    {
                      text: 'email',
                      role: 'destructive',
                      handler: () => {
                        this.emailShare(a);
                      }
                    }
                  ]
                });
                actionSheet.present();
              
              }

            whatsUpShare(address){
            this.sharingVar.shareViaWhatsApp(address,null /* img */ , null /* url */ ).then((data) =>
                     {
                        console.log('Shared via whatsup');
                     })
                     .catch((err) =>
                     {
                        console.log('Was not shared via whatsup');
                     });

            }

            facebookShare(address){
              this.sharingVar.shareViaFacebook(address,null /* img */ , null /* url */ ).then((data) =>
                     {
                        console.log('Shared via Facebook');
                     })
                     .catch((err) =>
                     {
                        console.log('Was not shared via Facebook');
                     });
            }

            messageShare(address){
              this.sharingVar.shareViaSMS(address,null /* img */ ).then((data) =>
                     {
                        console.log('Shared via sms');
                     })
                     .catch((err) =>
                     {
                        console.log('Was not shared via sms');
                     });
            }

            emailShare(address){
              this.sharingVar.shareViaEmail(address,null /* img */ , null /* url */ ).then((data) =>
                     {
                        console.log('Shared via email');
                     })
                     .catch((err) =>
                     {
                        console.log('Was not shared via email');
                     });
            }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnedproductinfoPage');
  }
  getStoreLOcation(){
    this.navCtrl.push(StorelocationPage);
  }


  getInvoice(){    
     let loading = this.loadingCtrl.create({
       content: 'Logging please wait...',
        dismissOnPageChange: true,
        showBackdrop: true,
        enableBackdropDismiss: true
      }); 
       loading.present();
    let postData={
           "email":this.userEmail
    }
    const url =this._setupService.basePath+'/multichain/user/invoice';
       this._setupService.PostRequest(url,postData).subscribe((response) => {   
       loading.dismiss();     
          var respon=JSON.parse(response[0].json._body);                       
          if(respon.responseCode== 200){
           
              let toast = this.toastCtrl.create({
                     message: respon.responseMessage,
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
              toast.present(); 
            
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

  ownerInfo(value:any) {            
            if(value=="owner"){
                  const confirm = this.alertCtrl.create({
            title: 'Owner',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            
          });
          confirm.present();
          }
         else if (value == "manufacture"){
              const confirm = this.alertCtrl.create({
            title: 'Manufacture',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            
          });
          confirm.present();
          }
        }

}
