import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetupService } from '../../services/setup.service'
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
/**
 * Generated class for the TransferownershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transferownership',
  templateUrl: 'transferownership.html',
})
export class TransferownershipPage {
transferOwnerShipForm: FormGroup;
productInfo: any = { data: ''};
  constructor(public navCtrl: NavController,private fb: FormBuilder,public _setupService: SetupService, public navParams: NavParams) {
  }

  transferownershipform(){
      this.transferOwnerShipForm = this.fb.group({
            'data': new FormControl('', Validators.required),                     
        });
    }

  transferOwnership(){ 
 	 const url = this._setupService.basePath + 'api/login';
          this._setupService.PostRequest(url , this.productInfo)
        .subscribe((response) => {     
          if(response[0].json.status==200){
            
              
          }else{     
              this.transferOwnerShipForm.reset();
                
             
          }
       
        })
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  ngOnInit() {     
  this.transferownershipform();
}

}
