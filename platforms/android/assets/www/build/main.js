webpackJsonp([0],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_setup_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NgForm } from '@angular/forms';



//import { ChangepasswordPage } from '../changepassword/changepassword';

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, toastCtrl, menuCtrl, navParams, alertCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.emailId = { email: '' };
        this.otpvalue = { traderMailId: '', otp: '', };
        this.submitted = false;
    }
    ForgotpasswordPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menuCtrl.enable(false);
    };
    ForgotpasswordPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    //   forgotPassword(form: NgForm){
    //   	this.submitted = true; 
    //   	 if (form.valid) {  
    //      let loading = this.loadingCtrl.create({
    //        content: 'sending otp in your mailId...'
    //       });
    //   loading.present();
    //    this._setupService.forgotPassword(this.emailId).subscribe((response) => { 
    //     if(response.statusCode== 200){
    //      this.responseData = response;  
    //     loading.dismiss();
    //      localStorage.setItem('ResponseData',JSON.stringify(response));    
    //      let toast = this.toastCtrl.create({
    //                      message: 'OTP sent to your email id',
    //                      showCloseButton: true,
    //                      closeButtonText: 'Ok',
    //                      duration: 5000
    //                 });
    //                 toast.present(); 
    //       let prompt = this.alertCtrl.create({
    //       title: 'One Time Password',      
    //       inputs: [
    //         {          
    //           name: 'otp',
    //           type: 'password',
    //           placeholder: 'One Time Password'
    //         }
    //       ],
    //       buttons: [
    //         {
    //           text: 'Cancel',
    //           handler: data => {
    //               }
    //         },
    //         {
    //           text: 'submit',
    //           handler: data => {
    //             let loading = this.loadingCtrl.create({
    //        content: 'verifying otp...'
    //       });
    //             loading.present();
    //             this._setupService.forgotPasswordOTP({"userMailId": response.userMailId,"otp": data.otp
    //                   }).subscribe((response) => {   
    //                if(response.statusCode== 200){                                  
    //                   this.navCtrl.push(ChangepasswordPage);
    //                    loading.dismiss();
    //                  }       
    //                  else {
    //                      let toast = this.toastCtrl.create({
    //                      message: response.message,
    //                      showCloseButton: true,
    //                      closeButtonText: 'Ok',
    //                      duration: 5000
    //                 });
    //                   toast.present(); 
    //                   loading.dismiss();
    //                     }      
    //              } );        
    //           }
    //         }
    //       ],
    //       enableBackdropDismiss: false
    //     });
    //     prompt.present(); 
    //      }else{
    //           this.responseData = response;
    //                 let toast = this.toastCtrl.create({
    //                      message: this.responseData.message,
    //                      showCloseButton: true,
    //                      closeButtonText: 'Ok',
    //                      duration: 5000
    //                 });
    //                 toast.present();
    //                  loading.dismiss(); 
    //      }          
    //  });
    //  }
    // }
    ForgotpasswordPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotpasswordPage.prototype.signup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/forgotpassword/forgotpassword.html"*/`<ion-header>\n	<ion-navbar>\n		<ion-title>Forgot Password</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	\n\n	<form #forgotPasswordForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked class="button-color">Email id</ion-label>\n				<ion-input [(ngModel)]="emailId.email" placeholder="enter email id" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				Email is required\n			</p>\n		</ion-list>\n    <ion-row responsive-sm>\n          <ion-col>\n				<button class="button-backcolor" ion-button (click)="forgotPassword(forgotPasswordForm)" type="submit" block>Submit</button>\n			</ion-col>\n	</ion-row> \n		\n	</form>\n\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/forgotpassword/forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_report_modal_report_modal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductPage = (function () {
    function ProductPage(navCtrl, alertCtrl, modalCtrl, sharingVar, actionSheetCtrl, toastCtrl, platform, navParams, _setupService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.sharingVar = sharingVar;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.dataList = [];
        this.display = [];
        this.qrcodestatus = false;
        this.ownerstatus = false;
        this.section = 'one';
        this.somethings = new Array(20);
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user) {
            var res = JSON.parse(this.user[0].json._body);
            this.userAdd = res.data.userAddress;
        }
        var productID = this.navParams.get('productID');
        var stremKey = this.navParams.get('stremKey');
        this.productName = this.navParams.get('getOwnproductId');
        // this.strKey=this.navParams.get('stremKey');
        var proName = this.navParams.get('getOwnproductId');
        var streamKey2 = this.navParams.get('getOwnstremKey');
        this.strKey = streamKey2;
        if (productID && stremKey) {
            this.getQrscanner(productID, stremKey, this.userAdd);
        }
        else if (proName && streamKey2) {
            console.log("this.userAdd = =  =" + this.userAdd);
            this.getOwnership(proName, streamKey2, this.userAdd);
        }
    }
    ProductPage.prototype.getOwnership = function (productName, productKey, userAddress) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'please wait...',
            duration: 15000
        });
        loading.present();
        var postData = {
            userAddress: userAddress,
            productName: productName,
            productKeyName: productKey
        };
        var url = this._setupService.basePath + '/multichain/product/listStreamKeyItem';
        this._setupService.PostRequestUnautorized(url, postData).subscribe(function (response) {
            loading.dismiss();
            debugger;
            if (response[0].json.responseCode == 200) {
                _this.dataList = [];
                _this.dataItem = response[0].json.data;
                for (var i = 0; i < _this.dataItem.length; i++) {
                    var objData = {
                        location: '',
                        state: '',
                        blocktime: ''
                    };
                    objData.location = _this.dataItem[i].location ? _this.dataItem[i].location : '--';
                    objData.state = _this.dataItem[i].state ? _this.dataItem[i].state : '--';
                    var time = _this.dataItem[i].blocktime;
                    objData.blocktime = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](time / 1000).format("DD-MM-YYYY HH:mm:ss");
                    _this.dataList.push(objData);
                }
                var index = _this.dataItem.length - 1;
                _this.ownerstatus = _this.dataItem[index].status;
                _this.ownedDetails = _this.dataItem[index].state;
                var time = _this.dataItem[index].blocktime;
                _this.transferTime = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](time / 1000).format("DD-MM-YYYY HH:mm:ss");
                var ownTime = _this.dataItem[index].manufacture.date;
                _this.ownedTime = __WEBPACK_IMPORTED_MODULE_6_moment__(ownTime).format("DD-MM-YYYY ");
                _this.manufactureInfo = _this.dataItem[index].manufacture.companyName;
                _this.city = _this.dataItem[index].manufacture.address.city;
                _this.state = _this.dataItem[index].manufacture.address.state;
                _this.country = _this.dataItem[index].manufacture.address.country;
                _this.pin = _this.dataItem[index].manufacture.address.pin;
                _this.manufactureDate = _this.dataItem[index].manufacture.date;
                var desc = _this.dataItem[index].description;
                for (var key in desc) {
                    var data = {
                        key: key,
                        value: desc[key],
                    };
                    _this.display.push(data);
                }
                _this.ownerId = _this.dataItem[index].description;
                for (var i = 0; i < 1; i++) {
                    _this.origin = _this.dataItem[i].location;
                    var time = _this.dataItem[i].manufacture.date;
                    _this.productTime = __WEBPACK_IMPORTED_MODULE_6_moment__(time).format("DD-MM-YYYY");
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: response[0].json.responseMessage,
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */]);
            }
        });
    };
    ProductPage.prototype.getQrscanner = function (a, b, c) {
    };
    ProductPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_report_modal_report_modal__["a" /* ReportModalPage */], {
            'prop': 'prop1',
            onFeedBack: function (data) {
            }
        });
        modal.onDidDismiss(function (data) {
        });
        modal.present().then(function (result) {
        });
    };
    ProductPage.prototype.showConfirm = function () {
        var _this = this;
        var a = "productName" + " " + this.productName + "," + "productKeyName" + " " + this.strKey;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share address Via',
            buttons: [
                {
                    text: 'whatsapp',
                    role: 'destructive',
                    handler: function () {
                        _this.whatsUpShare(a);
                    }
                }, {
                    text: 'facebook',
                    role: 'destructive',
                    handler: function () {
                        _this.facebookShare(a);
                    }
                }, {
                    text: 'message',
                    role: 'destructive',
                    handler: function () {
                        _this.messageShare(a);
                    }
                },
                {
                    text: 'email',
                    role: 'destructive',
                    handler: function () {
                        _this.emailShare(a);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProductPage.prototype.whatsUpShare = function (address) {
        this.sharingVar.shareViaWhatsApp(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via whatsup');
        })
            .catch(function (err) {
            console.log('Was not shared via whatsup');
        });
    };
    ProductPage.prototype.facebookShare = function (address) {
        this.sharingVar.shareViaFacebook(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via Facebook');
        })
            .catch(function (err) {
            console.log('Was not shared via Facebook');
        });
    };
    ProductPage.prototype.messageShare = function (address) {
        this.sharingVar.shareViaSMS(address, null /* img */).then(function (data) {
            console.log('Shared via sms');
        })
            .catch(function (err) {
            console.log('Was not shared via sms');
        });
    };
    ProductPage.prototype.emailShare = function (address) {
        this.sharingVar.shareViaEmail(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via email');
        })
            .catch(function (err) {
            console.log('Was not shared via email');
        });
    };
    ProductPage.prototype.ownerInfo = function (value) {
        if (value == "owner") {
            var confirm_1 = this.alertCtrl.create({
                title: "Owner",
                message: "<b>Status</b>" + " " + "Owned" + " " + "<br>" + "<b>Date</b>" + " " + this.ownedTime,
                buttons: [
                    {
                        text: 'ok',
                        handler: function (data) {
                        }
                    },
                ]
            });
            confirm_1.present();
        }
        else if (value == "manufacture") {
            var confirm_2 = this.alertCtrl.create({
                title: 'Manufacture Info',
                message: "<b>Company<b>" + "-" + this.manufactureInfo + " " + "<br>" + "<b>Address</b>" + "-" + this.city + "," + this.state + "," + "<br>" + this.country + "," + this.pin,
                buttons: [
                    {
                        text: 'ok',
                        handler: function (data) {
                        }
                    },
                ]
            });
            confirm_2.present();
        }
        else if ("warantty") {
            var confirm_3 = this.alertCtrl.create({
                title: 'warranty Info',
                message: "<b>Date of ownership transfer <b>" + "<br>" + "<br>" + this.transferTime,
                buttons: [
                    {
                        text: 'ok',
                        handler: function (data) {
                        }
                    },
                ]
            });
            confirm_3.present();
        }
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/product/product.html"*/`<ion-header class="product-page-header">\n       <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Product Info  {{strKey ? strKey:\'NA\'}}</ion-title>\n  </ion-navbar>        \n    \n    <shrinking-segment-header [scrollArea]="myContent" headerHeight="150">\n\n      <ion-row class="padtop-14" text-center>\n        <ion-col col-12 class="font-18">  Manufacturer: {{productName}}</ion-col>\n        <ion-col col-12 class="font-18">Date of Manufacture: {{productTime}}</ion-col>\n      </ion-row>\n      <ion-grid>\n\n      <ion-row>\n        <ion-col center text-right>\n          <div class="home-button owner-a" *ngIf="!ownerstatus">\n            <img padding-bottom="" padding-top="" src="assets/img/get-owner-01.png" style="width:40px; padding-top: 0px;" >            \n          </div>\n          <div class="home-button owner-green" *ngIf="ownerstatus">           \n            <img padding-bottom="" (click)="ownerInfo(\'owner\')" padding-top="" src="assets/img/get-owner-01.png" style="width:40px; padding-top: 0px;" >\n          </div>\n        </ion-col>\n\n        <ion-col center text-center>\n          <div class="home-button owner-b">\n            <img padding-bottom="" (click)="ownerInfo(\'manufacture\')" padding-top="" src="assets/img/manufacture-gray-01.svg" style="width:35px; padding-top: 0px;">\n          </div>\n        </ion-col>\n\n        <ion-col center text-left>\n          <div class="home-button owner-c">\n            <img padding-bottom=""  (click)="ownerInfo(\'warantty\')" padding-top="" src="assets/img/trust-gray.svg" style="width:35px; padding-top: 0px;">\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n      \n\n      <ion-grid class="grid" margin-top="" padding-top="">\n\n        <ion-row class="row" padding-top="">\n            <div class="home-button">\n              <img padding-bottom="" padding-top="" src="assets/img/gray_qr.png" style="width:10px" >\n            </div>\n\n            <div class="home-button">\n              <img padding-bottom="" padding-top="" src="assets/img/gray_enter.png" style="width:1">\n            </div>\n        </ion-row>\n      </ion-grid>\n\n    </shrinking-segment-header>\n\n    <ion-toolbar color="light" mode="md">\n      <ion-segment color="dark" mode="md" [(ngModel)]="section">\n        <ion-segment-button active value="one">\n          <ion-icon ios="ios-git-merge" md="md-git-merge"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="two">\n          <ion-icon name="paper"></ion-icon>\n        </ion-segment-button>\n        <!-- <ion-segment-button value="three">\n          <ion-icon name="ios-boat-outline"></ion-icon>\n        </ion-segment-button> -->\n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen #myContent>\n    <div [ngSwitch]="section" style="margin-top:30px;">\n      <ion-list *ngSwitchCase="\'one\'" style="margin-top:30px;margin-bottom: 2px">\n        <ion-card padding class="product-history-card font-15">\n        <ion-row>\n          <ion-col col-6> <b> Origin :</b></ion-col>\n          <ion-col col-6> {{origin}} </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6> <b> Date :</b></ion-col>\n          <ion-col col-6> {{productTime }} </ion-col>\n        </ion-row>\n         \n        </ion-card>\n        <ion-card padding class="product-history-card font-15" *ngFor="let data of dataList">\n         \n            <ion-row>\n                <ion-col col-6><b> Location: </b> </ion-col>\n               <ion-col col-6>   {{data.location}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-6><b> State: </b> </ion-col>\n               <ion-col col-6>   {{data.state}}</ion-col>\n            </ion-row>\n             <ion-row>\n                <ion-col col-4> <b>Date:</b> </ion-col>\n               <ion-col col-7>  {{data.blocktime}}</ion-col>\n            </ion-row>\n\n        </ion-card>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'two\'">\n        <ion-card padding class="product-history-card font-15">\n          <div *ngFor="let data of display">\n              <ion-row>\n                <ion-col col-6><b> {{data.key}}:</b></ion-col>\n               <ion-col col-6>  {{data.value}}</ion-col>\n            </ion-row>\n              <br>\n          </div>         \n         <div >              \n        </div>         \n      </ion-card>    \n    </ion-list>\n\n     \n\n    </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar class="product-page-header">\n   <ion-row class="primary-color">\n              <ion-col col-6 text-center (click)="showConfirm()"><b> Share</b></ion-col>\n               <ion-col col-6 text-center (click)="openModal()">  Report</ion-col>\n            </ion-row>\n  </ion-toolbar>\n</ion-footer>`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/product/product.html"*/
        })
        /**
         * Generated class for the ProductPage page.
         *
         * See https://ionicframework.com/docs/components/#navigation for more info on
         * Ionic pages and navigation.
         */
        ,
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/product/product.html"*/`<ion-header class="product-page-header">\n       <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Product Info  {{strKey ? strKey:\'NA\'}}</ion-title>\n  </ion-navbar>        \n    \n    <shrinking-segment-header [scrollArea]="myContent" headerHeight="150">\n\n      <ion-row class="padtop-14" text-center>\n        <ion-col col-12 class="font-18">  Manufacturer: {{productName}}</ion-col>\n        <ion-col col-12 class="font-18">Date of Manufacture: {{productTime}}</ion-col>\n      </ion-row>\n      <ion-grid>\n\n      <ion-row>\n        <ion-col center text-right>\n          <div class="home-button owner-a" *ngIf="!ownerstatus">\n            <img padding-bottom="" padding-top="" src="assets/img/get-owner-01.png" style="width:40px; padding-top: 0px;" >            \n          </div>\n          <div class="home-button owner-green" *ngIf="ownerstatus">           \n            <img padding-bottom="" (click)="ownerInfo(\'owner\')" padding-top="" src="assets/img/get-owner-01.png" style="width:40px; padding-top: 0px;" >\n          </div>\n        </ion-col>\n\n        <ion-col center text-center>\n          <div class="home-button owner-b">\n            <img padding-bottom="" (click)="ownerInfo(\'manufacture\')" padding-top="" src="assets/img/manufacture-gray-01.svg" style="width:35px; padding-top: 0px;">\n          </div>\n        </ion-col>\n\n        <ion-col center text-left>\n          <div class="home-button owner-c">\n            <img padding-bottom=""  (click)="ownerInfo(\'warantty\')" padding-top="" src="assets/img/trust-gray.svg" style="width:35px; padding-top: 0px;">\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n      \n\n      <ion-grid class="grid" margin-top="" padding-top="">\n\n        <ion-row class="row" padding-top="">\n            <div class="home-button">\n              <img padding-bottom="" padding-top="" src="assets/img/gray_qr.png" style="width:10px" >\n            </div>\n\n            <div class="home-button">\n              <img padding-bottom="" padding-top="" src="assets/img/gray_enter.png" style="width:1">\n            </div>\n        </ion-row>\n      </ion-grid>\n\n    </shrinking-segment-header>\n\n    <ion-toolbar color="light" mode="md">\n      <ion-segment color="dark" mode="md" [(ngModel)]="section">\n        <ion-segment-button active value="one">\n          <ion-icon ios="ios-git-merge" md="md-git-merge"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="two">\n          <ion-icon name="paper"></ion-icon>\n        </ion-segment-button>\n        <!-- <ion-segment-button value="three">\n          <ion-icon name="ios-boat-outline"></ion-icon>\n        </ion-segment-button> -->\n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen #myContent>\n    <div [ngSwitch]="section" style="margin-top:30px;">\n      <ion-list *ngSwitchCase="\'one\'" style="margin-top:30px;margin-bottom: 2px">\n        <ion-card padding class="product-history-card font-15">\n        <ion-row>\n          <ion-col col-6> <b> Origin :</b></ion-col>\n          <ion-col col-6> {{origin}} </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6> <b> Date :</b></ion-col>\n          <ion-col col-6> {{productTime }} </ion-col>\n        </ion-row>\n         \n        </ion-card>\n        <ion-card padding class="product-history-card font-15" *ngFor="let data of dataList">\n         \n            <ion-row>\n                <ion-col col-6><b> Location: </b> </ion-col>\n               <ion-col col-6>   {{data.location}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-6><b> State: </b> </ion-col>\n               <ion-col col-6>   {{data.state}}</ion-col>\n            </ion-row>\n             <ion-row>\n                <ion-col col-4> <b>Date:</b> </ion-col>\n               <ion-col col-7>  {{data.blocktime}}</ion-col>\n            </ion-row>\n\n        </ion-card>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'two\'">\n        <ion-card padding class="product-history-card font-15">\n          <div *ngFor="let data of display">\n              <ion-row>\n                <ion-col col-6><b> {{data.key}}:</b></ion-col>\n               <ion-col col-6>  {{data.value}}</ion-col>\n            </ion-row>\n              <br>\n          </div>         \n         <div >              \n        </div>         \n      </ion-card>    \n    </ion-list>\n\n     \n\n    </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar class="product-page-header">\n   <ion-row class="primary-color">\n              <ion-col col-6 text-center (click)="showConfirm()"><b> Share</b></ion-col>\n               <ion-col col-6 text-center (click)="openModal()">  Report</ion-col>\n            </ion-row>\n  </ion-toolbar>\n</ion-footer>`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setup_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReportModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportModalPage = (function () {
    //@Output() feedbackSubmit = new EventEmitter();
    // onFeedBack: Function;
    function ReportModalPage(navCtrl, viewCtrl, fb, toastCtrl, menuCtrl, navParams, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.reportDetails = { name: '', location: '', mobileNo: '', emailId: '', problem: '' };
        // this.prop = params.get('prop');
        // this.onFeedBack = params.get('onFeedBack');
    }
    ReportModalPage.prototype.ngOnInit = function () {
        this.reportFormInit();
    };
    ReportModalPage.prototype.reportFormInit = function () {
        this.reportForm = this.fb.group({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])),
            'location': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^[a-zA-Z][-_.a-zA-Z0-9]{3,29}\@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,15}|[0-9]{1,3})(\]?)$/)])),
            'mobileNo': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(0), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(10)])),
            'problem': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
        });
    };
    ReportModalPage.prototype.sendFeedBack = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'account creating...'
        });
        loading.present();
        var postData = {
            userAddress: "1JDBLrZqiRfrXH12JCFRdM767JGuWa4LtpMkvU",
            userName: this.reportDetails.name,
            location: this.reportDetails.name,
            contactNumber: this.reportDetails.name,
            problemDetail: this.reportDetails.name,
            email: this.reportDetails.name
        };
        var url = this._setupService.basePath + '/multichain/user/report';
        this._setupService.PostRequest(url, postData).subscribe(function (response) {
            loading.dismiss();
            var res = JSON.parse(response[0].json._body);
            if (res.responseCode == 200) {
                var toast = _this.toastCtrl.create({
                    message: 'Report sent succesfully !!',
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
                _this.viewCtrl.dismiss();
            }
            else {
            }
        });
    };
    ReportModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReportModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-modal',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/report-modal/report-modal.html"*/`<!--\n  Generated template for the ReportModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n    <ion-header>\n    	<ion-navbar>\n    		<ion-buttons start>\n    			<button ion-button (click)="dismiss()">Close</button>\n    		</ion-buttons>\n    		<ion-title>Report an issue </ion-title>\n    	</ion-navbar>\n    </ion-header>\n    \n    <ion-content padding>\n      <form [formGroup]="reportForm">\n    <ion-item>\n    <ion-label color="primary" floating>Name</ion-label>\n     <ion-input formControlName="name" [(ngModel)]="reportDetails.name"></ion-input>\n    </ion-item>\n    <ion-item class="small" *ngIf="!reportForm.controls[\'name\'].valid &&reportForm.controls [\'name\'].dirty">\n            <span *ngIf="reportForm.controls[\'name\'].errors[\'required\']">\n                <p style="color:red;">User Name cannot be left blank</p>\n            </span>\n    </ion-item>\n    \n    <ion-item>\n    <ion-label color="primary" floating>Location</ion-label>\n     <ion-input formControlName="location" [(ngModel)]="reportDetails.location"></ion-input>\n     </ion-item>\n      <ion-item class="small" *ngIf="!reportForm.controls[\'location\'].valid &&reportForm.controls [\'location\'].dirty">\n            <span *ngIf="reportForm.controls[\'location\'].errors[\'required\']">\n                <p style="color:red;">location cannot be left blank</p>\n            </span>\n      </ion-item>\n\n\n\n   <ion-item>\n    <ion-label color="primary" floating>Contact Number</ion-label>\n    <ion-input formControlName="mobileNo" [(ngModel)]="reportDetails.mobileNo"></ion-input>\n   </ion-item>\n   <ion-item *ngIf="!reportForm.controls[\'mobileNo\'].valid &&reportForm.controls [\'mobileNo\'].dirty">\n            <span *ngIf="reportForm.controls[\'mobileNo\'].errors[\'required\']">\n                <p style="color:red;">Contact Number cannot be left blank</p>\n            </span>\n            <span *ngIf="reportForm.controls[\'mobileNo\'].errors[\'minlength\']">\n                 <p style="color:red;">contact Number must be atleast 10 numbers</p>\n             </span>\n             <span *ngIf="reportForm.controls[\'mobileNo\'].errors[\'maxlength\']">\n                 <p style="color:red;">contact Number should not be greater then 10.</p>\n             </span>\n          \n  </ion-item>\n\n   <ion-item>\n    <ion-label color="primary" floating>Email Id</ion-label>\n    <ion-input formControlName="email" [(ngModel)]="reportDetails.email"></ion-input>\n   </ion-item>\n   <ion-item class="small" *ngIf="!reportForm.controls[\'email\'].valid&&reportForm.controls[\'email\'].dirty">\n            <span *ngIf="reportForm.controls[\'email\'].errors[\'required\']">\n              <p style="color:red;">Email cannot be left blank</p>\n            </span>\n            <span *ngIf="reportForm.controls[\'email\'].errors[\'pattern\']">\n              <p style="color:red;">Email address format is incorrect</p>\n            </span>\n  </ion-item>\n\n   <ion-item>\n    <ion-label color="primary" floating>Problem</ion-label>\n     <ion-textarea  \n      name="note" autocomplete="on" autocorrect="on" formControlName="problem" [(ngModel)]="reportDetails.problem"></ion-textarea>\n    </ion-item>\n     <ion-item class="small" *ngIf="!reportForm.controls[\'problem\'].valid &&reportForm.controls [\'problem\'].dirty">\n            <span *ngIf="reportForm.controls[\'problem\'].errors[\'required\']">\n                <p style="color:red;">Problem cannot be left blank</p>\n            </span>\n     </ion-item>\n\n    <button ion-button (click)="sendFeedBack()" [disabled]="!reportForm.valid">Report</button>\n  </form>\n    </ion-content>`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/report-modal/report-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ReportModalPage);
    return ReportModalPage;
}());

//# sourceMappingURL=report-modal.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
var SetupService = (function () {
    function SetupService(http, network, eventCtrl) {
        this.http = http;
        this.network = network;
        this.eventCtrl = eventCtrl;
        this.http = http;
        this.previousStatus = ConnectionStatusEnum.Online;
        this.extarsOnLoad();
    }
    SetupService.prototype.extarsOnLoad = function () {
        this.basePath = "http://103.201.142.41:8007";
    };
    SetupService.prototype.PostRequestUnautorized = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var requestoptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Post,
            url: url,
            headers: headers,
            body: JSON.stringify(data)
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Request */](requestoptions))
            .map(function (res) {
            return [{ status: res.status, json: res.json() }];
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error);
        });
    };
    SetupService.prototype.PostRequest = function (url, data, flag) {
        var TOKEN = localStorage.getItem('token');
        var headers;
        headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("authorization", "jwt " + TOKEN);
        this.requestoptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Post,
            url: url,
            headers: headers,
            body: JSON.stringify(data)
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Request */](this.requestoptions))
            .map(function (res) {
            if (res.status == 200) {
                return [{ status: res.status, json: res }];
            }
        })
            .catch(function (error) {
            if (error.status == 401) {
                localStorage.clear();
                //  this.navCtrl.setRoot(LoginPage);
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error);
        });
    };
    SetupService.prototype.GetRequest = function (url) {
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Request */](this.getRequsetOptions(url)))
            .map(function (res) {
            var jsonObj;
            if (res.status === 204) {
                jsonObj = null;
            }
            else {
                jsonObj = res.json();
            }
            return [{ status: res.status, json: jsonObj }];
        })
            .catch(function (error) {
            if (error.status == 0)
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(error);
        });
    };
    SetupService.prototype.getRequsetOptions = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var requestoptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Get,
            url: url,
            headers: headers
        });
        return requestoptions;
    };
    // Console Function
    SetupService.prototype.consoleFun = function (a, b, c, d, f, g) {
        // console.log(a, b, c, d, f, g);
    };
    SetupService.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                _this.eventCtrl.publish('network:offline');
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Offline) {
                _this.eventCtrl.publish('network:online');
            }
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    };
    SetupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], SetupService);
    return SetupService;
}());

//# sourceMappingURL=setup.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 235;

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpReceivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OtpReceivePage = (function () {
    function OtpReceivePage(alertCtrl, fb, platform, toastCtrl, androidPermissions, loadingCtrl, http, _setupService, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.androidPermissions = androidPermissions;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this._setupService = _setupService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.otpVerifyDetail = {
            userName: "",
            otp: "",
            mobile: ""
        };
        this.userDetails = JSON.parse(localStorage.getItem('UserDetaisAfterSignup'));
        this.otpVerifyDetail.userName = this.userDetails[0].json.data.userName;
        this.otpVerifyDetail.mobile = this.userDetails[0].json.data.contactNumber;
        document.addEventListener('onSMSArrive', function (e) {
            var sms = e.data;
            console.log("received sms " + JSON.stringify(sms));
            if (sms.address) {
                var otpArray = sms.body.split(':');
                var otp = otpArray[1];
                this.otpVerifyDetail.otp = otp;
                // alert("this.otpVerifyDetail.otp = = 1"+this.otpVerifyDetail.otp)
                this.stopSMS();
                this.verify_otp();
            }
        });
        this.checkPermission();
    }
    OtpReceivePage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) {
            //if permission granted
            _this.receiveSMS();
        }, function (err) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS).
                then(function (success) {
                _this.receiveSMS();
            }, function (err) {
                console.log("cancelled");
            });
        });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
    };
    OtpReceivePage.prototype.receiveSMS = function () {
        if (SMS)
            SMS.startWatch(function () {
                console.log('watching started');
            }, function () {
                console.log('failed to start watching');
            });
    };
    OtpReceivePage.prototype.stopSMS = function () {
        if (SMS)
            SMS.stopWatch(function () {
                console.log('watching stopped');
            }, function () {
                console.log('failed to stop watching');
            });
    };
    OtpReceivePage.prototype.otpFormInit = function () {
        this.otpForm = this.fb.group({
            'otp': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* Validators */].required),
            'userName': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](''),
            'mobile': new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]('')
        });
    };
    OtpReceivePage.prototype.verifyOTP = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Logging please wait...'
        });
        loading.present();
        if (this.otpVerifyDetail.mobile.length == 0) {
            loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'OTP Required!',
                subTitle: 'Please enter your OTP and proceed',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var postData = {
                userName: this.otpVerifyDetail.userName,
                otp: this.otpVerifyDetail.otp,
                contactNumber: this.otpVerifyDetail.mobile
            };
            var url = this._setupService.basePath + '/multichain/user/verifyOtp';
            this._setupService.PostRequestUnautorized(url, postData).subscribe(function (response) {
                loading.dismiss();
                if (response[0].json.responseCode == 200) {
                    var toast = _this.toastCtrl.create({
                        message: response[0].json.responseMessage,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    localStorage.removeItem("UserDetaisAfterSignup");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
                }
                else {
                    localStorage.removeItem("UserDetaisAfterSignup");
                }
            });
        }
    };
    OtpReceivePage.prototype.ngOnInit = function () {
        this.otpFormInit();
        this.otpForm.reset();
    };
    OtpReceivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp-receive',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/otp-receive/otp-receive.html"*/`<!--\n  Generated template for the OtpReceivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>otp-receive</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="otpForm">\n    <ion-item >\n       <ion-label floating>Enter OTP</ion-label>\n        <ion-input [(ngModel)]="otpVerifyDetail.otp" formControlName="otp" type="text" required></ion-input> \n       <!-- </div> -->\n      </ion-item>\n        <ion-item *ngIf="otpForm.controls.otp.hasError(\'required\') && otpForm.controls.otp.dirty">\n             <p style="color:red;">OTP is required!</p>\n        </ion-item>\n     <!--  <ion-item *ngIf="otpForm.controls.email.hasError(\'required\') && otpForm.controls.email.dirty">\n             <p style="color:red;">Otp is required!</p>\n        </ion-item> -->\n       <button class="button-backcolor" ion-button (click)="verifyOTP()"  [disabled]="!otpForm.valid" type="submit" block>Verify</button>\n       <!-- <button ion-button (click)="checkPermission()">Receive SMS</button> -->\n    </form>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/otp-receive/otp-receive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__services_setup_service__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], OtpReceivePage);
    return OtpReceivePage;
}());

//# sourceMappingURL=otp-receive.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
var LoginPage = (function () {
    function LoginPage(fb, alertCtrl, network, barcodeScanner, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl) {
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.barcodeScanner = barcodeScanner;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.loginDetail = { email: '', password: '', ip: '', location: '', _id: '' };
        this.submitted = false;
        this.netStatus = localStorage.getItem('NetworkStatus');
    }
    LoginPage.prototype.loginWithFB = function () {
        // this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
        //   this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        //     this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
        //   });
        // });
    };
    LoginPage.prototype.scanProduct = function () {
        var _this = this;
        //this.navCtrl.push(AboutPage,{ 'getOwnproductId': 'Activa-i4','getOwnstremKey': 'keyActiva-i402'});
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.hexa3a(barcodeData.text);
        });
    };
    LoginPage.prototype.hexa3a = function (data) {
        var strKey = data;
        var status = this.isHex(strKey);
        if (status) {
            if (strKey) {
                this.hex2a(strKey); //found hex avaliable in string
            }
            else {
                var toast = this.toastCtrl.create({
                    message: "somthing went wrong!!",
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        }
    };
    LoginPage.prototype.isHex = function (typeString) {
        var a = typeString;
        var regExp = /^[-+]?[0-9A-Fa-f]+\.?[0-9A-Fa-f]*?$/;
        var regex = /^[0-9]+$/;
        if (regex.test(a)) {
            var toast = this.toastCtrl.create({
                message: "somthing went wrong  !!",
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 5000
            });
            toast.present();
            return false;
        }
        if (typeof a === 'string' && regExp.test(a)) {
            return true;
        }
    };
    LoginPage.prototype.hex2a = function (a) {
        var haxKey = a;
        var type = typeof (haxKey);
        var hex = haxKey.toString(); //force conversion
        var str = '';
        for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2) {
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            str;
        }
        this.selectedProduct = str;
        if (this.selectedProduct) {
            var data = JSON.parse(this.selectedProduct);
            if (typeof (data) == "object") {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__about_about__["a" /* AboutPage */], { 'getOwnproductId': data.productName, 'getOwnstremKey': data.productKeyName });
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'somthing went wrong',
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 5000
            });
            toast.present();
        }
    };
    LoginPage.prototype.loginFormInit = function () {
        this.loginForm = this.fb.group({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
        });
    };
    LoginPage.prototype.ngOnInit = function () {
        this.loginFormInit();
        this.loginForm.reset();
    };
    LoginPage.prototype.onlogin = function () {
        var _this = this;
        if (this.netStatus == "offline") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Logging please wait...',
                dismissOnPageChange: true,
                showBackdrop: true,
                duration: 15000,
                enableBackdropDismiss: true
            });
            loading_1.present();
            this.loginDetail.email = this.loginDetail.email.toLowerCase();
            var postData = {
                email: this.loginDetail.email.toLowerCase(),
                password: this.loginDetail.password,
                location: "Delhi",
                ip: "182.64.10.38",
                _id: "5b090ececff8e96a8b0b911a"
            };
            // loading.dismiss();
            var url = this._setupService.basePath + '/multichain/user/login';
            this._setupService.PostRequest(url, postData).subscribe(function (response) {
                var respon = JSON.parse(response[0].json._body);
                if (respon.responseCode == 200) {
                    _this.responseData = response;
                    localStorage.setItem('logindetail', JSON.stringify(_this.responseData));
                    _this.user = JSON.parse(localStorage.getItem('logindetail'));
                    var res = JSON.parse(_this.user[0].json._body);
                    _this.userId = res.data.uuid;
                    if (res.data.image) {
                        _this.userImage = res.data.image;
                    }
                    else {
                        _this.userImage = "assets/img/marty-avatar.jpeg";
                    }
                    _this.events.publish("shareObject", _this.userId);
                    _this.events.publish("userImage", _this.userImage);
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: res.responseMessage,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    loading_1.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'somthing went wrong please retry',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        // this.network.onConnect().subscribe(data => {      
        // }, error => console.error(error));
        // this.network.onDisconnect().subscribe(data => {
        //   let alert = this.alertCtrl.create({
        //     title: 'Network was disconnected :-(',
        //     subTitle: 'Please check your connection. And try again',
        //     buttons: ['OK']
        //   });
        //   alert.present();
        // }, error => console.error(error));
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/login/login.html"*/`\n\n<ion-content >\n	<div  text-center style=" margin-top: 26px;background-color: blue">\n		<img src="assets/img/digiholo-logo.png" alt="Ionic logo" class="brand-logo">\n	</div>\n	<ion-row class="logo" text-center>\n		 <ion-col col-12 style="    font-size: 2em;    margin-top: 38px;    color: #3896ea;" >\n		 	<ion-icon name="qr-scanner" class="icon-chat-user" (click)="scanProduct()"></ion-icon></ion-col>\n		 <ion-col col-12><h3 class="text_Color"><strong >Login with</strong></h3></ion-col>\n	</ion-row>\n	<!-- <ion-row text-center>\n		 <ion-col col-12 style="font-size: 4em;color: #3896ea;" >\n		 	<ion-icon name="logo-facebook" class="icon-chat-user" (click)="loginWithFB()"></ion-icon></ion-col>\n		\n	</ion-row> -->\n <!--   <ion-row text-center>\n		 <ion-col col-12>\n		 	<b>or</b>\n		 </ion-col>\n	</ion-row> -->\n	<!-- <ion-card *ngIf="userData">\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n    <img [src]="userData.picture" />\n    <ion-card-content>\n      <p>Email: {{ userData.email }}</p>\n      <p>First Name: {{ userData.first_name }}</p>\n    </ion-card-content>\n\n  </ion-card> -->\n	<form [formGroup]="loginForm">\n		<ion-list no-lines class="form-input-fields">		\n             \n         <ion-item  [ngClass]="{\'error-border\':!loginForm.controls.email.valid && loginForm.controls.email.dirty}">\n		    <ion-label floating>Email</ion-label>\n		    <ion-input [(ngModel)]="loginDetail.email" formControlName="email" type="text" required></ion-input> \n		   <!-- </div> -->\n		  </ion-item>\n        <ion-item *ngIf="loginForm.controls.email.hasError(\'required\') && loginForm.controls.email.dirty">\n             <p style="color:red;">Email is required!</p>\n        </ion-item>\n\n          <ion-item  [ngClass]="{\'error-border\':!loginForm.controls.password.valid && loginForm.controls.password.dirty}">\n		    <ion-label floating>Password</ion-label>\n		    <ion-input [(ngModel)]="loginDetail.password" formControlName="password" type="password" required></ion-input> \n		   <!-- </div> -->\n		  </ion-item>\n        <ion-item *ngIf="loginForm.controls.password.hasError(\'required\') && loginForm.controls.password.dirty">\n             <p style="color:red;">Password is required!</p>\n        </ion-item>\n\n			\n			\n			<ion-row responsive-sm>\n				<ion-col >\n					<!-- <button class="button-backcolor" ion-button (click)="onlogin1()" type="submit" block>Login</button> -->\n					<button class="button-backcolor" ion-button (click)="onlogin()"  [disabled]="!loginForm.valid" type="submit" block>Login</button>\n				</ion-col>\n			</ion-row>\n			<hr>\n	\n           <!--  <ion-row>\n				<ion-col text-center  style="font-size: 0.9em; color: #bdbdbd;">\n					Forgot Password? <a class="text_Color" (click)="onSignup()" style="font-size: 12px;">Get New !</a>\n				</ion-col>\n			</ion-row> -->\n			<ion-row>\n				<ion-col text-center  style="font-size: 0.9em; color: #bdbdbd;">\n					Not a member? <a class="text_Color" (click)="onSignup()" style="font-size: 12px;">Create an account</a>\n				</ion-col>\n			</ion-row>\n		</ion-list>\n\n\n	</form>\n\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_report_modal_report_modal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutPage = (function () {
    function AboutPage(navCtrl, network, alertCtrl, modalCtrl, sharingVar, actionSheetCtrl, toastCtrl, platform, navParams, _setupService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.sharingVar = sharingVar;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.dataList = [];
        this.display = [];
        this.qrcodestatus = false;
        this.ownerstatus = false;
        this.section = 'one';
        this.somethings = new Array(20);
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.productName = this.navParams.get('getOwnproductId');
        var productID = this.navParams.get('getOwnproductId');
        var stremKey = this.navParams.get('getOwnstremKey');
        this.strKey = stremKey;
        this.getQrscanner(productID, stremKey);
    }
    // multichain/user/scanned?userAddress=1DiFWnSZAkFUveuFHDP4RsgVrmudPkRqt8WHbn&productName=SUMSUNG1906&rawTxid=5b4b8d0672dd1bc87a00e431d08a354fa07dc19344d908ef9cfd3f3e2b17cd4c
    // get Qrscanner
    AboutPage.prototype.getQrscanner = function (productName, productKey) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'please wait...',
            dismissOnPageChange: true,
            showBackdrop: true,
            duration: 15000,
            enableBackdropDismiss: true
        });
        loading.present();
        var postData = {
            productName: productName,
            productKeyName: productKey
        };
        var url = this._setupService.basePath + '/multichain/product/listStreamKeyItemsWithOutLogin';
        this._setupService.PostRequestUnautorized(url, postData).subscribe(function (response) {
            loading.dismiss();
            if (response[0].json.responseCode == 200) {
                _this.dataList = [];
                _this.dataItem = response[0].json.data;
                for (var i = 0; i < _this.dataItem.length; i++) {
                    var objData = {
                        location: '',
                        state: '',
                        blocktime: ''
                    };
                    objData.location = _this.dataItem[i].location ? _this.dataItem[i].location : '--';
                    objData.state = _this.dataItem[i].state ? _this.dataItem[i].state : '--';
                    var time = _this.dataItem[i].blocktime;
                    objData.blocktime = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](time / 1000).format("DD-MM-YYYY HH:mm:ss");
                    _this.dataList.push(objData);
                }
                var index = _this.dataItem.length - 1;
                _this.ownerstatus = _this.dataItem[index].status;
                _this.ownedDetails = _this.dataItem[index].state;
                var time = _this.dataItem[index].blocktime;
                _this.transferTime = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](time / 1000).format("DD-MM-YYYY HH:mm:ss");
                var ownTime = _this.dataItem[index].manufacture.date;
                _this.ownedTime = __WEBPACK_IMPORTED_MODULE_6_moment__(ownTime).format("DD-MM-YYYY");
                _this.manufactureInfo = _this.dataItem[index].manufacture.companyName;
                _this.city = _this.dataItem[index].manufacture.address.city;
                _this.state = _this.dataItem[index].manufacture.address.state;
                _this.country = _this.dataItem[index].manufacture.address.country;
                _this.pin = _this.dataItem[index].manufacture.address.pin;
                _this.manufactureDate = _this.dataItem[index].manufacture.date;
                var desc = _this.dataItem[index].description;
                for (var key in desc) {
                    var data = {
                        key: key,
                        value: desc[key],
                    };
                    _this.display.push(data);
                }
                _this.ownerId = _this.dataItem[index].description;
                for (var i = 0; i < 1; i++) {
                    _this.origin = _this.dataItem[i].location;
                    var time = _this.dataItem[i].manufacture.date;
                    _this.productTime = __WEBPACK_IMPORTED_MODULE_6_moment__(time).format("DD-MM-YYYY");
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: response[0].json.responseMessage,
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        });
    };
    AboutPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_report_modal_report_modal__["a" /* ReportModalPage */], {
            'prop': 'prop1',
            onFeedBack: function (data) {
                console.log('Input callback' + JSON.stringify(data));
            }
        });
        modal.onDidDismiss(function (data) {
            console.log('Closed with data:' + JSON.stringify(data));
        });
        modal.present().then(function (result) {
        });
    };
    AboutPage.prototype.showConfirm = function () {
        var _this = this;
        var a = "productName" + " " + this.productName + "," + "productKeyName" + " " + this.strKey;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share address Via',
            buttons: [
                {
                    text: 'whatsapp',
                    role: 'destructive',
                    handler: function () {
                        _this.whatsUpShare(a);
                    }
                }, {
                    text: 'facebook',
                    role: 'destructive',
                    handler: function () {
                        _this.facebookShare(a);
                    }
                }, {
                    text: 'message',
                    role: 'destructive',
                    handler: function () {
                        _this.messageShare(a);
                    }
                },
                {
                    text: 'email',
                    role: 'destructive',
                    handler: function () {
                        _this.emailShare(a);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AboutPage.prototype.whatsUpShare = function (address) {
        this.sharingVar.shareViaWhatsApp(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via whatsup');
        })
            .catch(function (err) {
            console.log('Was not shared via whatsup');
        });
    };
    AboutPage.prototype.facebookShare = function (address) {
        this.sharingVar.shareViaFacebook(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via Facebook');
        })
            .catch(function (err) {
            console.log('Was not shared via Facebook');
        });
    };
    AboutPage.prototype.messageShare = function (address) {
        this.sharingVar.shareViaSMS(address, null /* img */).then(function (data) {
            console.log('Shared via sms');
        })
            .catch(function (err) {
            console.log('Was not shared via sms');
        });
    };
    AboutPage.prototype.emailShare = function (address) {
        this.sharingVar.shareViaEmail(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via email');
        })
            .catch(function (err) {
            console.log('Was not shared via email');
        });
    };
    AboutPage.prototype.ownerInfo = function (value) {
        if (value == "owner") {
            var confirm_1 = this.alertCtrl.create({
                title: "Owner",
                message: "<b>Status</b>" + " " + "Owned" + " " + "<br>" + "<b>Date</b>" + " " + this.ownedTime,
                buttons: [
                    {
                        text: 'ok',
                        handler: function (data) {
                        }
                    },
                ]
            });
            confirm_1.present();
        }
        else if (value == "manufacture") {
            var confirm_2 = this.alertCtrl.create({
                title: 'Manufacture Info',
                message: "<b>Company<b>" + "-" + this.manufactureInfo + " " + "<br>" + "<b>Address</b>" + "-" + this.city + "," + this.state + "," + "<br>" + this.country + "," + this.pin,
                buttons: [
                    {
                        text: 'ok',
                        handler: function (data) {
                        }
                    },
                ]
            });
            confirm_2.present();
        }
        else if ("warantty") {
            var confirm_3 = this.alertCtrl.create({
                title: 'warranty Info',
                message: "<b>Date of ownership transfer <b>" + "<br>" + "<br>" + this.transferTime,
                buttons: [
                    {
                        text: 'ok',
                        handler: function (data) {
                        }
                    },
                ]
            });
            confirm_3.present();
        }
    };
    AboutPage.prototype.ionViewDidEnter = function () {
        // this.network.onConnect().subscribe(data => {
        // }, error => console.error(error));
        // this.network.onDisconnect().subscribe(data => {
        //   let alert = this.alertCtrl.create({
        //     title: 'Network was disconnected :-(',
        //     subTitle: 'Please check your connection. And try again',
        //     buttons: ['OK']
        //   });
        //   alert.present();
        // }, error => console.error(error));
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/about/about.html"*/`\n\n<ion-header class="product-page-header">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>About  {{strKey ? strKey:\'NA\'}}</ion-title>\n\n  </ion-navbar>\n\n      \n\n \n\n    <shrinking-segment-header [scrollArea]="myContent" headerHeight="150">\n\n\n\n       <ion-row class="padtop-14" text-center>\n\n        <ion-col col-12 class="font-18">  Manufacturer: {{productName}}</ion-col>\n\n        <ion-col col-12 class="font-18">Date of Manufacture: {{productTime}}</ion-col>\n\n      </ion-row>\n\n      <ion-grid>\n\n\n\n      <ion-row>\n\n        <ion-col center text-right>\n\n          <div class="home-button owner-a" *ngIf="!ownerstatus">\n\n            <img padding-bottom="" padding-top="" src="assets/img/get-owner-01.png" style="width:40px; padding-top: 0px;" >            \n\n          </div>\n\n          <div class="home-button owner-green" *ngIf="ownerstatus">           \n\n            <img padding-bottom="" (click)="ownerInfo(\'owner\')" padding-top="" src="assets/img/get-owner-01.png" style="width:40px; padding-top: 0px;" >\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col center text-center>\n\n          <div class="home-button owner-b">\n\n            <img padding-bottom="" (click)="ownerInfo(\'manufacture\')" padding-top="" src="assets/img/manufacture-gray-01.svg" style="width:35px; padding-top: 0px;">\n\n          </div>\n\n        </ion-col>\n\n\n\n        <ion-col center text-left>\n\n          <div class="home-button owner-c">\n\n            <img padding-bottom=""  (click)="ownerInfo(\'warantty\')" padding-top="" src="assets/img/trust-gray.svg" style="width:35px; padding-top: 0px;">\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      </ion-grid> \n\n      \n\n\n\n      <ion-grid class="grid" margin-top="" padding-top="">\n\n\n\n        <ion-row class="row" padding-top="">\n\n\n\n            <div class="home-button">\n\n              <img padding-bottom="" padding-top="" src="assets/img/gray_qr.png" style="width:10px" >\n\n            </div>\n\n\n\n            <div class="home-button">\n\n              <img padding-bottom="" padding-top="" src="assets/img/gray_enter.png" style="width:1">\n\n            </div>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </shrinking-segment-header>\n\n\n\n    <ion-toolbar color="light" mode="md">\n\n      <ion-segment color="dark" mode="md" [(ngModel)]="section">\n\n        <ion-segment-button active value="one">\n\n          <ion-icon ios="ios-git-merge" md="md-git-merge"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="two">\n\n          <ion-icon name="paper"></ion-icon>\n\n        </ion-segment-button>\n\n        <!-- <ion-segment-button value="three">\n\n          <ion-icon name="ios-boat-outline"></ion-icon>\n\n        </ion-segment-button> -->\n\n      </ion-segment>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content fullscreen #myContent>\n\n\n\n    <div [ngSwitch]="section" style="margin-top:30px;">\n\n\n\n      <ion-list *ngSwitchCase="\'one\'" style="margin-top:30px;margin-bottom: 2px">\n\n        <ion-card padding class="product-history-card font-15">\n\n        <ion-row>\n\n          <ion-col col-6> <b> Origin :</b></ion-col>\n\n          <ion-col col-6> {{origin}} </ion-col>\n\n          </ion-row>\n\n         \n\n        </ion-card>\n\n         <ion-card padding class="product-history-card font-15" *ngFor="let data of dataList">\n\n          <ion-row>\n\n                <ion-col col-6><b> Location: </b> </ion-col>\n\n               <ion-col col-6>   {{data.location}}</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-6><b> State: </b> </ion-col>\n\n               <ion-col col-6>   {{data.state}}</ion-col>\n\n            </ion-row>\n\n             <ion-row>\n\n                <ion-col col-4> <b>Date:</b> </ion-col>\n\n               <ion-col col-7>  {{data.blocktime}}</ion-col>\n\n            </ion-row>\n\n        </ion-card>\n\n\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'two\'">\n\n        <ion-card padding class="product-history-card font-15">\n\n          <div *ngFor="let data of display">\n\n              <ion-row>\n\n                <ion-col col-6><b> {{data.key}}:</b></ion-col>\n\n               <ion-col col-6>  {{data.value}}</ion-col>\n\n            </ion-row>\n\n              <br>\n\n          </div>\n\n         \n\n         <div >\n\n              <ion-row>\n\n                <ion-col col-6><b> Share:</b></ion-col>\n\n               <ion-col col-6>  Report</ion-col>\n\n            </ion-row>\n\n              <br>\n\n          </div>\n\n         \n\n        </ion-card>\n\n      </ion-list>\n\n\n\n      <!-- <ion-list *ngSwitchCase="\'three\'">\n\n\n\n      </ion-list> -->\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="product-page-header">\n\n   <ion-row class="primary-color">\n\n              <ion-col col-6 text-center (click)="showConfirm()"><b> Share</b></ion-col>\n\n               <ion-col col-6 text-center (click)="openModal()">  Report</ion-col>\n\n            </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductscanedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_ownedproductinfo_ownedproductinfo__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_product_product__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ProductscanedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductscanedPage = (function () {
    function ProductscanedPage(navCtrl, network, alertCtrl, sharingVar, actionSheetCtrl, toastCtrl, platform, navParams, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.sharingVar = sharingVar;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.section = 'one';
        this.ownerListdata = [];
        this.noOwnerData = false;
        this.scanedListdata = [];
        this.noScanedData = false;
        this.activeStaus = false;
        this.deactiveStaus = false;
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user) {
            var res = JSON.parse(this.user[0].json._body);
            console.log("res = = =" + JSON.stringify(res));
            this.userAdd = res.data.userAddress;
            ;
            this.getOwenedData();
        }
    }
    ProductscanedPage.prototype.getOwenedData = function () {
        var _this = this;
        this.ownerListdata = [];
        var loading = this.loadingCtrl.create({
            content: 'finding owned products.....',
            duration: 15000
        });
        loading.present();
        var url = this._setupService.basePath + '/multichain/product/ownersProduct?userAddress=' + this.userAdd;
        this._setupService.GetRequest(url).subscribe(function (response) {
            loading.dismiss();
            if (response[0].json.responseCode == 200) {
                if (response[0].json.data[0].owner.length > 0) {
                    _this.noOwnerData = false;
                    var result = response[0].json.data[0].owner;
                    for (var i = 0; i < result.length; i++) {
                        var objData = {
                            sn: '',
                            productName: '',
                            productKeyName: '',
                            status: ''
                        };
                        var j = i + 1;
                        objData.sn = j.toString();
                        objData.productName = (result[i].productName);
                        objData.productKeyName = (result[i].productKeyName);
                        objData.status = (result[i].status);
                        _this.ownerListdata.push(objData);
                    }
                }
                else {
                    _this.noOwnerData = true;
                }
            }
            else {
            }
        });
    };
    ProductscanedPage.prototype.getScanedData = function () {
        var _this = this;
        this.scanedListdata = [];
        var loading = this.loadingCtrl.create({
            content: 'finding scaned products.....',
            dismissOnPageChange: true,
            showBackdrop: true,
            duration: 15000,
            enableBackdropDismiss: true
        });
        loading.present();
        var url = this._setupService.basePath + '/multichain/user/scannedList?userAddress=' + this.userAdd;
        this._setupService.GetRequest(url).subscribe(function (response) {
            loading.dismiss();
            if (response[0].json.responseCode == 200) {
                if (response[0].json.data.scann.length > 0) {
                    _this.noScanedData = false;
                    _this.scanedListdata = response[0].json.data.scann;
                }
                else {
                    _this.noScanedData = true;
                }
            }
            else {
            }
        });
    };
    ProductscanedPage.prototype.getownedProductInfo = function (productInfo, streamKey) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_ownedproductinfo_ownedproductinfo__["a" /* OwnedproductinfoPage */], { 'getOwnproductId': productInfo, 'getOwnstremKey': streamKey });
    };
    ProductscanedPage.prototype.getownedProductInfowithDetails = function (productInfo, streamKey) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_product_product__["a" /* ProductPage */], { 'getOwnproductId': productInfo, 'getOwnstremKey': streamKey });
    };
    ProductscanedPage.prototype.showConfirm = function (productName, productStreamKey) {
        var _this = this;
        var a = "productName" + " " + productName + "," + "productKeyName" + " " + productStreamKey;
        console.log("a = = " + a);
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share address Via',
            buttons: [
                {
                    text: 'whatsapp',
                    role: 'destructive',
                    handler: function () {
                        _this.whatsUpShare(a);
                    }
                }, {
                    text: 'facebook',
                    role: 'destructive',
                    handler: function () {
                        _this.facebookShare(a);
                    }
                }, {
                    text: 'message',
                    role: 'destructive',
                    handler: function () {
                        _this.messageShare(a);
                    }
                },
                {
                    text: 'email',
                    role: 'destructive',
                    handler: function () {
                        _this.emailShare(a);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProductscanedPage.prototype.whatsUpShare = function (address) {
        this.sharingVar.shareViaWhatsApp(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via whatsup');
        })
            .catch(function (err) {
            console.log('Was not shared via whatsup');
        });
    };
    ProductscanedPage.prototype.facebookShare = function (address) {
        this.sharingVar.shareViaFacebook(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via Facebook');
        })
            .catch(function (err) {
            console.log('Was not shared via Facebook');
        });
    };
    ProductscanedPage.prototype.messageShare = function (address) {
        this.sharingVar.shareViaSMS(address, null /* img */).then(function (data) {
            console.log('Shared via sms');
        })
            .catch(function (err) {
            console.log('Was not shared via sms');
        });
    };
    ProductscanedPage.prototype.emailShare = function (address) {
        this.sharingVar.shareViaEmail(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via email');
        })
            .catch(function (err) {
            console.log('Was not shared via email');
        });
    };
    ProductscanedPage.prototype.ionViewDidLoad = function () {
        // this.network.onConnect().subscribe(data => {      
        //   }, error => console.error(error));
        //   this.network.onDisconnect().subscribe(data => {
        //     let alert = this.alertCtrl.create({
        //       title: 'Network was disconnected :-(',
        //       subTitle: 'Please check your connection. And try again',
        //       buttons: ['OK']
        //     });
        //     alert.present();
        //   }, error => console.error(error));    
    };
    ProductscanedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productscaned',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/productscaned/productscaned.html"*/`<ion-header class="product-page-header">\n    <ion-navbar color="accent">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Products</ion-title>\n  </ion-navbar>\n\n    <shrinking-segment-header [scrollArea]="myContent" headerHeight="2px">\n\n     \n     \n    \n    </shrinking-segment-header>\n    <ion-toolbar color="light" mode="md">\n      <ion-segment color="dark" mode="md" [(ngModel)]="section">\n        <ion-segment-button active value="one" (click)="getOwenedData()">\n          Owned\n        </ion-segment-button>\n        <ion-segment-button value="two" (click)="getScanedData()">\n          Scaned\n        </ion-segment-button>     \n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen #myContent>\n\n    <div [ngSwitch]="section" style="margin-top:30px;">\n      <ion-list *ngSwitchCase="\'one\'" style="margin-top:30px;margin-bottom: 2px">\n        <div *ngIf="!noOwnerData">\n        <ion-card padding class="product-history-card font-15" *ngFor="let ownerList of ownerListdata">\n          \n          <ion-row *ngIf="ownerList.status==\'active\'">\n            <ion-col col-6 text-center (click)="getownedProductInfo(ownerList.productName,ownerList.productKeyName)"> \n              <b> {{ownerList.productName}}</b> \n            </ion-col>\n               <ion-col col-6 text-center (click)="showConfirm(ownerList.productName,ownerList.productKeyName)">\n                <b> Share</b>\n              </ion-col>\n            </ion-row> \n            \n            <ion-row *ngIf="ownerList.status==\'deactivate\'" style="background-color: red">\n            <ion-col col-6 text-center (click)="getownedProductInfowithDetails(ownerList.productName,ownerList.productKeyName)"> \n              <b> {{ownerList.productName}}</b> \n            </ion-col>\n               <ion-col col-6 text-center (click)="showConfirm(ownerList.productName,ownerList.productKeyName)">\n                <span> Share</span>\n              </ion-col>\n              \n            </ion-row>\n            <ion-row *ngIf="ownerList.status==\'active\'">\n                 <span style="margin-left: 254px"> Shared</span>\n             </ion-row>\n             <ion-row *ngIf="ownerList.status==\'deactivate\'">\n                 <span style="margin-left: 213px"> Not Shared</span>\n             </ion-row>\n             <!-- <b style="margin-left: 253px;position: fixed;">Shared</b> -->\n          </ion-card>\n      </div>\n          <br>\n      <div *ngIf="noOwnerData">\n           <b style="margin-left: 137px;">No data Found</b> \n      </div>\n\n     \n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'two\'">\n        <div *ngIf="!noScanedData">\n        <ion-card padding class="product-history-card font-15" *ngFor="let scanedList of scanedListdata">\n        <ion-row >\n             <ion-col col-6  (click)="getownedProductInfowithDetails(scanedList.productName,scanedList.productKeyName)"> \n                <b>{{scanedList.productName}}</b>\n             </ion-col>\n            <ion-col col-6 text-center (click)="showConfirm(scanedList.productName,scanedList.productKeyName)">\n              <b> Share</b>\n            </ion-col>\n        </ion-row>\n\n         <br>\n        \n         \n         \n        </ion-card>  \n          </div> \n        <div *ngIf="noScanedData">    \n          <b style="margin-left: 137px;">No data Found</b>           \n         </div> \n      </ion-list>\n\n     \n\n    </div>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/productscaned/productscaned.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ProductscanedPage);
    return ProductscanedPage;
}());

//# sourceMappingURL=productscaned.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnedproductinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_transferownership_transferownership__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_storelocation_storelocation__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the OwnedproductinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OwnedproductinfoPage = (function () {
    function OwnedproductinfoPage(navCtrl, alertCtrl, sharingVar, actionSheetCtrl, toastCtrl, platform, navParams, _setupService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.sharingVar = sharingVar;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.ataList = [];
        this.display = [];
        this.qrcodestatus = false;
        this.ownerstatus = false;
        this.section = 'one';
        this.somethings = new Array(20);
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user) {
            var res = JSON.parse(this.user[0].json._body);
            this.userAdd = res.data.userAddress;
            this.userEmail = res.data.email;
        }
        this.productName = this.navParams.get('getOwnproductId');
        this.stremKey = this.navParams.get('getOwnstremKey');
        if (this.productName && this.stremKey) {
            this.getOwnerproductInfo(this.productName, this.stremKey, this.userAdd);
        }
    }
    OwnedproductinfoPage.prototype.getOwnerproductInfo = function (productName, productKey, userAddress) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'please wait...',
            duration: 15000,
        });
        loading.present();
        var postData = {
            userAddress: userAddress,
            productName: productName,
            productKeyName: productKey
        };
        var url = this._setupService.basePath + '/multichain/product/listStreamKeyItem';
        this._setupService.PostRequestUnautorized(url, postData).subscribe(function (response) {
            loading.dismiss();
            if (response[0].json.responseCode == 200) {
                _this.dataList = [];
                _this.dataItem = response[0].json.data;
                for (var i = 0; i < _this.dataItem.length; i++) {
                    var objData = {
                        location: '',
                        state: '',
                        blocktime: ''
                    };
                    objData.location = _this.dataItem[i].location ? _this.dataItem[i].location : '--';
                    objData.state = _this.dataItem[i].state ? _this.dataItem[i].state : '--';
                    var time = _this.dataItem[i].blocktime;
                    objData.blocktime = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](time / 1000).format("DD-MM-YYYY HH:mm:ss");
                    _this.dataList.push(objData);
                }
                var index = _this.dataItem.length - 1;
                var tempData = _this.dataItem[index];
                localStorage.setItem('tempOwnerData', JSON.stringify(tempData));
                _this.ownerstatus = _this.dataItem[index].status;
                _this.ownedDetails = _this.dataItem[index].state;
                var time = _this.dataItem[index].blocktime;
                _this.transferTime = __WEBPACK_IMPORTED_MODULE_6_moment__["unix"](time / 1000).format("DD-MM-YYYY HH:mm:ss");
                var ownTime = _this.dataItem[index].manufacture.date;
                _this.ownedTime = __WEBPACK_IMPORTED_MODULE_6_moment__(ownTime).format("DD-MM-YYYY");
                _this.manufactureInfo = _this.dataItem[index].manufacture.companyName;
                _this.city = _this.dataItem[index].manufacture.address.city;
                _this.state = _this.dataItem[index].manufacture.address.state;
                _this.country = _this.dataItem[index].manufacture.address.country;
                _this.pin = _this.dataItem[index].manufacture.address.pin;
                _this.manufactureDate = _this.dataItem[index].manufacture.date;
                var desc = _this.dataItem[index].description;
                for (var key in desc) {
                    var data = {
                        key: key,
                        value: desc[key],
                    };
                    _this.display.push(data);
                }
                _this.ownerId = _this.dataItem[index].description;
                for (var i = 0; i < 1; i++) {
                    _this.origin = _this.dataItem[i].location;
                    var time = _this.dataItem[i].manufacture.date;
                    _this.productTime = __WEBPACK_IMPORTED_MODULE_6_moment__(time).format("DD-MM-YYYY");
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: response[0].json.responseMessage,
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
                // this.navCtrl.setRoot(DashboardPage);
            }
        });
    };
    OwnedproductinfoPage.prototype.transferOwnership = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_transferownership_transferownership__["a" /* TransferownershipPage */], { 'getOwnproductId': this.productName, 'getOwnstremKey': this.stremKey });
    };
    OwnedproductinfoPage.prototype.showConfirm = function () {
        var _this = this;
        var productName = "Hp-Laptop";
        var streamKey = "dwidhwdhwididjasjasojaskcj";
        var a = "productName" + " " + this.productName + "," + "productKeyName" + " " + this.stremKey;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share address Via',
            buttons: [
                {
                    text: 'whatsapp',
                    role: 'destructive',
                    handler: function () {
                        _this.whatsUpShare(a);
                    }
                }, {
                    text: 'facebook',
                    role: 'destructive',
                    handler: function () {
                        _this.facebookShare(a);
                    }
                }, {
                    text: 'message',
                    role: 'destructive',
                    handler: function () {
                        _this.messageShare(a);
                    }
                },
                {
                    text: 'email',
                    role: 'destructive',
                    handler: function () {
                        _this.emailShare(a);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    OwnedproductinfoPage.prototype.whatsUpShare = function (address) {
        this.sharingVar.shareViaWhatsApp(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via whatsup');
        })
            .catch(function (err) {
            console.log('Was not shared via whatsup');
        });
    };
    OwnedproductinfoPage.prototype.facebookShare = function (address) {
        this.sharingVar.shareViaFacebook(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via Facebook');
        })
            .catch(function (err) {
            console.log('Was not shared via Facebook');
        });
    };
    OwnedproductinfoPage.prototype.messageShare = function (address) {
        this.sharingVar.shareViaSMS(address, null /* img */).then(function (data) {
            console.log('Shared via sms');
        })
            .catch(function (err) {
            console.log('Was not shared via sms');
        });
    };
    OwnedproductinfoPage.prototype.emailShare = function (address) {
        this.sharingVar.shareViaEmail(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via email');
        })
            .catch(function (err) {
            console.log('Was not shared via email');
        });
    };
    OwnedproductinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OwnedproductinfoPage');
    };
    OwnedproductinfoPage.prototype.getStoreLOcation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_storelocation_storelocation__["a" /* StorelocationPage */]);
    };
    OwnedproductinfoPage.prototype.getInvoice = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Logging please wait...',
            dismissOnPageChange: true,
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        loading.present();
        var postData = {
            "email": this.userEmail
        };
        var url = this._setupService.basePath + '/multichain/user/invoice';
        this._setupService.PostRequest(url, postData).subscribe(function (response) {
            loading.dismiss();
            var respon = JSON.parse(response[0].json._body);
            if (respon.responseCode == 200) {
                var toast = _this.toastCtrl.create({
                    message: respon.responseMessage,
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
            else {
                loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'somthing went wrong please retry',
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        });
    };
    OwnedproductinfoPage.prototype.ownerInfo = function (value) {
        if (value == "owner") {
            var confirm_1 = this.alertCtrl.create({
                title: "Owner",
                message: "<b>Status</b>" + " " + "Owned" + " " + "<br>" + "<b>Date</b>" + __WEBPACK_IMPORTED_MODULE_6_moment__(this.ownedTime).format("YYYY-MM-DD HH:mm"),
                buttons: [
                    {
                        text: 'ok',
                        handler: function (data) {
                        }
                    },
                ]
            });
            confirm_1.present();
        }
        else if (value == "manufacture") {
            var confirm_2 = this.alertCtrl.create({
                title: 'Manufacture Info',
                message: "<b>Company<b>" + "-" + this.manufactureInfo + " " + "<br>" + "<b>Address</b>" + "-" + this.city + "," + this.state + "," + "<br>" + this.country + "," + this.pin,
                buttons: [
                    {
                        text: 'ok',
                        handler: function (data) {
                        }
                    },
                ]
            });
            confirm_2.present();
        }
        else if ("warantty") {
            var confirm_3 = this.alertCtrl.create({
                title: 'warranty Info',
                message: "<b>Date of ownership transfer <b>" + "<br>" + "<br>" + this.transferTime,
                buttons: [
                    {
                        text: 'ok',
                        handler: function (data) {
                        }
                    },
                ]
            });
            confirm_3.present();
        }
    };
    OwnedproductinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ownedproductinfo',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/ownedproductinfo/ownedproductinfo.html"*/`<!--\n  Generated template for the OwnedproductinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="product-page-header">\n \n  <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Product Info {{stremKey ? stremKey:\'NA\'}}</ion-title>\n  </ion-navbar>\n\n  <shrinking-segment-header [scrollArea]="myContent" headerHeight="150">\n\n      <ion-row class="padtop-14" text-center>\n        <ion-col col-12 class="font-18">  Manufacturer: {{productName}}</ion-col>\n        <ion-col col-12 class="font-18">Date of Manufacture: {{productTime}}</ion-col>\n      </ion-row>\n      <ion-grid>\n\n      <ion-row>\n        <ion-col center text-right>\n          <div class="home-button owner-a" *ngIf="!ownerstatus">\n            <img padding-bottom="" padding-top="" src="assets/img/get-owner-01.png" style="width:40px; padding-top: 0px;" >            \n          </div>\n          <div class="home-button owner-green" *ngIf="ownerstatus">           \n            <img padding-bottom="" (click)="ownerInfo(\'owner\')" padding-top="" src="assets/img/get-owner-01.png" style="width:40px; padding-top: 0px;" >\n          </div>\n        </ion-col>\n\n        <ion-col center text-center>\n          <div class="home-button owner-b">\n            <img padding-bottom="" (click)="ownerInfo(\'manufacture\')" padding-top="" src="assets/img/manufacture-gray-01.svg" style="width:35px; padding-top: 0px;">\n          </div>\n        </ion-col>\n\n        <ion-col center text-left>\n          <div class="home-button owner-c">\n            <img padding-bottom=""  (click)="ownerInfo(\'warantty\')" padding-top="" src="assets/img/trust-gray.svg" style="width:35px; padding-top: 0px;">\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n      \n\n      <ion-grid class="grid" margin-top="" padding-top="">\n        <ion-row class="row" padding-top="">\n            <div class="home-button">\n              <img padding-bottom="" padding-top="" src="assets/img/gray_qr.png" style="width:10px" >\n            </div>\n\n            <div class="home-button">\n              <img padding-bottom="" padding-top="" src="assets/img/gray_enter.png" style="width:1">\n            </div>\n        </ion-row>\n      </ion-grid>\n    </shrinking-segment-header>\n\n<ion-toolbar color="light" mode="md">\n      <ion-segment color="dark" mode="md" [(ngModel)]="section">\n        <ion-segment-button active value="one">\n          <ion-icon ios="ios-git-merge" md="md-git-merge"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="two">\n          <ion-icon name="paper"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen #myContent>\n    <div [ngSwitch]="section" style="margin-top:30px;">\n      <ion-list *ngSwitchCase="\'one\'" style="margin-top:30px;margin-bottom: 2px">\n        <ion-card padding class="product-history-card font-15">\n        <ion-row>\n          <ion-col col-6> <b> Origin :</b></ion-col>\n          <ion-col col-6> {{origin}} </ion-col>\n          </ion-row>\n         \n        </ion-card>\n       <ion-card padding class="product-history-card font-15" *ngFor="let data of dataList">\n            <ion-row>\n                <ion-col col-6><b> Location: </b> </ion-col>\n               <ion-col col-6>   {{data.location}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-6><b> State: </b> </ion-col>\n               <ion-col col-6>   {{data.state}}</ion-col>\n            </ion-row>\n             <ion-row>\n                <ion-col col-4> <b>Date:</b> </ion-col>\n               <ion-col col-7>  {{data.blocktime}}</ion-col>\n            </ion-row>\n        </ion-card>\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'two\'">\n        <ion-card padding class="product-history-card font-15">\n          <div *ngFor="let data of display">\n              <ion-row>\n                <ion-col col-6><b> {{data.key}}:</b></ion-col>\n               <ion-col col-6>  {{data.value}}</ion-col>\n            </ion-row>\n              <br>\n          </div>         \n         <div >              \n        </div>         \n      </ion-card>    \n    </ion-list>\n\n     \n\n    </div>\n\n</ion-content>\n<ion-footer>\n  <ion-fab bottom right >\n       <button ion-fab><ion-icon name="arrow-dropup-circle"></ion-icon></button>\n       <ion-fab-list side="top">\n        <button ion-fab (click)="getInvoice()"> <ion-icon name="document"></ion-icon></button> \n        <button ion-fab (click)="showConfirm()"> <ion-icon name="share" md="md-share"></ion-icon></button>\n        <button ion-fab (click)="transferOwnership()"> <ion-icon name="swap"></ion-icon></button>        \n        <!-- <button ion-fab (click)="getStoreLOcation()"><ion-icon name="pin"></ion-icon></button> -->\n       </ion-fab-list>   \n     </ion-fab>\n</ion-footer>\n\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/ownedproductinfo/ownedproductinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], OwnedproductinfoPage);
    return OwnedproductinfoPage;
}());

//# sourceMappingURL=ownedproductinfo.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferownershipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TransferownershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransferownershipPage = (function () {
    function TransferownershipPage(platform, navCtrl, alertCtrl, network, toastCtrl, fb, _setupService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this._setupService = _setupService;
        this.navParams = navParams;
        this.productInfo = { data: '' };
        this.userOwnerData = JSON.parse(localStorage.getItem('tempOwnerData'));
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        this.netStatus = localStorage.getItem('NetworkStatus');
        if (this.user) {
            var res = JSON.parse(this.user[0].json._body);
            this.userAdd = res.data.userAddress;
        }
        this.productName = this.navParams.get('getOwnproductId');
        this.streamKey = this.navParams.get('getOwnstremKey');
        this.strKey = this.streamKey;
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    TransferownershipPage.prototype.transferownershipform = function () {
        this.transferOwnerShipForm = this.fb.group({
            'data': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
        });
    };
    TransferownershipPage.prototype.transferOwnership = function () {
        var _this = this;
        //  console.log("this.userOwnerData = = "+JSON.stringify(this.userOwnerData));
        if (this.netStatus == "offline") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }
        else {
            var postData = {
                "userAddress": this.userAdd,
                "contactNumber": "+91" + this.productInfo.data,
                "productName": this.productName,
                "productKeyName": this.streamKey,
                "data": this.userOwnerData
            };
            var url = this._setupService.basePath + '/multichain/product/publisherSTreamItem';
            this._setupService.PostRequest(url, postData)
                .subscribe(function (response) {
                var res = JSON.parse(response[0].json._body);
                if (res.responseCode == 200) {
                    var toast = _this.toastCtrl.create({
                        message: res.responseMessage,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                    _this.transferOwnerShipForm.reset();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                }
                else {
                    _this.transferOwnerShipForm.reset();
                    var toast = _this.toastCtrl.create({
                        message: 'Somthing went wrong...',
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    TransferownershipPage.prototype.ionViewDidLoad = function () {
        // this.network.onConnect().subscribe(data => {      
        //   }, error => console.error(error));
        //   this.network.onDisconnect().subscribe(data => {
        //     let alert = this.alertCtrl.create({
        //       title: 'Network was disconnected :-(',
        //       subTitle: 'Please check your connection. And try again',
        //       buttons: ['OK']
        //     });
        //     alert.present();
        //   }, error => console.error(error));
        // console.log('ionViewDidLoad ProfilePage');
    };
    TransferownershipPage.prototype.ngOnInit = function () {
        this.transferownershipform();
    };
    TransferownershipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transferownership',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/transferownership/transferownership.html"*/`<!--\n  Generated template for the TransferownershipPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Transfer Ownership</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n           \n            <form [formGroup]="transferOwnerShipForm">\n     <ion-list>\n\n		  <ion-item  [ngClass]="{\'error-border\':!transferOwnerShipForm.controls.data.valid && transferOwnerShipForm.controls.data.dirty}">\n		    <ion-label floating>UID or phone No</ion-label>\n		    <ion-input [(ngModel)]="productInfo.data" formControlName="data" type="text" required></ion-input> \n		   <!-- </div> -->\n		  </ion-item>\n        <ion-item *ngIf="transferOwnerShipForm.controls.data.hasError(\'required\') && transferOwnerShipForm.controls.data.dirty">\n             <p style="color:red;">Sorry, field  is required!</p>\n        </ion-item>\n         <ion-row responsive-sm>\n				<ion-col >\n					<button class="button-backcolor" ion-button (click)="transferOwnership()"  [disabled]="!transferOwnerShipForm.valid" type="submit" block>Sold</button>\n				</ion-col>\n			</ion-row>\n   </ion-list>\n    </form>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/transferownership/transferownership.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TransferownershipPage);
    return TransferownershipPage;
}());

//# sourceMappingURL=transferownership.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorelocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_storelocatiolist_storelocatiolist__ = __webpack_require__(501);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StorelocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StorelocationPage = (function () {
    function StorelocationPage(navCtrl, fb, _setupService, navParams) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this._setupService = _setupService;
        this.navParams = navParams;
        this.storeInfo = { brand: '', product: '', };
    }
    StorelocationPage.prototype.storeLocationFormInit = function () {
        this.storeLocationForm = this.fb.group({
            'brand': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            'product': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    };
    StorelocationPage.prototype.getStoreLocations = function () {
        var brandName = this.storeInfo.brand;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_storelocatiolist_storelocatiolist__["a" /* StorelocatiolistPage */], { 'brands': brandName });
    };
    StorelocationPage.prototype.ngOnInit = function () {
        this.storeLocationFormInit();
    };
    StorelocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StorelocationPage');
    };
    StorelocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-storelocation',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/storelocation/storelocation.html"*/`<!--\n  Generated template for the StorelocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	   <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Store Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <form [formGroup]="storeLocationForm">\n     <ion-list>\n\n		  <ion-item  [ngClass]="{\'error-border\':!storeLocationForm.controls.brand.valid && storeLocationForm.controls.brand.dirty}">\n		    <ion-label floating>Brand</ion-label>\n		    <ion-input [(ngModel)]="storeInfo.brand" formControlName="brand" type="text" required></ion-input> \n		   <!-- </div> -->\n		  </ion-item>\n        <ion-item *ngIf="storeLocationForm.controls.brand.hasError(\'required\') && storeLocationForm.controls.brand.dirty">\n             <p style="color:red;">Sorry, field brand is required!</p>\n        </ion-item>\n       \n      <ion-item  [ngClass]="{\'error-border\':!storeLocationForm.controls.product.valid && storeLocationForm.controls.product.dirty}">\n        <ion-label floating>Product</ion-label>\n        <ion-input [(ngModel)]="storeInfo.product" formControlName="product" type="text" required></ion-input>\n      \n      </ion-item>\n        <ion-item *ngIf="storeLocationForm.controls.product.hasError(\'required\') && storeLocationForm.controls.product.dirty">\n             <p style="color:red;">Sorry, field product Name is required!</p>\n        </ion-item>\n\n			\n     \n         <ion-row responsive-sm>\n				<ion-col >\n					<button class="button-backcolor" ion-button (click)="getStoreLocations()"  [disabled]="!storeLocationForm.valid" type="submit" block>Locate</button>\n				</ion-col>\n			</ion-row>\n   </ion-list>\n    </form>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/storelocation/storelocation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], StorelocationPage);
    return StorelocationPage;
}());

//# sourceMappingURL=storelocation.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorelocatiolistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StorelocatiolistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StorelocatiolistPage = (function () {
    function StorelocatiolistPage(navCtrl, _setupService, navParams) {
        this.navCtrl = navCtrl;
        this._setupService = _setupService;
        this.navParams = navParams;
        this.locationList = [];
        // this.brandsName = this.navParams.get('brands');
        this.brandsName = "Sana";
        this.getStoreLocation(this.brandsName);
    }
    StorelocatiolistPage.prototype.getStoreLocation = function (brands) {
        var _this = this;
        var postData = {
            brand: brands
        };
        var url = this._setupService.basePath + '/multichain/product/locator';
        this._setupService.PostRequest(url, postData).subscribe(function (response) {
            _this.locationList = response;
        });
    };
    StorelocatiolistPage.prototype.getDirections = function () {
        console.log("open map");
    };
    StorelocatiolistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StorelocatiolistPage');
    };
    StorelocatiolistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-storelocatiolist',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/storelocatiolist/storelocatiolist.html"*/`<!--\n  Generated template for the StorelocatiolistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Store location list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item>\n     <!-- <ion-row *ngFor="let location of locationList"> -->\n     	<ion-row>\n               <ion-col col-6 text-center (click)="getownedProductInfo()"> <b> location</b> </ion-col>\n               <ion-col col-6 text-center><b> <ion-icon name="navigate"  (click)="getDirections()"></ion-icon></b></ion-col>\n            </ion-row> \n   \n   \n   \n  </ion-item>\n</ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/storelocatiolist/storelocatiolist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], StorelocatiolistPage);
    return StorelocatiolistPage;
}());

//# sourceMappingURL=storelocatiolist.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ReferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferPage = (function () {
    function ReferPage(navCtrl, fb, _setupService, navParams, sharingVar, actionSheetCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this._setupService = _setupService;
        this.navParams = navParams;
        this.sharingVar = sharingVar;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.referInfo = { referCode: "" };
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        var res = JSON.parse(this.user[0].json._body);
        this.referInfo.referCode = res.data.reffralCode;
    }
    ReferPage.prototype.referformInit = function () {
        this.referForm = this.fb.group({
            'referCode': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
        });
    };
    ReferPage.prototype.transferOwnership = function () {
        var _this = this;
        var url = this._setupService.basePath + 'api/login';
        this._setupService.PostRequest(url, this.referInfo)
            .subscribe(function (response) {
            if (response[0].json.status == 200) {
            }
            else {
                _this.referForm.reset();
            }
        });
    };
    ReferPage.prototype.ngOnInit = function () {
        this.referformInit();
    };
    ReferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReferPage');
    };
    ReferPage.prototype.showConfirm = function () {
        var _this = this;
        var a = this.referInfo.referCode;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share address Via',
            buttons: [
                {
                    text: 'whatsapp',
                    role: 'destructive',
                    handler: function () {
                        _this.whatsUpShare(a);
                    }
                }, {
                    text: 'facebook',
                    role: 'destructive',
                    handler: function () {
                        _this.facebookShare(a);
                    }
                }, {
                    text: 'message',
                    role: 'destructive',
                    handler: function () {
                        _this.messageShare(a);
                    }
                },
                {
                    text: 'email',
                    role: 'destructive',
                    handler: function () {
                        _this.emailShare(a);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ReferPage.prototype.whatsUpShare = function (address) {
        this.sharingVar.shareViaWhatsApp(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via whatsup');
        })
            .catch(function (err) {
            console.log('Was not shared via whatsup');
        });
    };
    ReferPage.prototype.facebookShare = function (address) {
        this.sharingVar.shareViaFacebook(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via Facebook');
        })
            .catch(function (err) {
            console.log('Was not shared via Facebook');
        });
    };
    ReferPage.prototype.messageShare = function (address) {
        this.sharingVar.shareViaSMS(address, null /* img */).then(function (data) {
            console.log('Shared via sms');
        })
            .catch(function (err) {
            console.log('Was not shared via sms');
        });
    };
    ReferPage.prototype.emailShare = function (address) {
        this.sharingVar.shareViaEmail(address, null /* img */, null /* url */).then(function (data) {
            console.log('Shared via email');
        })
            .catch(function (err) {
            console.log('Was not shared via email');
        });
    };
    ReferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refer',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/refer/refer.html"*/`<!--\n  Generated template for the ReferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	   <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Refer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-row>\n               <b> Share your Referral code</b>           \n            </ion-row>\n\n            <form [formGroup]="referForm">\n     <ion-list>\n\n		  <ion-item  [ngClass]="{\'error-border\':!referForm.controls.referCode.valid && referForm.controls.referCode.dirty}">\n		 <!--    <ion-label floating>Code</ion-label> -->\n		    <ion-input [(ngModel)]="referInfo.referCode" formControlName="referCode" type="text" required disabled="true"></ion-input> \n		   <!-- </div> -->\n		  </ion-item>\n        <ion-item *ngIf="referForm.controls.referCode.hasError(\'required\') && referForm.controls.referCode.dirty">\n             <p style="color:red;">Sorry, field refer code is required!</p>\n        </ion-item>\n         <ion-row responsive-sm>\n				<ion-col >\n					<button class="button-backcolor" (click)="showConfirm()" ion-button [disabled]="!referForm.valid" type="submit" block>Share</button>\n				</ion-col>\n			</ion-row>\n   </ion-list>\n    </form>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/refer/refer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ReferPage);
    return ReferPage;
}());

//# sourceMappingURL=refer.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, events, camera, crop, actionSheetCtrl, modalCtrl, fb, toastCtrl, loadingCtrl, _setupService, navParams) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.camera = camera;
        this.crop = crop;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this._setupService = _setupService;
        this.navParams = navParams;
        this.userInfo = { userName: '', phoneNo: '', emailId: '', image: '', userAddress: '' };
        this.images = [];
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        var res = JSON.parse(this.user[0].json._body);
        this.userInfo.uid = res.data.uuid;
        this.userInfo.emailId = res.data.email;
        this.userInfo.userName = res.data.userName;
        this.userInfo.phoneNo = res.data.contactNumber;
        this.userInfo.userAddress = res.data.userAddress;
        if (res.data.image) {
            this.userInfo.image = res.data.image;
        }
        else {
            this.userInfo.image = "assets/img/marty-avatar.jpeg";
        }
    }
    ProfilePage.prototype.userprofileFormInit = function () {
        this.profileUpdateForm = this.fb.group({
            'userName': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            'phoneNo': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            'emailId': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            'image': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('')
        });
    };
    ProfilePage.prototype.updateProfile = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'updating....',
            dismissOnPageChange: true,
            showBackdrop: true,
            duration: 15000,
            enableBackdropDismiss: true
        });
        this.loading.present();
        var postData = {
            userName: this.userInfo.userName,
            email: this.userInfo.emailId,
            contactNumber: "+91" + this.userInfo.phoneNo,
            userAddress: this.userInfo.userAddress,
            image: this.userInfo.image
        };
        var url = this._setupService.basePath + '/multichain/user/updateUserProfile';
        this._setupService.PostRequest(url, postData)
            .subscribe(function (response) {
            _this.loading.dismiss();
            var respon = JSON.parse(response[0].json._body);
            if (respon.responseCode == 200) {
                var userUpdatedImage = respon.data.image;
                _this.events.publish("userImage", userUpdatedImage);
                var toast = _this.toastCtrl.create({
                    message: respon.responseMessage,
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: "something went wrong",
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ngOnInit = function () {
        this.userprofileFormInit();
    };
    ProfilePage.prototype.teamImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        var file = event.target.files[0];
        reader.onloadend = function (e) {
            _this.selectedTokenImage = e.target.result;
            var tokImage = _this.selectedTokenImage.split(',')[1];
            var postData = {
                image: tokImage
            };
            var url = _this._setupService.basePath + '/multichain/user/imageUploadTax';
            _this._setupService.PostRequest(url, postData).subscribe(function (response) {
                if (response[0].status) {
                    if (response[0].json.json().statusCode == 200) {
                        _this.imageDataAfterupload = response[0].json.json().data;
                        _this.userInfo.image = _this.imageDataAfterupload;
                    }
                    else {
                    }
                }
            });
        };
        reader.readAsDataURL(file);
    };
    ProfilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            allowEdit: false
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            var base64Image = 'data:image/jpeg;base64,' + imagePath;
            _this.uploadInServer(base64Image);
            // this.crop.crop('base64Image', {quality: 70}).then((newImage) => {        
            //                 this.uploadInServer(newImage);
            //            });
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    ProfilePage.prototype.convertToBase64 = function (url, outputFormat) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                var canvas = document.createElement('CANVAS'), ctx = canvas.getContext('2d'), dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img, 0, 0);
                dataURL = canvas.toDataURL(outputFormat);
                canvas = null;
                resolve(dataURL);
            };
            img.src = url;
        });
    };
    ProfilePage.prototype.uploadInServer = function (img) {
        var _this = this;
        this.selectedTokenImage = img;
        var tokImage = this.selectedTokenImage.split(',')[1];
        var postData = {
            image: tokImage
        };
        var loading = this.loadingCtrl.create({
            content: 'uploading...',
            dismissOnPageChange: true,
            showBackdrop: true,
            duration: 15000,
            enableBackdropDismiss: true
        });
        loading.present();
        var url = this._setupService.basePath + '/multichain/user/imageUploadTax';
        this._setupService.PostRequest(url, postData).subscribe(function (response) {
            loading.dismiss();
            var respon = JSON.parse(response[0].json._body);
            if (respon.statusCode == 200) {
                _this.userInfo.image = respon.data;
            }
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/profile/profile.html"*/`<ion-header>\n\n  <ion-navbar color="accent">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start class="myphoto">\n        <img src={{userInfo.image}} (click)="presentActionSheet()" style="height: 100px; width: 100px;    margin-left: 83px;">\n      </ion-avatar>\n      <!--  <input type="file" (change)="teamImage($event)" accept="image/x-png,image/gif,image/jpeg">  -->\n   \n    </ion-item>\n\n    \n\n    <ion-card-content>\n    <form [formGroup]="profileUpdateForm">\n     <ion-list>\n\n		  <ion-item  [ngClass]="{\'error-border\':!profileUpdateForm.controls.userName.valid && profileUpdateForm.controls.userName.dirty}">\n		    <ion-label floating>Name</ion-label>\n		    <ion-input [(ngModel)]="userInfo.userName" formControlName="userName" type="text" required></ion-input> \n		   <!-- </div> -->\n		  </ion-item>\n        <ion-item *ngIf="profileUpdateForm.controls.userName.hasError(\'required\') && profileUpdateForm.controls.userName.dirty">\n             <p style="color:red;">Name is required!</p>\n        </ion-item>\n       \n      <ion-item  [ngClass]="{\'error-border\':!profileUpdateForm.controls.phoneNo.valid && profileUpdateForm.controls.phoneNo.dirty}">\n        <ion-label floating>Phone No</ion-label>\n        <ion-input [(ngModel)]="userInfo.phoneNo" formControlName="phoneNo" type="text" required></ion-input>\n      \n      </ion-item>\n        <ion-item *ngIf="profileUpdateForm.controls.phoneNo.hasError(\'required\') && profileUpdateForm.controls.phoneNo.dirty">\n             <p style="color:red;">Sorry, field phone No is required!</p>\n        </ion-item>\n\n			\n      <ion-item  [ngClass]="{\'error-border\':!profileUpdateForm.controls.emailId.valid && profileUpdateForm.controls.emailId.dirty}">\n        <ion-label floating>Email Id</ion-label>\n        <ion-input [(ngModel)]="userInfo.emailId" formControlName="emailId" type="text" required disabled="true"></ion-input>\n      \n      </ion-item>\n        <ion-item *ngIf="profileUpdateForm.controls.emailId.hasError(\'required\') && profileUpdateForm.controls.emailId.dirty">\n             <p style="color:red;">Sorry, field emailid is required!</p>\n        </ion-item>\n      <ion-item>\n<!-- \n		  <ion-label floating>Uid</ion-label>\n		    <ion-input [(ngModel)]="userInfo.uid" formControlName="uid" type="text"></ion-input> -->\n		  \n		  </ion-item>\n         <ion-row responsive-sm>\n				<ion-col >\n					<button class="button-backcolor" ion-button (click)="updateProfile()"  [disabled]="!profileUpdateForm.valid" type="submit" block>Update</button>\n				</ion-col>\n			</ion-row>\n   </ion-list>\n    </form>\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportappModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_setup_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReportappModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportappModalPage = (function () {
    //@Output() feedbackSubmit = new EventEmitter();
    // onFeedBack: Function;
    function ReportappModalPage(navCtrl, viewCtrl, fb, toastCtrl, menuCtrl, navParams, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.reportDetails = { reportError: '', };
        // this.prop = params.get('prop');
        // this.onFeedBack = params.get('onFeedBack');
    }
    ReportappModalPage.prototype.ngOnInit = function () {
        this.reportFormInit();
    };
    ReportappModalPage.prototype.reportFormInit = function () {
        this.reportForm = this.fb.group({
            'reportError': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    };
    ReportappModalPage.prototype.sendReport = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'account creating...'
        });
        loading.present();
        var postData = {
            userAddress: "1JDBLrZqiRfrXH12JCFRdM767JGuWa4LtpMkvU",
            reportError: this.reportDetails.name
        };
        var url = this._setupService.basePath + '/multichain/user/report';
        this._setupService.PostRequest(url, postData).subscribe(function (response) {
            loading.dismiss();
            var res = JSON.parse(response[0].json._body);
            if (res.responseCode == 200) {
                var toast = _this.toastCtrl.create({
                    message: 'Report sent succesfully !!',
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
                _this.viewCtrl.dismiss();
            }
            else {
            }
        });
    };
    ReportappModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ReportappModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reportapp-modal',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/reportapp-modal/reportapp-modal.html"*/`<!--\n  Generated template for the ReportModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n    <ion-header>\n    	<ion-navbar>\n    		<ion-buttons start>\n    			<button ion-button (click)="dismiss()">Close</button>\n    		</ion-buttons>\n    		<ion-title>Report an issue App </ion-title>\n    	</ion-navbar>\n    </ion-header>\n    \n    <ion-content padding>\n      \n      <ion-row>\n               <b> Please provide details of the issue</b>           \n            </ion-row>\n\n    <form [formGroup]="reportForm">\n     <ion-list>\n\n      <ion-item  [ngClass]="{\'error-border\':!reportForm.controls.reportError.valid && reportForm.controls.reportError.dirty}">\n        <ion-label floating>Issue</ion-label>\n       <ion-textarea [(ngModel)]="reportDetails.reportError" formControlName="reportError" type="text" required></ion-textarea>\n       <!-- </div> -->\n      </ion-item>\n\n        <ion-item *ngIf="reportForm.controls.reportError.hasError(\'required\') && reportForm.controls.reportError.dirty">\n             <p style="color:red;">Sorry, field issue is required!</p>\n        </ion-item>\n       \n      \n         <ion-row responsive-sm>\n        <ion-col >\n          <button class="button-backcolor" ion-button (click)="sendReport()"  [disabled]="!reportForm.valid" type="submit" block>Report</button>\n        </ion-col>\n      </ion-row>\n   </ion-list>\n    </form>\n     <ion-row>\n               <b> our customer support team will get in touch with you as soon as possible.</b>           \n            </ion-row>\n    </ion-content>`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/reportapp-modal/reportapp-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ReportappModalPage);
    return ReportappModalPage;
}());

//# sourceMappingURL=reportapp-modal.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(520);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forgotpassword_forgotpassword__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_changepassword_changepassword__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_conference_data__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_data__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_refer_refer__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_product_product__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_about_about__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_shrinking_segment_header_shrinking_segment_header__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_social_sharing__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_report_modal_report_modal__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_reportapp_modal_reportapp_modal__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_productscaned_productscaned__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_aboutapp_aboutapp__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_storelocation_storelocation__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_help_help__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_profile_profile__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_ownedproductinfo_ownedproductinfo__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_transferownership_transferownership__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_otp_receive_otp_receive__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_android_permissions__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_storelocatiolist_storelocatiolist__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__agm_core__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_geolocation__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_file_transfer__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_crop__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_network__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













































//import { Facebook } from '@ionic-native/facebook';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_report_modal_report_modal__["a" /* ReportModalPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_productscaned_productscaned__["a" /* ProductscanedPage */],
                __WEBPACK_IMPORTED_MODULE_25__components_shrinking_segment_header_shrinking_segment_header__["a" /* ShrinkingSegmentHeader */],
                __WEBPACK_IMPORTED_MODULE_31__pages_storelocation_storelocation__["a" /* StorelocationPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_aboutapp_aboutapp__["a" /* AboutappPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_refer_refer__["a" /* ReferPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_ownedproductinfo_ownedproductinfo__["a" /* OwnedproductinfoPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_transferownership_transferownership__["a" /* TransferownershipPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reportapp_modal_reportapp_modal__["a" /* ReportappModalPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_otp_receive_otp_receive__["a" /* OtpReceivePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_storelocatiolist_storelocatiolist__["a" /* StorelocatiolistPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_39__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDgrKvQQhwKYUvgt2L-d57OnGklEk1l_i0', libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */], name: 'HomePage', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */], name: 'ForgotpasswordPage', segment: 'forgotpassword' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_changepassword_changepassword__["a" /* ChangepasswordPage */], name: 'ChangepasswordPage', segment: 'changepassword' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_product_product__["a" /* ProductPage */], name: 'ProductPage', segment: 'product' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */], name: 'DashboardPage', segment: 'dashboard' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */], name: 'SettingPage', segment: 'setting' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_about_about__["a" /* AboutPage */], name: 'AboutPage', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_27__pages_report_modal_report_modal__["a" /* ReportModalPage */], name: 'ReportModalPage', segment: 'report-modal' },
                        { component: __WEBPACK_IMPORTED_MODULE_28__pages_reportapp_modal_reportapp_modal__["a" /* ReportappModalPage */], name: 'ReportappModalPage', segment: 'reportapp-modal' },
                        { component: __WEBPACK_IMPORTED_MODULE_29__pages_productscaned_productscaned__["a" /* ProductscanedPage */], name: 'ProductscanedPage', segment: 'productscaned' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_refer_refer__["a" /* ReferPage */], name: 'ReferPage', segment: 'refer' },
                        { component: __WEBPACK_IMPORTED_MODULE_32__pages_help_help__["a" /* HelpPage */], name: 'HelpPage', segment: 'help' },
                        { component: __WEBPACK_IMPORTED_MODULE_30__pages_aboutapp_aboutapp__["a" /* AboutappPage */], name: 'AboutappPage', segment: 'aboutapp' },
                        { component: __WEBPACK_IMPORTED_MODULE_31__pages_storelocation_storelocation__["a" /* StorelocationPage */], name: 'StorelocationPage', segment: 'storelocation' },
                        { component: __WEBPACK_IMPORTED_MODULE_33__pages_profile_profile__["a" /* ProfilePage */], name: 'ProfilePage', segment: 'profile' },
                        { component: __WEBPACK_IMPORTED_MODULE_34__pages_ownedproductinfo_ownedproductinfo__["a" /* OwnedproductinfoPage */], name: 'OwnedproductinfoPage', segment: 'ownedproductinfo' },
                        { component: __WEBPACK_IMPORTED_MODULE_35__pages_transferownership_transferownership__["a" /* TransferownershipPage */], name: 'TransferownershipPage', segment: 'transferownership' },
                        { component: __WEBPACK_IMPORTED_MODULE_36__pages_otp_receive_otp_receive__["a" /* OtpReceivePage */], name: 'OtpReceivePage', segment: 'OtpReceive' },
                        { component: __WEBPACK_IMPORTED_MODULE_38__pages_storelocatiolist_storelocatiolist__["a" /* StorelocatiolistPage */], name: 'StorelocatiolistPage', segment: 'storelocatiolist' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_productscaned_productscaned__["a" /* ProductscanedPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_report_modal_report_modal__["a" /* ReportModalPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_refer_refer__["a" /* ReferPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_aboutapp_aboutapp__["a" /* AboutappPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_storelocation_storelocation__["a" /* StorelocationPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_ownedproductinfo_ownedproductinfo__["a" /* OwnedproductinfoPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_transferownership_transferownership__["a" /* TransferownershipPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reportapp_modal_reportapp_modal__["a" /* ReportappModalPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_otp_receive_otp_receive__["a" /* OtpReceivePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_storelocatiolist_storelocatiolist__["a" /* StorelocatiolistPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_20__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_24__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_37__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_40__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_43__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_44__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_conference_data__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_data__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_productscaned_productscaned__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_refer_refer__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';




//import { TutorialPage } from '../pages/tutorial/tutorial';



//import { SettingPage } from '../pages/setting/setting';








var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen, app, alertCtrl, statusBar, loadingCtrl, network, _setupService) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this._setupService = _setupService;
        this.loggedInPages = [
            { title: 'Home', name: 'DashboardPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: 'home' },
            { title: 'Profile', name: 'ProfilePage', component: __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */], icon: 'contact' },
            { title: 'Products', name: 'ProductscanedPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_productscaned_productscaned__["a" /* ProductscanedPage */], icon: 'cart' },
            { title: 'Refer', name: 'ReferPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_refer_refer__["a" /* ReferPage */], icon: 'share' },
            // { title: 'Store Locator', name: 'StorelocationPage', component: StorelocationPage, icon: 'locate' },
            // { title: 'Help', name: 'HelpPage', component: HelpPage, icon: 'help' },
            // { title: 'About as', name: 'AboutappPage', component: AboutappPage, icon: 'information' },
            { title: 'Logout', name: null, component: null, icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#0000FF');
            _this.splashScreen.hide();
            _this._setupService.initializeNetworkEvents();
            // Offline event
            _this.events.subscribe('network:offline', function () {
                localStorage.setItem('NetworkStatus', "offline");
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */]);
            });
            // Online event
            _this.events.subscribe('network:online', function () {
                var compName = localStorage.getItem('cmpName');
                // alert("compName "+compName);
                localStorage.removeItem("NetworkStatus");
                _this.nav.setRoot(compName);
            });
        });
        this.registerBackButtonAction();
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
        events.subscribe('shareObject', function (userData) {
            localStorage.setItem('userprofileId', JSON.stringify(userData));
            _this.userId = JSON.parse(localStorage.getItem('userprofileId'));
            _this.emailId = _this.userId;
        });
        events.subscribe('userImage', function (userImg) {
            localStorage.setItem('userprofileImage', JSON.stringify(userImg));
            _this.userProfileImg = JSON.parse(localStorage.getItem('userprofileImage'));
        });
    }
    ConferenceApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            var nav = _this.app.getActiveNavs()[0];
            var activeView = nav.getActive();
            if (activeView.name === "DashboardPage") {
                if (nav.canGoBack()) {
                    nav.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'App termination',
                        message: 'Do you want to close the app?',
                        buttons: [{
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Application exit prevented!');
                                }
                            }, {
                                text: 'Close App',
                                handler: function () {
                                    _this.platform.exitApp(); // Close this application
                                }
                            }]
                    });
                    alert_1.present();
                }
            }
        });
    };
    ConferenceApp.prototype.openPage = function (page) {
        var _this = this;
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            this.nav.setRoot(page.component, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            var loading = this.loadingCtrl.create({
                content: 'Logout please wait...'
            });
            loading.present();
            localStorage.removeItem("logindetail");
            localStorage.removeItem("userprofileEmailId");
            setTimeout(function () { return _this.welcomeToBack(); }, loading.dismiss(), 1000);
        }
    };
    ConferenceApp.prototype.welcomeToBack = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    // openTutorial() {
    //   this.nav.setRoot(TutorialPage);
    // }
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/app/app.template.html"*/`<ion-split-pane>\n\n \n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n         <ion-title style="color: #fff; padding: 0 20px 1px;" text-left>\n          <ion-avatar item-start class="myphoto">\n            <img src={{userProfileImg}}  style="height: 70px; width: 71px;border-radius: 50%; font-size: 4.2em;   margin-left: 83px;">\n     \n      </ion-avatar>\n       \n          <br>\n          <small class="white-text" style="margin-left: 82px;">Uid {{emailId}}</small>\n       </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n       \n        <button class="sidemenu-item" ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_14__services_setup_service__["a" /* SetupService */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__otp_receive_otp_receive__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SignupPage = (function () {
    function SignupPage(platform, androidPermissions, http, navCtrl, fb, loadingCtrl, userData, alertCtrl, menuCtrl, navParams, _setupService, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.http = http;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.toastCtrl = toastCtrl;
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.signupDetail = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            contactNumber: ''
        };
        this.submitted = false;
        this.otp = '';
        this.mobile = '';
        var backAction = platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
            backAction();
        }, 2);
        this.netStatus = localStorage.getItem('NetworkStatus');
    }
    SignupPage.prototype.signUpFormInit = function () {
        this.signupForm = this.fb.group({
            'userName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^[a-zA-Z][-_.a-zA-Z0-9]{2,29}\@((\[[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,15}|[0-9]{1,3})(\]?)$/)])),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(16), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/)])),
            'confirmPassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'contactNumber': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)])),
        }, { validator: this.matchingPasswords('password', 'confirmPassword') });
    };
    SignupPage.prototype.matchingPasswords = function (passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    };
    SignupPage.prototype.ngOnInit = function () {
        this.signUpFormInit();
    };
    SignupPage.prototype.onSignup = function () {
        var _this = this;
        if (this.netStatus == "offline") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Sign up please wait...',
                dismissOnPageChange: true,
                showBackdrop: true,
                duration: 15000,
                enableBackdropDismiss: true
            });
            loading_1.present();
            var postData = {
                userName: this.signupDetail.userName,
                email: this.signupDetail.email.toLowerCase(),
                contactNumber: "+91" + this.signupDetail.contactNumber,
                password: this.signupDetail.password
            };
            var url = this._setupService.basePath + '/multichain/user/customerUser';
            this._setupService.PostRequestUnautorized(url, postData).subscribe(function (response) {
                loading_1.dismiss();
                if (response[0].json.responseCode == 200) {
                    localStorage.setItem('UserDetaisAfterSignup', JSON.stringify(response));
                    _this.responseData = response;
                    _this.userInfo = response[0].json.data;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__otp_receive_otp_receive__["a" /* OtpReceivePage */]);
                }
                else {
                    _this.responseData = response;
                    var toast = _this.toastCtrl.create({
                        message: response[0].json.responseMessage,
                        showCloseButton: true,
                        closeButtonText: 'Ok',
                        duration: 5000
                    });
                    toast.present();
                }
            });
        }
    };
    SignupPage.prototype.onLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menuCtrl.enable(true);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/signup/signup.html"*/`<ion-content> \n	<ion-row class="logo" text-center>\n		 <ion-col col-12 style="    font-size: 2em;    margin-top: 38px;    color: #3896ea;"><ion-icon name="create" class="icon-chat-user"></ion-icon></ion-col>\n		 <ion-col col-12><h3 class="button-color" ><strong>Create Account</strong></h3></ion-col>\n	</ion-row>\n\n	<form [formGroup]="signupForm">\n		<ion-list no-lines class="form-input-fields">\n		 <ion-item  >\n		    <ion-label floating>Name</ion-label>\n		    <ion-input [(ngModel)]="signupDetail.userName" formControlName="userName" type="text" required></ion-input> 		\n	     </ion-item>\n     \n         <ion-item class="small" *ngIf="!signupForm.controls[\'userName\'].valid &&signupForm.controls [\'userName\'].dirty">\n            <span *ngIf="signupForm.controls[\'userName\'].errors[\'required\']">\n                <p style="color:red;"> Name cannot be left blank</p>\n            </span>\n           <!--  <span *ngIf="signupForm.controls[\'userName\'].errors[\'pattern\']">\n                <p style="color:red;">User Name must contain 3-28 characters, only alphabets and no spaces</p>\n            </span> -->\n         </ion-item>\n\n		 <ion-item >\n		    <ion-label floating>Contact Number</ion-label>\n		    <ion-input [(ngModel)]="signupDetail.contactNumber" minlength="10" maxlength="10" formControlName="contactNumber" type="number" required></ion-input> \n		 </ion-item>\n         <ion-item *ngIf="!signupForm.controls[\'contactNumber\'].valid &&signupForm.controls [\'contactNumber\'].dirty">\n            <span *ngIf="signupForm.controls[\'contactNumber\'].errors[\'required\']">\n                <p style="color:red;">Contact Number cannot be left blank</p>\n            </span>\n            <span *ngIf="signupForm.controls[\'contactNumber\'].errors[\'minlength\']">\n                 <p style="color:red;">contact Number must be atleast 10 numbers</p>\n             </span>\n             <span *ngIf="signupForm.controls[\'contactNumber\'].errors[\'maxlength\']">\n                 <p style="color:red;">contact Number should not be greater then 10.</p>\n             </span>\n            <!-- <span *ngIf="signupForm.controls[\'contactNumber\'].errors[\'pattern\']">\n                <p style="color:red;">Contact Number not valid.</p>\n            </span> -->\n         </ion-item>\n        \n\n          <!-- Email fields -->\n         <ion-item >\n		    <ion-label floating>Email</ion-label>\n		    <ion-input [(ngModel)]="signupDetail.email" formControlName="email" type="text" required></ion-input> \n		 </ion-item>\n           \n         <ion-item class="small" *ngIf="!signupForm.controls[\'email\'].valid&&signupForm.controls[\'email\'].dirty">\n            <span *ngIf="signupForm.controls[\'email\'].errors[\'required\']">\n             	<p style="color:red;">Email cannot be left blank</p>\n            </span>\n            <span *ngIf="signupForm.controls[\'email\'].errors[\'pattern\']">\n             	<p style="color:red;">Email address format is incorrect</p>\n            </span>\n         </ion-item>\n\n          <!-- Password fields -->\n          \n         <ion-item >\n		    <ion-label floating>Password</ion-label>\n		    <ion-input [(ngModel)]="signupDetail.password" formControlName="password" type="password" required></ion-input> 		  \n	     	 </ion-item>\n         <ion-item class="small" *ngIf="!signupForm.controls[\'password\'].valid &&signupForm.controls             [\'password\'].dirty">\n            <span *ngIf="signupForm.controls[\'password\'].errors[\'required\']">\n                 <p style="color:red;">Password cannot be left blank</p>\n            </span>\n            <span *ngIf="signupForm.controls[\'password\'].errors[\'minlength\']">\n                 <p style="color:red;">password must be atleast 6 characters</p>\n             </span>\n            <span *ngIf="signupForm.controls[\'password\'].errors[\'pattern\']&&!signupForm.controls[\'password\'].errors[\'minlength\']">\n                <p style="color:red;">Password must contain at least 6 characters including 1 uppercase and 1 lowercase letter, 1 special character and 1 number</p>\n            </span>\n         </ion-item>\n\n         <ion-item >\n		    <ion-label floating>Confirm Password</ion-label>\n		    <ion-input [(ngModel)]="signupDetail.confirmPassword" formControlName="confirmPassword" type="password" required></ion-input> 		  \n	      </ion-item>\n	     <!-- 	<ion-item *ngIf="!signupForm.controls[\'confirmPassword\'].valid&&signupForm.controls[\'confirmPassword\'].dirty">\n                     </ion-item> -->\n\n         <ion-item *ngIf="signupForm.controls[\'confirmPassword\'].dirty&&signupForm.hasError(\'mismatchedPasswords\')">\n           <span class="small"><p style="color:red;"> Passwords do not match.</p></span>\n         </ion-item>\n             \n\n		 <ion-row responsive-sm>\n		  <ion-col >\n			  <button class="button-backcolor" ion-button (click)="onSignup()"  [disabled]="!signupForm.valid" type="submit" block>Create</button>\n				\n		  </ion-col>\n			</ion-row>\n			<hr>\n			<ion-row>\n				<ion-col text-center  style="font-size: 0.9em; color: #bdbdbd;">\n					Already a member? <a class="button-color" (click)="onLogin()" style="font-size: 12px;">Login</a>\n				</ion-col>\n			</ion-row>\n		</ion-list>\n\n\n	</form>\n\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_setup_service__["a" /* SetupService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, platform, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        var backAction = platform.registerBackButtonAction(function () {
            var netStatus = localStorage.getItem('NetworkStatus');
            if (netStatus == "offline") {
                _this.navCtrl.pop();
                backAction();
            }
        }, 2);
        this.componentName = this.navCtrl.getActive().name;
        localStorage.setItem('cmpName', this.componentName);
        this.toster();
    }
    HomePage.prototype.toster = function () {
        var toast = this.toastCtrl.create({
            message: "No internet conection!!",
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 5000
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    \n    <ion-title>Network Info</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n\n<span style="position: absolute;display: block;height: 100px;top: 50%;margin-top: -50px;text-align: center;font-size: 20px;padding: 1%;">No internet conection,\nplease connect with your network.</span>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_product_product__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SetupService } from '../../services/setup.service'



/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = (function () {
    function DashboardPage(network, navCtrl, barcodeScanner, alertCtrl, toastCtrl, loadingCtrl) {
        this.network = network;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    DashboardPage.prototype.ownershipQrScanner = function () {
        var _this = this;
        //this.navCtrl.push(ProductPage, { 'getOwnproductId': 'Activa-i4','getOwnstremKey': 'keyActiva-i402'});
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.hexa3a(barcodeData.text);
        });
    };
    DashboardPage.prototype.hexa3a = function (data) {
        var strKey = data;
        var status = this.isHex(strKey);
        if (status) {
            if (strKey) {
                this.hex2a(strKey); //found hex avaliable in string
            }
            else {
                var toast = this.toastCtrl.create({
                    message: "somthing went wrong!!",
                    showCloseButton: true,
                    closeButtonText: 'Ok',
                    duration: 5000
                });
                toast.present();
            }
        }
    };
    DashboardPage.prototype.isHex = function (typeString) {
        var a = typeString;
        var regExp = /^[-+]?[0-9A-Fa-f]+\.?[0-9A-Fa-f]*?$/;
        var regex = /^[0-9]+$/;
        if (regex.test(a)) {
            var toast = this.toastCtrl.create({
                message: "somthing went wrong  !!",
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 5000
            });
            toast.present();
            return false;
        }
        if (typeof a === 'string' && regExp.test(a)) {
            return true;
        }
    };
    DashboardPage.prototype.hex2a = function (a) {
        var haxKey = a;
        var type = typeof (haxKey);
        var hex = haxKey.toString(); //force conversion
        var str = '';
        for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2) {
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            str;
        }
        this.selectedProduct = str;
        if (this.selectedProduct) {
            var data = JSON.parse(this.selectedProduct);
            if (typeof (data) == "object") {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_product_product__["a" /* ProductPage */], { 'getOwnproductId': data.productName, 'getOwnstremKey': data.productKeyName });
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'somthing went wrong',
                showCloseButton: true,
                closeButtonText: 'Ok',
                duration: 5000
            });
            toast.present();
        }
    };
    DashboardPage.prototype.enterCode = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Get Product Info',
            inputs: [
                // {          
                //   name: 'proName',
                //   type: 'text',
                //   placeholder: 'enter product name',         
                // },
                {
                    name: 'strKey',
                    type: 'text',
                    placeholder: 'enter  key',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'submit',
                    handler: function (data) {
                        var strKey = data.strKey;
                        var status = _this.isHex(strKey);
                        if (status) {
                            if (strKey) {
                                _this.hex2a(strKey); //found hex avaliable in string
                            }
                            else {
                                var toast = _this.toastCtrl.create({
                                    message: "field should be required!!",
                                    showCloseButton: true,
                                    closeButtonText: 'Ok',
                                    duration: 5000
                                });
                                toast.present();
                            }
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: "somthing went wrong!!",
                                showCloseButton: true,
                                closeButtonText: 'Ok',
                                duration: 5000
                            });
                            toast.present();
                        }
                        //return false;
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        prompt.present();
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        // this.network.onConnect().subscribe(data => {
        // }, error => console.error(error));
        // this.network.onDisconnect().subscribe(data => {
        //   let alert = this.alertCtrl.create({
        //     title: 'Network was disconnected :-(',
        //     subTitle: 'Please check your connection. And try again',
        //     buttons: ['OK']
        //   });
        //   alert.present();
        // }, error => console.error(error));
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/dashboard/dashboard.html"*/`\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding-top center>\n <img padding-top style="width:100px;padding-top: 80px;" src="assets/img/digiholo-logo.png"><br>\n <img padding-top style="width:100px" src="assets/img/drop-img.png "><br>\n  <ion-grid padding-top margin-top>\n    <ion-row padding-top>\n       \n        <div class="home-button" (click)="ownershipQrScanner()">\n          <img padding-top padding-bottom style="width:30px" src="assets/img/gray_qr.png"><br>Scan QR\n        </div>\n        <div class="home-button" (click)="enterCode()">\n          <img padding-top padding-bottom style="width:30px" src="assets/img/gray_enter.png"><br>Enter\n        </div>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 372,
	"./af.js": 372,
	"./ar": 373,
	"./ar-dz": 374,
	"./ar-dz.js": 374,
	"./ar-kw": 375,
	"./ar-kw.js": 375,
	"./ar-ly": 376,
	"./ar-ly.js": 376,
	"./ar-ma": 377,
	"./ar-ma.js": 377,
	"./ar-sa": 378,
	"./ar-sa.js": 378,
	"./ar-tn": 379,
	"./ar-tn.js": 379,
	"./ar.js": 373,
	"./az": 380,
	"./az.js": 380,
	"./be": 381,
	"./be.js": 381,
	"./bg": 382,
	"./bg.js": 382,
	"./bm": 383,
	"./bm.js": 383,
	"./bn": 384,
	"./bn.js": 384,
	"./bo": 385,
	"./bo.js": 385,
	"./br": 386,
	"./br.js": 386,
	"./bs": 387,
	"./bs.js": 387,
	"./ca": 388,
	"./ca.js": 388,
	"./cs": 389,
	"./cs.js": 389,
	"./cv": 390,
	"./cv.js": 390,
	"./cy": 391,
	"./cy.js": 391,
	"./da": 392,
	"./da.js": 392,
	"./de": 393,
	"./de-at": 394,
	"./de-at.js": 394,
	"./de-ch": 395,
	"./de-ch.js": 395,
	"./de.js": 393,
	"./dv": 396,
	"./dv.js": 396,
	"./el": 397,
	"./el.js": 397,
	"./en-au": 398,
	"./en-au.js": 398,
	"./en-ca": 399,
	"./en-ca.js": 399,
	"./en-gb": 400,
	"./en-gb.js": 400,
	"./en-ie": 401,
	"./en-ie.js": 401,
	"./en-il": 402,
	"./en-il.js": 402,
	"./en-nz": 403,
	"./en-nz.js": 403,
	"./eo": 404,
	"./eo.js": 404,
	"./es": 405,
	"./es-do": 406,
	"./es-do.js": 406,
	"./es-us": 407,
	"./es-us.js": 407,
	"./es.js": 405,
	"./et": 408,
	"./et.js": 408,
	"./eu": 409,
	"./eu.js": 409,
	"./fa": 410,
	"./fa.js": 410,
	"./fi": 411,
	"./fi.js": 411,
	"./fo": 412,
	"./fo.js": 412,
	"./fr": 413,
	"./fr-ca": 414,
	"./fr-ca.js": 414,
	"./fr-ch": 415,
	"./fr-ch.js": 415,
	"./fr.js": 413,
	"./fy": 416,
	"./fy.js": 416,
	"./gd": 417,
	"./gd.js": 417,
	"./gl": 418,
	"./gl.js": 418,
	"./gom-latn": 419,
	"./gom-latn.js": 419,
	"./gu": 420,
	"./gu.js": 420,
	"./he": 421,
	"./he.js": 421,
	"./hi": 422,
	"./hi.js": 422,
	"./hr": 423,
	"./hr.js": 423,
	"./hu": 424,
	"./hu.js": 424,
	"./hy-am": 425,
	"./hy-am.js": 425,
	"./id": 426,
	"./id.js": 426,
	"./is": 427,
	"./is.js": 427,
	"./it": 428,
	"./it.js": 428,
	"./ja": 429,
	"./ja.js": 429,
	"./jv": 430,
	"./jv.js": 430,
	"./ka": 431,
	"./ka.js": 431,
	"./kk": 432,
	"./kk.js": 432,
	"./km": 433,
	"./km.js": 433,
	"./kn": 434,
	"./kn.js": 434,
	"./ko": 435,
	"./ko.js": 435,
	"./ky": 436,
	"./ky.js": 436,
	"./lb": 437,
	"./lb.js": 437,
	"./lo": 438,
	"./lo.js": 438,
	"./lt": 439,
	"./lt.js": 439,
	"./lv": 440,
	"./lv.js": 440,
	"./me": 441,
	"./me.js": 441,
	"./mi": 442,
	"./mi.js": 442,
	"./mk": 443,
	"./mk.js": 443,
	"./ml": 444,
	"./ml.js": 444,
	"./mn": 445,
	"./mn.js": 445,
	"./mr": 446,
	"./mr.js": 446,
	"./ms": 447,
	"./ms-my": 448,
	"./ms-my.js": 448,
	"./ms.js": 447,
	"./mt": 449,
	"./mt.js": 449,
	"./my": 450,
	"./my.js": 450,
	"./nb": 451,
	"./nb.js": 451,
	"./ne": 452,
	"./ne.js": 452,
	"./nl": 453,
	"./nl-be": 454,
	"./nl-be.js": 454,
	"./nl.js": 453,
	"./nn": 455,
	"./nn.js": 455,
	"./pa-in": 456,
	"./pa-in.js": 456,
	"./pl": 457,
	"./pl.js": 457,
	"./pt": 458,
	"./pt-br": 459,
	"./pt-br.js": 459,
	"./pt.js": 458,
	"./ro": 460,
	"./ro.js": 460,
	"./ru": 461,
	"./ru.js": 461,
	"./sd": 462,
	"./sd.js": 462,
	"./se": 463,
	"./se.js": 463,
	"./si": 464,
	"./si.js": 464,
	"./sk": 465,
	"./sk.js": 465,
	"./sl": 466,
	"./sl.js": 466,
	"./sq": 467,
	"./sq.js": 467,
	"./sr": 468,
	"./sr-cyrl": 469,
	"./sr-cyrl.js": 469,
	"./sr.js": 468,
	"./ss": 470,
	"./ss.js": 470,
	"./sv": 471,
	"./sv.js": 471,
	"./sw": 472,
	"./sw.js": 472,
	"./ta": 473,
	"./ta.js": 473,
	"./te": 474,
	"./te.js": 474,
	"./tet": 475,
	"./tet.js": 475,
	"./tg": 476,
	"./tg.js": 476,
	"./th": 477,
	"./th.js": 477,
	"./tl-ph": 478,
	"./tl-ph.js": 478,
	"./tlh": 479,
	"./tlh.js": 479,
	"./tr": 480,
	"./tr.js": 480,
	"./tzl": 481,
	"./tzl.js": 481,
	"./tzm": 482,
	"./tzm-latn": 483,
	"./tzm-latn.js": 483,
	"./tzm.js": 482,
	"./ug-cn": 484,
	"./ug-cn.js": 484,
	"./uk": 485,
	"./uk.js": 485,
	"./ur": 486,
	"./ur.js": 486,
	"./uz": 487,
	"./uz-latn": 488,
	"./uz-latn.js": 488,
	"./uz.js": 487,
	"./vi": 489,
	"./vi.js": 489,
	"./x-pseudo": 490,
	"./x-pseudo.js": 490,
	"./yo": 491,
	"./yo.js": 491,
	"./zh-cn": 492,
	"./zh-cn.js": 492,
	"./zh-hk": 493,
	"./zh-hk.js": 493,
	"./zh-tw": 494,
	"./zh-tw.js": 494
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 847;

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TutorialPage = (function () {
    function TutorialPage(userData, navCtrl, toastCtrl, events, menuCtrl, navParams, _setupService, loadingCtrl, menu, storage) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
        this.login1 = { username: '', password: '' };
        this.loginDetail = { email: '', password: '', lat: '', long: '' };
        this.submitted = false;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(false);
    };
    TutorialPage.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.loginDetail.lat = position.coords.latitude;
                _this.loginDetail.long = position.coords.longitude;
            });
        }
    };
    TutorialPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
        this.storage.set('hasSeenTutorial', 'true');
    };
    TutorialPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
        this.storage.set('hasSeenTutorial', 'true');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/tutorial/tutorial.html"*/`<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n    <ion-slide>\n      <img src="assets/img/wireme-intro-1.jpg"  style="width: 100%;height: 100%" />\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/wireme-intro-2.jpg" style="width: 100%;height: 100%" />\n    <div style="position: fixed;z-index: 1;margin-top: -45px;margin-left:323px;color: #fff" (click)="startApp()">\n         Next &nbsp;<ion-icon name="arrow-forward"  ></ion-icon>\n       </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, toastCtrl, menuCtrl, alertCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.submitted = false;
        this.newPasswordvalue = { userMailId: '', newPassword: '', confirmNewPassword: '' };
        this.userdata();
    }
    ChangepasswordPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('ResponseData'));
        this.newPasswordvalue.userMailId = this.user.userMailId;
    };
    ChangepasswordPage.prototype.changecurrentPassword = function (form) {
        // alert("this.newPasswordvalue "+this.newPasswordvalue.userMailId);
        //     alert("this.newPasswordvalue "+this.newPasswordvalue.newPassword);
        //         alert("this.newPasswordvalue "+this.newPasswordvalue.confirmNewPassword);
        this.submitted = true;
        if (form.valid) {
            var loading = this.loadingCtrl.create({
                content: 'updating current password...'
            });
            loading.present();
            // this._setupService.updateForgotPassord(this.newPasswordvalue).subscribe((response) => { 
            //    if(response.statusCode==200){
            //       loading.dismiss();
            //      let toast = this.toastCtrl.create({
            //                   message: 'Password update successfully',
            //                   showCloseButton: true,
            //                   closeButtonText: 'Ok',
            //                   duration: 5000
            //              });
            //              toast.present();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            //            }else{
            //               loading.dismiss();
            //              let toast = this.toastCtrl.create({
            //                   message: response.message,
            //                   showCloseButton: true,
            //                   closeButtonText: 'Ok',
            //                   duration: 5000
            //              });
            //              toast.present(); 
            //            }
            //  });
        }
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/changepassword/changepassword.html"*/`<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Change Password</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	\n\n	<form #changePasswordForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">New Password</ion-label>\n				<ion-input [(ngModel)]="newPasswordvalue.newPassword" placeholder="enter new password"name="fullName" type="text" #fullName="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="fullName.valid || submitted == false" color="danger" padding-left>\n				new password is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Confirm New Password</ion-label>\n				<ion-input [(ngModel)]="newPasswordvalue.confirmNewPassword" placeholder="enter confirm new password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				confirm new password is required\n			</p>\n		</ion-list>\n		<div padding>\n			<button ion-button (click)="changecurrentPassword(changePasswordForm)" type="submit" block>submit</button>\n		</div>\n	</form>\n\n</ion-content>\n\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, alertCtrl, toastCtrl, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
        this.verifyEmail = false;
        this.userEmail = { email: '' };
        this.passwordValue = { "userMailId": "", "currentPassword": "", "newPassword": "", "confirmNewPassword": "" };
        this.otpvalues = { "email": "", "otp": "" };
        this.userdata();
        //this.verifyEmail=false;        
    }
    SettingPage.prototype.userdata = function () {
        this.user = JSON.parse(localStorage.getItem('logindetail'));
        if (this.user != null || this.user != undefined) {
            this.userEmail.email = this.user.trader.email;
            this.verifyEmail = this.user.trader.verifyEmail;
        }
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/setting/setting.html"*/`<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	 <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div padding-top text-center >\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n\n    <ion-list inset>   	 \n          \n          <span style="margin-right: 259px !important;" > <strong>Account verify</strong></span>\n          <br>{{userEmail.email}}\n          <span (click)="veryfyEmail(userEmail.email)" class="pull-left red-text" *ngIf="verifyEmail==false"> Not Verified</span>\n          <span class="pull-right green-text" *ngIf="verifyEmail==true"> Verified</span><hr>        \n          <button ion-item (click)="changeCurrentPassword()">Change Password</button><hr> \n \n    </ion-list>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_setup_services__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SetupService = (function () {
    function SetupService(http) {
        this.http = http;
        this.endpoint_url = 'http://198.187.28.200:3000';
        this.http = http;
        console.log('Hello ServicesProvider Provider');
    }
    // endpoint_url: string = 'http://192.168.1.20:3000';
    //create new user account
    SetupService.prototype.createUserAccount = function (SignUpDetail) {
        var response = this.http.post(this.endpoint_url + '/trader/createNewTrader', SignUpDetail).map(function (res) { return res.json(); });
        return response;
    };
    // verify email
    SetupService.prototype.VerificationEmail = function (otpDetail) {
        var response = this.http.post(this.endpoint_url + '/trader/verifyEmailAddress', otpDetail).map(function (res) { return res.json(); });
        return response;
    };
    //sent Otp To Email Verificatation
    SetupService.prototype.EmailVerifyforAccount = function (email) {
        var response = this.http.post(this.endpoint_url + '/trader/sentOtpToEmailVerificatation', email).map(function (res) { return res.json(); });
        return response;
    };
    // create login
    SetupService.prototype.createLoginDetail = function (loginDetail) {
        var response = this.http.post(this.endpoint_url + '/trader/login', loginDetail).map(function (res) { return res.json(); });
        return response;
    };
    // update current passeword
    SetupService.prototype.changecurrentpasswords = function (values) {
        var response = this.http.post(this.endpoint_url + '/trader/updateCurrentPassword', values).map(function (res) { return res.json(); });
        return response;
    };
    // update current location
    SetupService.prototype.sentLocation = function (position) {
        var response = this.http.post(this.endpoint_url + '/trader/updatelocation', position).map(function (res) { return res.json(); });
        return response;
    };
    // get buy data
    SetupService.prototype.getBuydata = function () {
        var response = this.http.get(this.endpoint_url + '/trader/getRates').map(function (res) { return res.json(); });
        return response;
    };
    //update price
    SetupService.prototype.updateprice = function (values) {
        var response = this.http.post(this.endpoint_url + '/trader/buysellupdate', values).map(function (res) { return res.json(); });
        return response;
    };
    //update  Acceptance
    SetupService.prototype.updateAcceptance = function (userId) {
        var response = this.http.get(this.endpoint_url + '/chat/updateAcceptance', userId).map(function (res) { return res.json(); });
        return response;
    };
    // get chat messages
    SetupService.prototype.getChatMessages = function (chatId) {
        var response = this.http.post(this.endpoint_url + '/chat/getChatMessages', chatId).map(function (res) { return res.json(); });
        return response;
    };
    //send message to traders
    SetupService.prototype.sendMessage = function (messageDetail) {
        var response = this.http.post(this.endpoint_url + '/chat/sendMessage', messageDetail).map(function (res) { return res.json(); });
        return response;
    };
    //get friends list
    SetupService.prototype.getfrienlist = function (emailId) {
        var response = this.http.post(this.endpoint_url + '/chat/getTradersForUser', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getUserChats = function (emailId) {
        var response = this.http.get(this.endpoint_url + '/chat/getUserChats', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPassword = function (userDetail) {
        var response = this.http.post(this.endpoint_url + '/trader/sentOtpToEmailForgotPassword', userDetail).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.forgotPasswordOTP = function (otp) {
        var response = this.http.post(this.endpoint_url + '/trader/verifyOtpToEmailForgotPassord', otp).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.updateForgotPassord = function (newpasswordvalues) {
        var response = this.http.post(this.endpoint_url + '/trader/updateForgotPassordAfterVerify', newpasswordvalues).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.acceptRequest = function (data) {
        var response = this.http.post(this.endpoint_url + '/chat/updateAcceptance', data).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.rejectRequest = function (data) {
        var response = this.http.post(this.endpoint_url + '/chat/updateAcceptance', data).map(function (res) { return res.json(); });
        return response;
    };
    SetupService.prototype.getTraderInfo = function (emailId) {
        var response = this.http.post(this.endpoint_url + '/trader/getTraderInfo', emailId).map(function (res) { return res.json(); });
        return response;
    };
    SetupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SetupService);
    return SetupService;
}());

//# sourceMappingURL=setup.services.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShrinkingSegmentHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShrinkingSegmentHeader = (function () {
    function ShrinkingSegmentHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ShrinkingSegmentHeader.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollArea.ionScroll.subscribe(function (ev) {
            _this.resizeHeader(ev);
        });
    };
    ShrinkingSegmentHeader.prototype.resizeHeader = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.newHeaderHeight = _this.headerHeight - ev.scrollTop;
            if (_this.newHeaderHeight < 0) {
                _this.newHeaderHeight = 0;
            }
            _this.renderer.setElementStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('scrollArea'),
        __metadata("design:type", Object)
    ], ShrinkingSegmentHeader.prototype, "scrollArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('headerHeight'),
        __metadata("design:type", Number)
    ], ShrinkingSegmentHeader.prototype, "headerHeight", void 0);
    ShrinkingSegmentHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shrinking-segment-header',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/components/shrinking-segment-header/shrinking-segment-header.html"*/`<!-- Generated template for the ShrinkingSegmentHeaderComponent component -->\n\n<div>\n\n  {{text}}\n\n</div>\n\n<ng-content></ng-content>\n\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/components/shrinking-segment-header/shrinking-segment-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ShrinkingSegmentHeader);
    return ShrinkingSegmentHeader;
}());

//# sourceMappingURL=shrinking-segment-header.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutappPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutappPage = (function () {
    function AboutappPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutappPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutappPage');
    };
    AboutappPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutapp',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/aboutapp/aboutapp.html"*/`<!--\n  Generated template for the AboutappPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar>\n       <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-row>\n               <b> Please provide details of the about as</b>           \n            </ion-row>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/aboutapp/aboutapp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AboutappPage);
    return AboutappPage;
}());

//# sourceMappingURL=aboutapp.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_setup_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_reportapp_modal_reportapp_modal__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, modalCtrl, actionSheetCtrl, toastCtrl, platform, navParams, _setupService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this._setupService = _setupService;
        this.loadingCtrl = loadingCtrl;
    }
    HelpPage.prototype.appReportPage = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_reportapp_modal_reportapp_modal__["a" /* ReportappModalPage */], {
            'prop': 'prop1',
            onFeedBack: function (data) {
                //  console.log('Input callback' + JSON.stringify(data));
            }
        });
        modal.onDidDismiss(function (data) {
            //console.log('Closed with data:' + JSON.stringify(data));
        });
        modal.present().then(function (result) {
            // modal.overlay['subscribe']((z) => {
            //   console.log(JSON.stringify(z));
            // })
            // const testComp = modal.overlay['instance'] as ReportappModalPage;
            // testComp.feedbackSubmit.subscribe(() => {
            //   alert(1);
            // })
        });
    };
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/help/help.html"*/`<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-navbar>\n       <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n            <ion-row>\n                <ion-icon name="more" (click)="appReportPage()"></ion-icon>              \n            </ion-row>\n</ion-content>\n`/*ion-inline-end:"/home/pankaj/Documents/digiholoFrontEnd/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__services_setup_service__["a" /* SetupService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ })

},[515]);
//# sourceMappingURL=main.js.map