import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,Platform,ToastController,ViewController,ActionSheetController,ModalController} from 'ionic-angular';
import { SetupService } from '../../services/setup.service';
import { ReportModalPage} from '../../pages/report-modal/report-modal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LoginPage} from '../../pages/login/login';
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
 	//qrCode:any="a65ccc27cce1161d0fdeab42b2d103b278f5078b78fd3723af8caf076d7f5690";
  	constructor(public navCtrl: NavController,private modalCtrl: ModalController,private sharingVar: SocialSharing,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController,public platform:Platform,public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {
	  		let backAction =  platform.registerBackButtonAction(() => {        
	        this.navCtrl.pop();
	        backAction();
	      },2)
	  		var productID = this.navParams.get('productID');
	  		var stremKey = this.navParams.get('stremKey');
	  		this.getQrscanner(productID,stremKey);	
    	
  	  	  }
          
        
  
            // get Qrscanner
             getQrscanner(prodName:any,rawTx:any){   
  	                    let loading = this.loadingCtrl.create({
                           content: 'please wait...'
                          });
                         loading.present();
                      const url = this._setupService.basePath + '/multichain/product/getStreamItems?productName='+prodName+'&rawTxid='+rawTx;
                      this._setupService.GetRequest(url).subscribe((response)=>{
                      loading.dismiss();
                      if(response[0].json.responseCode==200)
                      {      
		      			this.dataList = [];	  
		      			var result=response[0].json.data.details.asset.step;
		      			this.origin=result[0].user.location;
		      			this.productName=response[0].json.data.productName;
		      			this.productDate=response[0].json.data.details.asset.manufacture.date;
		      			 this.ownerId=response[0].json.data.owners;
                        if(this.ownerId.length>1){
                          this.ownerstatus=true;
                        }     	
		       			this.description= response[0].json.data.details.asset.description;       
		       			for(var key in this.description)
		       			{      
					        let data={
					                 key:key,
					                 value:this.description[key],
					        }
					        this.display.push(data);
		         		}
		       	
		      			for(var i=1;i<result.length;i++)
		      			{
		                 	let objData ={                           
		                        	date:'',
		                        	location:'',                           
		                     	};
		                 	objData.date=(result[i].user.date);
		                 	objData.location=(result[i].user.location);                      
		                 	this.dataList.push(objData);
		         	  }
                 }
                 // else{
                 //   debugger
                 //    loading.dismiss();
                 //   let toast = this.toastCtrl.create({
                 //           message: response[0].json.responseMessage,
                 //           showCloseButton: true,
                 //           closeButtonText: 'Ok',
                 //           duration: 5000
                 //      });
                 //     toast.present();                  
                  
                 // }
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
      // modal.overlay['subscribe']((z) => {
      //   console.log(JSON.stringify(z));
      // })
      const testComp = modal.overlay['instance'] as ReportModalPage;
      // testComp.feedbackSubmit.subscribe(() => {
      //   alert(1);
      // })
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
             }
