import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ConferenceApp } from './app.component';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ForgotpasswordPage} from '../pages/forgotpassword/forgotpassword';
import { SignupPage } from '../pages/signup/signup';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SettingPage } from '../pages/setting/setting';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { ReferPage } from '../pages/refer/refer';
import { ProductPage } from '../pages/product/product';
import { AboutPage } from '../pages/about/about';
import { SetupService } from '../services/setup.service';
import { ShrinkingSegmentHeader } from '../components/shrinking-segment-header/shrinking-segment-header';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ReportModalPage } from '../pages/report-modal/report-modal';
import { ReportappModalPage} from '../pages/reportapp-modal/reportapp-modal';
import { ProductscanedPage} from '../pages/productscaned/productscaned';
import { AboutappPage } from '../pages/aboutapp/aboutapp';
import { StorelocationPage } from '../pages/storelocation/storelocation';
import { HelpPage } from '../pages/help/help';
import { ProfilePage } from '../pages/profile/profile';
import { OwnedproductinfoPage} from '../pages/ownedproductinfo/ownedproductinfo';
import { TransferownershipPage } from '../pages/transferownership/transferownership';
import { OtpReceivePage} from '../pages/otp-receive/otp-receive';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { StorelocatiolistPage} from '../pages/storelocatiolist/storelocatiolist';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Crop } from '@ionic-native/crop';
import { Network } from '@ionic-native/network';
//import { Facebook } from '@ionic-native/facebook';
@NgModule({
  declarations: [
    ConferenceApp,
    TutorialPage, 
    LoginPage,
    ForgotpasswordPage,
    ChangepasswordPage, 
    SignupPage,
    DashboardPage,
    SettingPage,
    ProductPage,
    AboutPage,
    ReportModalPage,
    ProductscanedPage,
    ShrinkingSegmentHeader,
    StorelocationPage,
    AboutappPage,
    HelpPage,
    ReferPage,
    ProfilePage,
    OwnedproductinfoPage,
    TransferownershipPage,
    ReportappModalPage,
    OtpReceivePage,
    StorelocatiolistPage,
    HomePage     
  ],
  imports: [
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgrKvQQhwKYUvgt2L-d57OnGklEk1l_i0',libraries: ["places"]
    }),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,   
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
          { component: HomePage, name: 'HomePage', segment: 'home' },
        { component: ForgotpasswordPage, name: 'ForgotpasswordPage', segment: 'forgotpassword' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: ChangepasswordPage, name: 'ChangepasswordPage', segment: 'changepassword' },
        { component: ProductPage, name: 'ProductPage', segment: 'product' },     
        { component: DashboardPage, name: 'DashboardPage', segment: 'dashboard'}, 
        { component: SettingPage, name: 'SettingPage', segment: 'setting'}, 
        { component: AboutPage, name: 'AboutPage', segment: 'about'}, 
        { component: ReportModalPage, name: 'ReportModalPage', segment: 'report-modal'},
        { component: ReportappModalPage, name: 'ReportappModalPage', segment: 'reportapp-modal'},
        { component: ProductscanedPage, name: 'ProductscanedPage', segment: 'productscaned'},
        { component: ReferPage, name: 'ReferPage', segment: 'refer'},
        { component: HelpPage, name: 'HelpPage', segment: 'help'},
        { component: AboutappPage, name: 'AboutappPage', segment: 'aboutapp'}, 
        { component: StorelocationPage, name: 'StorelocationPage', segment: 'storelocation'}, 
        { component: ProfilePage, name: 'ProfilePage', segment: 'profile'}, 
        { component: OwnedproductinfoPage, name: 'OwnedproductinfoPage', segment: 'ownedproductinfo'},
        { component: TransferownershipPage, name: 'TransferownershipPage', segment: 'transferownership'}, 
        { component: OtpReceivePage, name: 'OtpReceivePage', segment: 'OtpReceive'},  
        { component: StorelocatiolistPage, name: 'StorelocatiolistPage', segment: 'storelocatiolist'}, 
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    TutorialPage,  
    LoginPage,
    HomePage,
    ForgotpasswordPage,
    ChangepasswordPage,     
    SignupPage,
    DashboardPage,
    ProductscanedPage,  
    SettingPage,
    ProductPage,
    AboutPage,
    ReportModalPage,
    ReferPage,
    HelpPage,
    AboutappPage,
    StorelocationPage,
    ProfilePage,
    OwnedproductinfoPage,
    TransferownershipPage,
    ReportappModalPage,
    OtpReceivePage,
    StorelocatiolistPage    
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,BarcodeScanner,SocialSharing,
    UserData,StatusBar,SetupService,AndroidPermissions,
    InAppBrowser,Geolocation,
    Camera,Crop,Network,
    FileTransfer,
    SplashScreen
  ]
})
export class AppModule { }
