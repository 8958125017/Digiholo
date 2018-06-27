import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,Platform,ToastController,ViewController,ActionSheetController} from 'ionic-angular';
import { SetupService } from '../../services/setup.service'
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the ReferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refer',
  templateUrl: 'refer.html',
})
export class ReferPage {
referForm: FormGroup;
referInfo: any = { referCode: "DIGIHOLO12345"};
  constructor(public navCtrl: NavController,private fb: FormBuilder,public _setupService: SetupService, public navParams: NavParams,private sharingVar: SocialSharing,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController) {
  }

  referformInit(){
      this.referForm = this.fb.group({
            'referCode': new FormControl('', Validators.required),                     
        });
    }

  transferOwnership(){ 
 	 const url = this._setupService.basePath + 'api/login';
          this._setupService.PostRequest(url , this.referInfo)
        .subscribe((response) => {     
          if(response[0].json.status==200){
            
              
          }else{     
              this.referForm.reset();               
             
          }
       
        })
    }

  ngOnInit() {     
  this.referformInit();
   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferPage');
  }

  showConfirm(){
                var a="DIGIHOLO12345";
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
