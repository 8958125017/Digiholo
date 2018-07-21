import { Component } from '@angular/core';
import { SetupService } from '../../services/setup.service';
import { NavController,NavParams,LoadingController,Platform,ToastController,ActionSheetController,ModalController} from 'ionic-angular';
import { ReportappModalPage} from '../../pages/reportapp-modal/reportapp-modal';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController,public platform:Platform,public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {
  }

 
  appReportPage(characterNum) {  
              let modal = this.modalCtrl.create(ReportappModalPage, { 
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
               // const testComp = modal.overlay['instance'] as ReportappModalPage;
                // testComp.feedbackSubmit.subscribe(() => {
                //   alert(1);
                // })
              });
            
          }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
