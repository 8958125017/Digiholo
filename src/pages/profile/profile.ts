import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController,ModalController,
          ActionSheetController,Events} from 'ionic-angular';
import { SetupService } from '../../services/setup.service'
import {  FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';

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
    userInfo: any = { userName: '', phoneNo: '',emailId:'',image:'',userAddress:''};
    user:any;
    loading:any;
    images: any = [];
    imageDataAfterupload:any;
    imagebase64:any;
    testData:any;
 constructor(public navCtrl: NavController,public events: Events,private camera: Camera,private crop: Crop, private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController,private fb: FormBuilder,public toastCtrl: ToastController,public loadingCtrl: LoadingController,public _setupService: SetupService, public navParams: NavParams) {
  this.user=JSON.parse(localStorage.getItem('logindetail'));                 
    var res=JSON.parse(this.user[0].json._body);    
    this.userInfo.uid=res.data.uuid;
    this.userInfo.emailId=res.data.email;
    this.userInfo.userName=res.data.userName;
    this.userInfo.phoneNo=res.data.contactNumber;
    this.userInfo.userAddress=res.data.userAddress;    
    if(res.data.image){
      this.userInfo.image = res.data.image;
    }else{
      this.userInfo.image="assets/img/marty-avatar.jpeg";
    }
  }

 userprofileFormInit(){
      this.profileUpdateForm = this.fb.group({
            'userName': new FormControl('', Validators.required),
            'phoneNo': new FormControl('', Validators.required),
            'emailId': new FormControl('', Validators.required), 
            'image': new FormControl('')                       
        });
    }


 updateProfile(){    
    this.loading = this.loadingCtrl.create({
        content: 'updating....',
         dismissOnPageChange: true,
         showBackdrop: true,
         duration:15000,
         enableBackdropDismiss: true
    });

    this.loading.present();
   let postData={
         userName:this.userInfo.userName,
         email:this.userInfo.emailId,
         contactNumber:this.userInfo.phoneNo,
         userAddress:this.userInfo.userAddress,
         image:this.userInfo.image
      }
 	 const url = this._setupService.basePath + '/multichain/user/updateUserProfile';
        this._setupService.PostRequest(url,postData)
        .subscribe((response) => {           
        this.loading.dismiss();
        var respon=JSON.parse(response[0].json._body);
          if(respon.responseCode== 200){
             var userUpdatedImage=respon.data.image;             
             this.events.publish("userImage", userUpdatedImage); 
            let toast = this.toastCtrl.create({
                     message: respon.responseMessage,
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present(); 
              
          }else{     
             let toast = this.toastCtrl.create({
                     message: "something went wrong",
                     showCloseButton: true,
                     closeButtonText: 'Ok',
                     duration: 5000
                });
                toast.present();
          }
        })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ngOnInit() { 
    this.userprofileFormInit();
  
       
  }
  


    teamImage(event){   
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = (e:any) => {
      this.selectedTokenImage = e.target.result;
      var tokImage=this.selectedTokenImage.split(',')[1]      
      let postData={
        image : tokImage
      }      
            const url=this._setupService.basePath + '/multichain/user/imageUploadTax';
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

  

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {    
    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      allowEdit: false
    };
     
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {    
      let base64Image = 'data:image/jpeg;base64,' + imagePath;
     this.uploadInServer(base64Image);
    
      // this.crop.crop('base64Image', {quality: 70}).then((newImage) => {        
      //                 this.uploadInServer(newImage);
      //            });
    }, (err) => {
      console.log('Error: ', err);
    });
  }
  
  convertToBase64(url, outputFormat) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        canvas = null;
        resolve(dataURL);
      };
      img.src = url;
    });
  
}

  uploadInServer(img:any){    
   this.selectedTokenImage =img;
   var tokImage=this.selectedTokenImage.split(',')[1]    
     let postData={
      image:tokImage
    }
    
    let loading = this.loadingCtrl.create({
       content: 'uploading...',
        dismissOnPageChange: true,
        showBackdrop: true,
        duration:15000,
        enableBackdropDismiss: true
      }); 
       loading.present(); 
    const url=this._setupService.basePath + '/multichain/user/imageUploadTax';
            this._setupService.PostRequest(url, postData).subscribe(response => {
             loading.dismiss();               
                var respon=JSON.parse(response[0].json._body);  
                if(respon.statusCode==200){ 
                   this.userInfo.image=respon.data;
                 }
        })
    }

}
