import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetupService } from '../../services/setup.service'
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
/**
 * Generated class for the StorelocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storelocation',
  templateUrl: 'storelocation.html',
})
export class StorelocationPage {

  storeLocationForm: FormGroup;
 storeInfo: any = { brand: '', product: '',};
  constructor(public navCtrl: NavController,private fb: FormBuilder,public _setupService: SetupService, public navParams: NavParams) {
  }

 storeLocationFormInit(){
      this.storeLocationForm = this.fb.group({
            'brand': new FormControl('', Validators.required),
            'product': new FormControl('', Validators.required)
                   
        });
    }

 getStoreLocations(){ 
 	 const url = this._setupService.basePath + 'api/login';
          this._setupService.PostRequest(url , this.storeInfo)
        .subscribe((response) => {     
          if(response[0].json.status==200){
            
              
          }else{     
              this.storeLocationForm.reset();
                
             
          }
       
        })
    }
 
  ngOnInit() {     
  this.storeLocationFormInit();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad StorelocationPage');
  }

}
