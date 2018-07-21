import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,Platform,ToastController,ActionSheetController,AlertController,ModalController} from 'ionic-angular';
import { SetupService } from '../../services/setup.service';
import { ReportModalPage} from '../../pages/report-modal/report-modal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { DashboardPage } from '../../pages/dashboard/dashboard';
import * as moment from 'moment';
@Component({
  selector: 'page-about',
    templateUrl: 'product.html'
})
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
public data:any[];
  dataList:any[]=[];
  origin:any;
  description:any;
  manufacture:any;
  desc:any;
  display:any[]=[];
  qrCode: any;
  qrCode2: any;
  productName:any;
  productDate:any;
  ownerId:any;
  qrcodestatus:boolean=false;
  ownerstatus:boolean=false;
  section: string = 'one';
  somethings: any = new Array(20);
  user:any
  userAdd:any;
  productTime:any;   
  // new response
  dataItem:any;
  strKey:any;
  ownedDetails:any;
  ownedTime:any;
    constructor(public navCtrl: NavController,public alertCtrl: AlertController,private modalCtrl: ModalController,private sharingVar: SocialSharing,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController,public platform:Platform,public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {
        let backAction =  platform.registerBackButtonAction(() => {        
          this.navCtrl.pop();
          backAction();
        },2)
        this.user=JSON.parse(localStorage.getItem('logindetail'));
          if(this.user)            {
            var res=JSON.parse(this.user[0].json._body);
            this.userAdd=res.data.userAddress;
           
          }  
        var productID = this.navParams.get('productID');
        var stremKey = this.navParams.get('stremKey');
        this.productName = this.navParams.get('getOwnproductId');
        // this.strKey=this.navParams.get('stremKey');
        var proName=this.navParams.get('getOwnproductId');
        var streamKey2 = this.navParams.get('getOwnstremKey');
      this.strKey = streamKey2;
        if(productID&&stremKey){          
          this.getQrscanner(productID,stremKey,this.userAdd);  
        }else if(proName&&streamKey2){
          console.log("this.userAdd = =  ="+this.userAdd);
          this.getOwnership(proName,streamKey2,this.userAdd)
        }
      }

           getOwnership(productName:any,productKey:any,userAddress:any){
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
                       debugger
                       if(response[0].json.responseCode==200)
                      {  
                        this.dataList = [];  
                        this.dataItem=response[0].json.data;
                        var index=this.dataItem.length-1; 
                        this.ownerstatus=this.dataItem[index].data.asset.status;
                        this.ownedDetails=this.dataItem[index].data.asset.state;
                        var time=this.dataItem[index].data.asset.time;                       
                        this.ownedTime=moment.unix(time/1000).format("YYYY-MM-DD HH:MM:SS");                        
                        var desc=   this.dataItem[index].data.asset.description;                        
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
                           this.productTime=this.dataItem[i].data.asset.time;

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
                           this.navCtrl.setRoot(DashboardPage);
                          }
               });
            }
  
                getQrscanner(a:any,b:any,c:any){

                }

        
             openModal(characterNum) {  
              let modal = this.modalCtrl.create(ReportModalPage, { 
                'prop': 'prop1', 
                onFeedBack: (data) => {
                //  console.log('Input callback' + JSON.stringify(data));
                }
              });

              modal.onDidDismiss(data => {
                //console.log('Closed with data:' + JSON.stringify(data));
              });

              modal.present().then(result => {
                // modal.overlay['subscribe']((z) => {
                //   console.log(JSON.stringify(z));
                // })
                // const testComp = modal.overlay['instance'] as ReportModalPage;
                // testComp.feedbackSubmit.subscribe(() => {
                //   alert(1);
                // })
              });
            
          }


            showConfirm(){
                var a="productName"+" "+this.productName+","+"productKeyName"+" "+this.strKey;
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

          ownerInfo(value:any) {           
            if(value=="owner"){
                  const confirm = this.alertCtrl.create({
            title: "Owner"+""+this.ownedDetails,
            message: "Date "+" "+moment(this.ownedTime).format("YYYY-MM-DD HH:mm"),            
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
