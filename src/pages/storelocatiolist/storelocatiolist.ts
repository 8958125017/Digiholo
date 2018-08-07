import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetupService } from '../../services/setup.service';

/**
 * Generated class for the StorelocatiolistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storelocatiolist',
  templateUrl: 'storelocatiolist.html',
})

export class StorelocatiolistPage {
  brandsName:any;
  locationList:any[]=[];
  constructor(public navCtrl: NavController,public _setupService: SetupService, public navParams: NavParams) {
  	 // this.brandsName = this.navParams.get('brands');
  	 this.brandsName = "Sana"
  	 this.getStoreLocation(this.brandsName);
  }
  getStoreLocation(brands:any){
   let postData={
   	    brand:brands
   }
   const url =this._setupService.basePath+'/multichain/product/locator';    
   this._setupService.PostRequest(url,postData).subscribe((response)=>{
   
    this.locationList=response;
   })
  }
  getDirections(){
  	  	console.log("open map");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StorelocatiolistPage');
  }

}
