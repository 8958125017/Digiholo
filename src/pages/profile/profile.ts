import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SetupService } from '../../services/setup.service'
import { FormsModule, FormControl, FormBuilder, Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
selectedTokenImage:any;
profileUpdateForm: FormGroup;
userInfo: any = { userName: '', phoneNo: '',emailId:'',uid:'',image:''};
  constructor(public navCtrl: NavController,private fb: FormBuilder,public _setupService: SetupService, public navParams: NavParams) {
  }

 userprofileFormInit(){
      this.profileUpdateForm = this.fb.group({
            'userName': new FormControl('', Validators.required),
            'phoneNo': new FormControl('', Validators.required),
            'emailId': new FormControl('', Validators.required), 
            'image': new FormControl('') ,
            'uid': new FormControl('')           
        });
    }

 updateProfile(){ 
 	 const url = this._setupService.basePath + 'api/login';
          this._setupService.PostRequest(url , this.userInfo)
        .subscribe((response) => {     
          if(response[0].json.status==200){
            
              
          }else{     
              this.profileUpdateForm.reset();
                
             
          }
       
        })
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  ngOnInit() {     
  this.userprofileFormInit();
}
imageDataAfterupload:any;

    teamImage(event){   
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = (e:any) => {
      this.selectedTokenImage = e.target.result;
      var tokImage=this.selectedTokenImage.split(',')[1]      
      let postData={
        image : tokImage
      }
     const url=this._setupService.basePath + 'merchandise/imageUpload';
            this._setupService.PostRequest(url, postData).subscribe(response => {
         
             if(response[0].status){
                if (response[0].json.json().statusCode == 200) {
                  this.imageDataAfterupload=response[0].json.json().data;                  
                  this.userInfo.image = this.imageDataAfterupload;
                  
                 }else{
                   
                 }
             }
        })      
    }
     reader.readAsDataURL(file)
   }

}
