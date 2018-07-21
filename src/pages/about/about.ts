import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,Platform,AlertController,ToastController,ActionSheetController,ModalController} from 'ionic-angular';
import { SetupService } from '../../services/setup.service';
import { ReportModalPage} from '../../pages/report-modal/report-modal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Network } from '@ionic-native/network';
@Component({
  selector: 'page-about',
    templateUrl: 'about.html'
})

export class AboutPage {
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
  userAdd:any;
  productTime:any;   

  dataItem:any;
  strKey:any;
  	constructor(public navCtrl: NavController, private network: Network,public alertCtrl: AlertController,private modalCtrl: ModalController,private sharingVar: SocialSharing,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController,public platform:Platform,public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {
	  		let backAction =  platform.registerBackButtonAction(() => {        
	        this.navCtrl.pop();
	        backAction();
	      },2)
        this.productName=this.navParams.get('getOwnproductId');
    	  		var productID = this.navParams.get('getOwnproductId');
    	  		var stremKey = this.navParams.get('getOwnstremKey');
            this.strKey=stremKey;
    	  		this.getQrscanner(productID,stremKey);
  	  	  }
          
        // multichain/user/scanned?userAddress=1DiFWnSZAkFUveuFHDP4RsgVrmudPkRqt8WHbn&productName=SUMSUNG1906&rawTxid=5b4b8d0672dd1bc87a00e431d08a354fa07dc19344d908ef9cfd3f3e2b17cd4c

  
            // get Qrscanner
            getQrscanner(productName:any,productKey:any,){
              debugger
                         let loading = this.loadingCtrl.create({
                           content: 'please wait...',
                           dismissOnPageChange: true,
                            showBackdrop: true,
                            duration:15000,
                            enableBackdropDismiss: true
                          });
                         loading.present();
                        let postData={
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
                        var index=this.dataItem.length-1; 
                        this.ownerstatus=this.dataItem[index].data.asset.status
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
                           
                          }
               });
            }
  

   openModal(characterNum) {  
    let modal = this.modalCtrl.create(ReportModalPage, { 
      'prop': 'prop1', 
      onFeedBack: (data) => {
        console.log('Input callback' + JSON.stringify(data));
      }
    });

    modal.onDidDismiss(data => {
      console.log('Closed with data:' + JSON.stringify(data));
    });

    modal.present().then(result => {
     
    });
  
}


    showConfirm(){
      	var a="hello";
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
}
             
 }
