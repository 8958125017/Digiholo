import { Component } from '@angular/core';
import { NavController,NavParams,Platform,LoadingController,ToastController,ActionSheetController,AlertController} from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SetupService } from '../../services/setup.service';
import { OwnedproductinfoPage } from '../../pages/ownedproductinfo/ownedproductinfo';
import { ProductPage} from '../../pages/product/product';
import { Network } from '@ionic-native/network';
/**
 * Generated class for the ProductscanedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productscaned',
  templateUrl: 'productscaned.html',
})
export class ProductscanedPage {
section: string = 'one';
user:any;
userAdd:any;
ownerListdata:any[]=[];
noOwnerData=false;
scanedListdata:any[]=[];
noScanedData=false;
 constructor(public navCtrl: NavController,private network: Network,public alertCtrl: AlertController,private sharingVar: SocialSharing,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController,public platform:Platform,public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {
      this.user=JSON.parse(localStorage.getItem('logindetail'));
          if(this.user)            
          {
            var res=JSON.parse(this.user[0].json._body);
            console.log("res = = ="+JSON.stringify(res));
            this.userAdd=res.data.userAddress;;
            this.getOwenedData();
          }  
  }
  
  getOwenedData(){    
    this.ownerListdata=[];
                  let loading = this.loadingCtrl.create({
                      content: 'finding owner products.....',
                      dismissOnPageChange: true,
                      showBackdrop: true,
                      duration:15000,
                      enableBackdropDismiss: true,
                    });
                   loading.present();                 
                   const url = this._setupService.basePath + '/multichain/user/owenersProduct?userAddress='+this.userAdd;
                      this._setupService.GetRequest(url).subscribe((response)=>{    
                                    
                       loading.dismiss();                       
                       if(response[0].json.responseCode==200 ){
                         if(response[0].json.data.owner.length>0){
                            this.noOwnerData=false;
                            this.ownerListdata=response[0].json.data.owner;
                          }else{
                            this.noOwnerData=true;
                          }
                        
                       }else{
                         
                       }
                  });
  }

   getScanedData(){     
         this.scanedListdata=[];
             let loading = this.loadingCtrl.create({
                     content: 'finding owner products.....',
                      dismissOnPageChange: true,
                      showBackdrop: true,
                      duration:15000,
                      enableBackdropDismiss: true
                    });
                   loading.present();                 
                   const url = this._setupService.basePath + '/multichain/user/scannedList?userAddress='+this.userAdd;
                   this._setupService.GetRequest(url).subscribe((response)=>{ 
                  loading.dismiss();                                    
                  if(response[0].json.responseCode==200 ){
                         if(response[0].json.data.scann.length>0){
                           this.noScanedData=false;
                            this.scanedListdata=response[0].json.data.scann;
                          }else{
                            this.noScanedData=true;
                          }                        
                       }else{
                         
                       }
                  });
  }

  getownedProductInfo(productInfo:any,streamKey:any){    
     this.navCtrl.setRoot(OwnedproductinfoPage, { 'getOwnproductId': productInfo,'getOwnstremKey': streamKey}); 
  }
  
   showConfirm(productName:any,productStreamKey:any){
                var a="productName"+" "+productName+","+"productKeyName"+" "+productStreamKey;
                console.log("a = = "+a);
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
  }

}
