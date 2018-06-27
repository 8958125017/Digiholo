import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController,LoadingController,ToastController,AlertController,Nav } from 'ionic-angular';
import { updateValue,UserEmailId,Location} from '../../interfaces/user-options';
import { SetupService } from '../../services/setup.service'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductPage} from '../../pages/product/product';

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

  
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,public alertCtrl: AlertController,public toastCtrl: ToastController,public loadingCtrl: LoadingController) { 
                                         
  
  }

 ownershipQrScanner(){ 

    this.navCtrl.push(ProductPage, { 'getOwnproductId': 'SUMSUMG-1012','getOwnstremKey': '796f31fb04a44305bd5e50e57733b83d17fce27380e7c3ea0e79bb2aa2c92358'});
       // this.barcodeScanner.scan().then((barcodeData) => {
       //    this.selectedProduct=barcodeData.text;
       //    if(this.selectedProduct){
       //              var data = JSON.parse(this.selectedProduct);      
       //      this.navCtrl.push(ProductPage, { 'getOwnproductId': data.productName,'getOwnstremKey': data.rawTxid});
       //    }
       //  });
  }

   qrscanner(){

     this.navCtrl.push(ProductPage, { 'productID': "SUMSUMG-1012",'stremKey': "796f31fb04a44305bd5e50e57733b83d17fce27380e7c3ea0e79bb2aa2c92358"})
        // this.barcodeScanner.scan().then((barcodeData) => {
        //   this.selectedProduct=barcodeData.text;
        //   if(this.selectedProduct){
        //     var data = JSON.parse(this.selectedProduct);      
        //    this.navCtrl.push(ProductPage, { 'productName': data.productName,'userAddress': data.userAddress});
        //   }
        // });
  }

  
 enterCode(){   
     let prompt = this.alertCtrl.create({
      title: 'Enter QR Code',       
      inputs: [
        {          
          name: 'proName',
          type: 'text',
          placeholder: 'enter product name',         
          
        },
        {          
          name: 'strKey',
          type: 'text',
          placeholder: 'enter stream key',         
          
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
                 this.navCtrl.push(ProductPage, { 'productID': proName,'stremKey': strKey}) 
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




}
