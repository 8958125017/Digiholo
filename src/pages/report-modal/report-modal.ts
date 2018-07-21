import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController,ToastController,MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { SetupService } from '../../services/setup.service' 

/**
 * Generated class for the ReportModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-modal',
  templateUrl: 'report-modal.html',
})
export class ReportModalPage {
prop: string;
reportDetails: any= { name: '', location: '', mobileNo: '', emailId: '', problem: '' };
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
            'name': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]{3,32}$/)])),
            'location': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]$/)])),
            'email': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z][-_.a-zA-Z0-9]{3,29}\@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,15}|[0-9]{1,3})(\]?)$/)])),
            'mobileNo': new FormControl('',Validators.compose([Validators.required,Validators.minLength(0), Validators.maxLength(10)])),
            'problem':new FormControl('', Validators.required),
            
        })
      
    }
    sendFeedBack(){
      let loading = this.loadingCtrl.create({
         content: 'account creating...'
        });
        loading.present();
        let postData={
                       userAddress:"1JDBLrZqiRfrXH12JCFRdM767JGuWa4LtpMkvU",
                       userName:this.reportDetails.name,
                       location:this.reportDetails.name,
                       contactNumber:this.reportDetails.name,
                       problemDetail:this.reportDetails.name,
                       email:this.reportDetails.name  
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
