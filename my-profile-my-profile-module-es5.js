(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-profile/my-profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"mp-toolbar-color\" >\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"pull-left\" (click)=\"goBack()\">\r\n          <ion-icon color=\"light\" name=\"ios-arrow-back\"  ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <div>\r\n        <ion-title color=\"light\" class=\"mp-text-size-16\">My Profile</ion-title>\r\n      </div>\r\n    </ion-toolbar>\r\n \r\n   </ion-header>\r\n \r\n\r\n<ion-content>\r\n    <div class=\"mp-myprofile-background\">\r\n        <ion-list class=\"mp-padding-right-20\">\r\n\r\n            <ion-item color= \"transparent\" >\r\n                <ion-label  class=\"mp-text-size-12 mp-text-align-center\" color=\"dark\">Account Info</ion-label>\r\n            </ion-item>\r\n           <ion-item  color= \"transparent\" >\r\n                  <ion-label text-wrap class=\" mp-text-size-12 mp-text-align-start\" color=\"dark\" >Name</ion-label>\r\n                  <ion-label class=\" mp-text-size-12 mp-text-align-end\"color=\"dark\"> Rocky Bhai</ion-label>\r\n           </ion-item>\r\n           <ion-item color= \"transparent\">\r\n                <ion-label color=\"dark\" text-wrap class=\" mp-text-size-12 mp-text-align-start\">Password</ion-label>\r\n                <ion-label color=\"secondary\"  text-wrap class=\" mp-text-size-12 mp-text-align-end\"> Update ></ion-label>\r\n            </ion-item>\r\n\r\n\r\n            <ion-item color= \"transparent\" >\r\n                <ion-label text-wrap class=\"mp-padding-top-20 mp-text-size-12 mp-text-align-center\" color=\"dark\" >Contact Info</ion-label>\r\n            </ion-item>\r\n           <ion-item  color= \"transparent\" >\r\n                  <ion-label text-wrap class=\" mp-text-size-12 mp-text-align-start\" color=\"dark\" >Email</ion-label>\r\n                  <ion-label  class=\" mp-text-size-12 mp-text-align-end\" color=\"dark\"> Rockybhai@gmail.com</ion-label>\r\n           </ion-item>\r\n           <ion-item  color= \"transparent\" >\r\n              <ion-label text-wrap class=\" mp-text-size-12 mp-text-align-start\" color=\"dark\" >Phone</ion-label>\r\n              <ion-label class=\" mp-text-size-12 mp-text-align-end\"color=\"dark\"> (+1)6457382901</ion-label>\r\n          </ion-item>\r\n           <ion-item color= \"transparent\">\r\n                <ion-label color=\"dark\" text-wrap class=\" mp-text-size-12 mp-text-align-start\">Residential Address</ion-label>\r\n                <ion-label color=\"secondary\"  text-wrap class=\" mp-text-size-12 mp-text-align-end\"> View ></ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item color= \"transparent\">\r\n                <ion-label color=\"dark\" text-wrap class=\" mp-text-size-12 mp-text-align-start\">Mailing Address</ion-label>\r\n                <ion-label color=\"secondary\"  text-wrap class=\" mp-text-size-12 mp-text-align-end\"> View ></ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n        \r\n        <p class=\"ion-text-center  mp-text-size-10\">\r\n            <ion-text color= \"dark\"> Need help? </ion-text>\r\n            <ion-text color=\"secondary\">Contact mBank</ion-text>\r\n          </p>\r\n      </div>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/my-profile/my-profile.page.ts");







var routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]
    }
];
var MyProfilePageModule = /** @class */ (function () {
    function MyProfilePageModule() {
    }
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
    return MyProfilePageModule;
}());



/***/ }),

/***/ "./src/app/my-profile/my-profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mp-myprofile-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.mp-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.mp-bg-transparent {\n  background: transparent;\n  color: #001e65;\n}\n\n.mp-text-size-10 {\n  font-size: 10px;\n}\n\n.mp-text-size-12 {\n  font-size: 12px;\n}\n\n.mp-text-size-16 {\n  font-size: 16px;\n}\n\n.mp-text-align-end {\n  text-align: end;\n}\n\n.mp-text-align-start {\n  text-align: start;\n}\n\n.mp-text-align-center {\n  text-align: center;\n}\n\n.mp-padding-right-20 {\n  padding-right: 20px;\n}\n\n.mp-padding-top-20 {\n  padding-top: 20px;\n}\n\n.mp-align-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 25px;\n  right: 0;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\nion-button {\n  --border-width: 1px!important;\n  font-size: 0.7em;\n  --border-radius:0px;\n  width: 88%;\n  text-transform: capitalize;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZmlsZS9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxcbXktcHJvZmlsZVxcbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtDQUFBO0FDRUo7O0FEQUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7QUNPSjs7QURKQTtFQUNJLGlCQUFBO0FDT0o7O0FESkE7RUFDSSxrQkFBQTtBQ09KOztBRExBO0VBQ0ksbUJBQUE7QUNRSjs7QUROQTtFQUNJLGlCQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDVUo7O0FEUkE7RUFDSSx3Q0FBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtBQ1lKOztBRFZBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDYUE7O0FEWEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNjSiIsImZpbGUiOiJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXAtbXlwcm9maWxlLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLm1wLXRvb2xiYXItY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5tcC1iZy10cmFuc3BhcmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMDAxZTY1O1xyXG4gIH1cclxuLm1wLXRleHQtc2l6ZS0xMHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4ubXAtdGV4dC1zaXplLTEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5tcC10ZXh0LXNpemUtMTZ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLm1wLXRleHQtYWxpZ24tZW5ke1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG5cclxufVxyXG4ubXAtdGV4dC1hbGlnbi1zdGFydHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cclxufVxyXG4ubXAtdGV4dC1hbGlnbi1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1wLXBhZGRpbmctcmlnaHQtMjB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4XHJcbn1cclxuLm1wLXBhZGRpbmctdG9wLTIwe1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHhcclxufVxyXG4ubXAtYWxpZ24tYm90dG9tIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICBjb2xvcjpncmF5O1xyXG59XHJcbmlvbi1idXR0b257XHJcbi0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xyXG5mb250LXNpemU6IDAuN2VtO1xyXG4tLWJvcmRlci1yYWRpdXM6MHB4O1xyXG53aWR0aDo4OCU7XHJcbnRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiA1JTtcclxufSIsIi5tcC1teXByb2ZpbGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tcC10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLm1wLWJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMDAxZTY1O1xufVxuXG4ubXAtdGV4dC1zaXplLTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubXAtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubXAtdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubXAtdGV4dC1hbGlnbi1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5tcC10ZXh0LWFsaWduLXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5tcC10ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1wLXBhZGRpbmctcmlnaHQtMjAge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubXAtcGFkZGluZy10b3AtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLm1wLWFsaWduLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAyNXB4O1xuICByaWdodDogMDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItd2lkdGg6IDFweCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIC0tYm9yZGVyLXJhZGl1czowcHg7XG4gIHdpZHRoOiA4OCU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1JTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    MyProfilePage.prototype.ngOnInit = function () {
    };
    MyProfilePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    MyProfilePage.prototype.goBack = function () {
        this.navCtrl.navigateBack('mysettings');
    };
    MyProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! raw-loader!./my-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.page.html"),
            styles: [__webpack_require__(/*! ./my-profile.page.scss */ "./src/app/my-profile/my-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], MyProfilePage);
    return MyProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=my-profile-my-profile-module-es5.js.map