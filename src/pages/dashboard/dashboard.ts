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

  
  constructor(private network: Network,public navCtrl: NavController,private barcodeScanner: BarcodeScanner,public alertCtrl: AlertController,public toastCtrl: ToastController,public loadingCtrl: LoadingController) { 
                                         
  
  }

 ownershipQrScanner(){ 
 //this.navCtrl.push(ProductPage, { 'getOwnproductId': 'Activa-i4','getOwnstremKey': 'keyActiva-i402'});
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
              this.navCtrl.push(ProductPage, { 'getOwnproductId': data.productName,'getOwnstremKey': data.productKeyName});     
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
   

  
 enterCode(){   
     let prompt = this.alertCtrl.create({
      title: 'Get Product Info',       
      inputs: [
        // {          
        //   name: 'proName',
        //   type: 'text',
        //   placeholder: 'enter product name',         
          
        // },
        {          
          name: 'strKey',
          type: 'text',
          placeholder: 'enter  key',         
          
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
            var strKey=data.strKey;
            var status = this.isHex(strKey);
            if(status){             
                 if(strKey){ 
                    this.hex2a(strKey); //found hex avaliable in string
                   }
                   else{
                  let toast = this.toastCtrl.create({
                         message: "field should be required!!",
                         showCloseButton: true,
                         closeButtonText: 'Ok',
                         duration: 5000
                    });
                   toast.present();
                }
            }else{
              let toast = this.toastCtrl.create({
                         message: "somthing went wrong!!",
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


// ownershipQrScanner(){ 
//  //this.navCtrl.push(ProductPage, { 'getOwnproductId': 'Activa-i4','getOwnstremKey': 'keyActiva-i402'});
//        this.barcodeScanner.scan().then((barcodeData) => {
//           this.selectedProduct=barcodeData.text;
//           if(this.selectedProduct){
//                     var data = JSON.parse(this.selectedProduct);      
//             this.navCtrl.push(ProductPage, { 'getOwnproductId': data.productName,'getOwnstremKey': data.rawTxid});
//           }
//         });
//   }

   

  
//  enterCode(){   
//      let prompt = this.alertCtrl.create({
//       title: 'Get Product Info',       
//       inputs: [
//         {          
//           name: 'proName',
//           type: 'text',
//           placeholder: 'enter product name',         
          
//         },
//         {          
//           name: 'strKey',
//           type: 'text',
//           placeholder: 'enter product key',         
          
//         }
//       ],
//       buttons: [
//         {
//           text: 'Cancel',
//           handler: data => {            
             
//           }
//         },
//         {
//           text: 'submit',
//           handler: data => {            
            
//             var proName=data.proName; 
//             var strKey=data.strKey;
//             if(proName&&strKey){ 
//                  this.navCtrl.push(ProductPage, { 'getOwnproductId': proName,'getOwnstremKey': strKey}) 
//                }else{
//               let toast = this.toastCtrl.create({
//                      message: "field should be required!!",
//                      showCloseButton: true,
//                      closeButtonText: 'Ok',
//                      duration: 5000
//                 });
//              toast.present();
//             }
//           //return false;
//           }

//         }
//       ],
//       enableBackdropDismiss: false
//     });
//     prompt.present();
//   }


}
