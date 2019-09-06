(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-profile/my-profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar class=\"mp-toolbar-color\" >\n      <ion-buttons slot=\"start\">\n        <ion-button class=\"pull-left\" (click)=\"goBack()\">\n          <ion-icon color=\"light\" name=\"ios-arrow-back\"  ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <div>\n        <ion-title color=\"light\" class=\"mp-text-size-12\">My Profile</ion-title>\n      </div>\n    </ion-toolbar>\n \n   </ion-header>\n \n\n<ion-content>\n    <div class=\"mp-myprofile-background\">\n        <ion-list class=\"mp-padding-right-20\">\n\n            <ion-item color= \"transparent\" >\n                <ion-label  class=\"mp-text-size-12 mp-text-align-center\" color=\"dark\">Account Info</ion-label>\n            </ion-item>\n           <ion-item  color= \"transparent\" >\n                  <ion-label text-wrap class=\" mp-text-size-12 mp-text-align-start\" color=\"dark\" >Name</ion-label>\n                  <ion-label class=\" mp-text-size-12 mp-text-align-end\"color=\"dark\"> Rocky Bhai</ion-label>\n           </ion-item>\n           <ion-item color= \"transparent\">\n                <ion-label color=\"dark\" text-wrap class=\" mp-text-size-12 mp-text-align-start\">Password</ion-label>\n                <ion-label color=\"secondary\"  text-wrap class=\" mp-text-size-12 mp-text-align-end\"> Update ></ion-label>\n            </ion-item>\n\n\n            <ion-item color= \"transparent\" >\n                <ion-label text-wrap class=\"mp-padding-top-20 mp-text-size-12 mp-text-align-center\" color=\"dark\" >Contact Info</ion-label>\n            </ion-item>\n           <ion-item  color= \"transparent\" >\n                  <ion-label text-wrap class=\" mp-text-size-12 mp-text-align-start\" color=\"dark\" >Email</ion-label>\n                  <ion-label  class=\" mp-text-size-12 mp-text-align-end\" color=\"dark\"> Rockybhai@gmail.com</ion-label>\n           </ion-item>\n           <ion-item  color= \"transparent\" >\n              <ion-label text-wrap class=\" mp-text-size-12 mp-text-align-start\" color=\"dark\" >Phone</ion-label>\n              <ion-label class=\" mp-text-size-12 mp-text-align-end\"color=\"dark\"> (+1)6457382901</ion-label>\n          </ion-item>\n           <ion-item color= \"transparent\">\n                <ion-label color=\"dark\" text-wrap class=\" mp-text-size-12 mp-text-align-start\">Residential Address</ion-label>\n                <ion-label color=\"secondary\"  text-wrap class=\" mp-text-size-12 mp-text-align-end\"> View ></ion-label>\n            </ion-item>\n\n            <ion-item color= \"transparent\">\n                <ion-label color=\"dark\" text-wrap class=\" mp-text-size-12 mp-text-align-start\">Mailing Address</ion-label>\n                <ion-label color=\"secondary\"  text-wrap class=\" mp-text-size-12 mp-text-align-end\"> View ></ion-label>\n            </ion-item>\n        </ion-list>\n        \n        <p class=\"ion-text-center  mp-text-size-10\">\n            <ion-text color= \"dark\"> Need help? </ion-text>\n            <ion-text color=\"secondary\">Contact Velo</ion-text>\n          </p>\n      </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/my-profile/my-profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.module.ts ***!
  \*************************************************/
/*! exports provided: MyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/my-profile/my-profile.page.ts");







const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]
    }
];
let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]]
    })
], MyProfilePageModule);



/***/ }),

/***/ "./src/app/my-profile/my-profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mp-myprofile-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.mp-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.mp-bg-transparent {\n  background: transparent;\n  color: #001e65;\n}\n\n.mp-text-size-10 {\n  font-size: 10px;\n}\n\n.mp-text-size-12 {\n  font-size: 12px;\n}\n\n.mp-text-align-end {\n  text-align: end;\n}\n\n.mp-text-align-start {\n  text-align: start;\n}\n\n.mp-text-align-center {\n  text-align: center;\n}\n\n.mp-padding-right-20 {\n  padding-right: 20px;\n}\n\n.mp-padding-top-20 {\n  padding-top: 20px;\n}\n\n.mp-align-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 25px;\n  right: 0;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\nion-button {\n  --border-width: 1px!important;\n  font-size: 0.7em;\n  --border-radius:0px;\n  width: 88%;\n  text-transform: capitalize;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0NBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtBQ01KOztBREhBO0VBQ0ksaUJBQUE7QUNNSjs7QURIQTtFQUNJLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxtQkFBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7QUNRSjs7QUROQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUNTSjs7QURQQTtFQUNJLHdDQUFBO0FDVUo7O0FEUkE7RUFDSSxXQUFBO0FDV0o7O0FEVEE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNZQTs7QURWQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tcC1teXByb2ZpbGUtYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tcC10b29sYmFyLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG4ubXAtYmctdHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjMDAxZTY1O1xuICB9XG4ubXAtdGV4dC1zaXplLTEwe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tcC10ZXh0LXNpemUtMTJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1wLXRleHQtYWxpZ24tZW5ke1xuICAgIHRleHQtYWxpZ246IGVuZDtcblxufVxuLm1wLXRleHQtYWxpZ24tc3RhcnR7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG5cbn1cbi5tcC10ZXh0LWFsaWduLWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubXAtcGFkZGluZy1yaWdodC0yMHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4XG59XG4ubXAtcGFkZGluZy10b3AtMjB7XG4gICAgcGFkZGluZy10b3A6IDIwcHhcbn1cbi5tcC1hbGlnbi1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICByaWdodDogMDtcbn1cbmlvbi1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbn1cbmlvbi1pdGVtIHtcbiAgICBjb2xvcjpncmF5O1xufVxuaW9uLWJ1dHRvbntcbi0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xuZm9udC1zaXplOiAwLjdlbTtcbi0tYm9yZGVyLXJhZGl1czowcHg7XG53aWR0aDo4OCU7XG50ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbmlvbi10aXRsZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDUlO1xufSIsIi5tcC1teXByb2ZpbGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tcC10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLm1wLWJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMDAxZTY1O1xufVxuXG4ubXAtdGV4dC1zaXplLTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubXAtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubXAtdGV4dC1hbGlnbi1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5tcC10ZXh0LWFsaWduLXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5tcC10ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1wLXBhZGRpbmctcmlnaHQtMjAge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubXAtcGFkZGluZy10b3AtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLm1wLWFsaWduLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAyNXB4O1xuICByaWdodDogMDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItd2lkdGg6IDFweCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIC0tYm9yZGVyLXJhZGl1czowcHg7XG4gIHdpZHRoOiA4OCU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/my-profile/my-profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-profile/my-profile.page.ts ***!
  \***********************************************/
/*! exports provided: MyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePage", function() { return MyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let MyProfilePage = class MyProfilePage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    goBack() {
        this.navCtrl.navigateBack('mysettings');
    }
};
MyProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: __webpack_require__(/*! raw-loader!./my-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.page.html"),
        styles: [__webpack_require__(/*! ./my-profile.page.scss */ "./src/app/my-profile/my-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], MyProfilePage);



/***/ })

}]);
//# sourceMappingURL=my-profile-my-profile-module-es2015.js.map