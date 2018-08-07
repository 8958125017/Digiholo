import { Component } from '@angular/core';
import { NavController,ToastController,Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 componentName:any;
  constructor(public navCtrl: NavController,public platform:Platform,public toastCtrl: ToastController) {
     let backAction =  platform.registerBackButtonAction(() => { 
          var netStatus=localStorage.getItem('NetworkStatus'); 
          if(netStatus=="offline")  {
             this.navCtrl.pop();
             backAction();
          }             
        },2)
     this.componentName=this.navCtrl.getActive().name;
     localStorage.setItem('cmpName',this.componentName);
     this.toster();
  }

  toster(){
  	let toast = this.toastCtrl.create({
                         message: "No internet conection!!",
                         showCloseButton: true,
                         closeButtonText: 'Ok',
                         duration: 5000
                    });
                   toast.present();
  }

}
