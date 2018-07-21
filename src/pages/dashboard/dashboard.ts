import { Component} from '@angular/core';
import { NavController,LoadingController,ToastController,AlertController } from 'ionic-angular';
// import { SetupService } from '../../services/setup.service'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductPage} from '../../pages/product/product';
import { Network } from '@ionic-native/network';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.      
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {   
    
     selectedProduct: any;

  
  constructor(private toast: ToastController, private network: Network,public navCtrl: NavController,private barcodeScanner: BarcodeScanner,public alertCtrl: AlertController,public toastCtrl: ToastController,public loadingCtrl: LoadingController) { 
                                         
  
  }

 ownershipQrScanner(){ 

   this.navCtrl.push(ProductPage, { 'getOwnproductId': 'Dell-12','getOwnstremKey': 'key111'});
       // this.barcodeScanner.scan().then((barcodeData) => {
       //    this.selectedProduct=barcodeData.text;
       //    if(this.selectedProduct){
       //              var data = JSON.parse(this.selectedProduct);      
       //      this.navCtrl.push(ProductPage, { 'getOwnproductId': data.productName,'getOwnstremKey': data.rawTxid});
       //    }
       //  });
  }

   qrscanner(){
   
    //this.navCtrl.push(ProductPage, { 'productID': "Hand-Wash",'stremKey': "7745f353aa254a31cf2f1b43febd9d87b69b3d0922f8e3dbe7cacdf6a7686280"})
        this.barcodeScanner.scan().then((barcodeData) => {
          this.selectedProduct=barcodeData.text;
          if(this.selectedProduct){
            var data = JSON.parse(this.selectedProduct);      
           this.navCtrl.push(ProductPage, { 'productID': data.productName,'stremKey': data.rawTxid});
          }
        });
  }

  
 enterCode(){   
     let prompt = this.alertCtrl.create({
      title: 'Get Product Info',       
      inputs: [
        {          
          name: 'proName',
          type: 'text',
          placeholder: 'enter product name',         
          
        },
        {          
          name: 'strKey',
          type: 'text',
          placeholder: 'enter product key',         
          
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {            
             
          }
        },
        {
          text: 'submit',
          handler: data => {            
            
            var proName=data.proName; 
            var strKey=data.strKey;
            if(proName&&strKey){ 
                 this.navCtrl.push(ProductPage, { 'getOwnproductId': proName,'getOwnstremKey': strKey}) 
               }else{
              let toast = this.toastCtrl.create({
                     message: "field should be required!!",
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
             toast.present();
            }
          //return false;
          }

        }
      ],
      enableBackdropDismiss: false
    });
    prompt.present();
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
