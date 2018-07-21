
import { AgmMap, MapsAPILoader, } from '@agm/core';
import {  NavController,Platform, LoadingController,Events ,ToastController} from 'ionic-angular';
import { Component, ElementRef,  NgZone, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { SetupService } from '../../services/setup.service';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-map',
  styles: [`
    agm-map {
      height: 100%;
      width:100%;
    }
  `],
  templateUrl: 'gmap.html',
})
export class GmapPage implements OnInit{
 
   @ViewChild(AgmMap)
   agmMap: AgmMap
 
   latitude: number;
   longitude: number;
   zoom: number;
   icon:any;
 
  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public events: Events,private geolocation: Geolocation,public platform: Platform,public loadingCtrl: LoadingController,public storage: Storage,private mapsAPILoader: MapsAPILoader,public _setupService: SetupService, private ngZone: NgZone ) 
   {
      
      let backAction =  platform.registerBackButtonAction(() => {        
              this.navCtrl.pop();
              backAction();
            },2)
      if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;    
        this.zoom = 16;              
      });
    }
      this.platform.ready().then(() =>  {        
         let options = {
            enableHighAccuracy: true, 
            maximumAge: 3600,
            timeout:10000
       }; 
       this.geolocation.getCurrentPosition(options).then((response) => {
       this.latitude =response.coords.latitude;            
       this.longitude =response.coords.longitude;      
      this.zoom = 16;     
       }).catch((error) => {   
     });
   });     
    
   }

mapClicked(){

}



   
  
  
ionViewWillEnter() {
  
  }
  

  ngOnInit() {  
    // this.agmMap.triggerResize();
 
    

  }
 
 //set current position

  setCurrentPosition() {
  
   
  }
  
 // click on marker and open tab in buttom



  



 

  ionViewWillLeave() {   
  
  }
}

