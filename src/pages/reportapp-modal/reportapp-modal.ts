import { Component, ViewEncapsulation,OnInit, ChangeDetectorRef, EventEmitter, Output  } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController,ToastController,MenuController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { SetupService } from '../../services/setup.service' 

/**
 * Generated class for the ReportappModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reportapp-modal',
  templateUrl: 'reportapp-modal.html',
})
export class ReportappModalPage {

  prop: string;
reportDetails: any= { reportError: '', };
public reportForm: FormGroup;
  //@Output() feedbackSubmit = new EventEmitter();

 // onFeedBack: Function;

  constructor(public navCtrl: NavController,public viewCtrl:ViewController, private fb: FormBuilder,public toastCtrl: ToastController,public menuCtrl: MenuController, public navParams: NavParams,public _setupService: SetupService,public loadingCtrl: LoadingController) {
       // this.prop = params.get('prop');
       // this.onFeedBack = params.get('onFeedBack');
  }

  ngOnInit() {
     this.reportFormInit();
  }


  reportFormInit(){
      this.reportForm = this.fb.group({
            'reportError': new FormControl('', Validators.required)           
            
        })
      
    }
    sendReport(){
      let loading = this.loadingCtrl.create({
         content: 'account creating...'
        });
        loading.present();
        let postData={
                       userAddress:"1JDBLrZqiRfrXH12JCFRdM767JGuWa4LtpMkvU",
                       reportError:this.reportDetails.name                     
                     }
                       const url = this._setupService.basePath + '/multichain/user/report';
                      this._setupService.PostRequest(url,postData).subscribe((response)=>{
                         loading.dismiss();
                       var res=JSON.parse(response[0].json._body);

                       if(res.responseCode==200){
                          let toast = this.toastCtrl.create({
                               message: 'Report sent succesfully !!',
                               showCloseButton: true,
                               closeButtonText: 'Ok',
                               duration: 5000
                           });
                         toast.present();
                         this.viewCtrl.dismiss();
                       }else{

                       }
                      });


    }
  

 

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
