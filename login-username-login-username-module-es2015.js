(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-username-login-username-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-username/login-username.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-username/login-username.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar color=\"light\">\n      <ion-buttons slot=\"start\">\n        <ion-button class=\"pull-left\" (click)=\"goToHome()\">\n          <ion-icon color=\"dark\" name=\"arrow-back\" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <div>\n        <ion-title  color=\"dark\" class=\"tp-text-size-12\"></ion-title>\n      </div>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"openManageAccounts()\" class=\"pull-right\">\n          <ion-icon color=\"dark\" name=\"md-more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n    <ion-grid style=\"width: 100%; height:100%\">\n        <ion-col>\n          <ion-row style=\"height: 50%; width: 100%\">\n            <img   style=\"display: block; margin:auto\" src=\"/assets/brillio.png\" alt=\"\" />\n          </ion-row>\n          \n          <p></p>\n          <p></p>\n    \n          <div class=\"dims\">\n              <ion-text class=\"hw\" text-center>Enter your Username</ion-text>\n              <ion-input class=\"hw\" type=\"text\" placeholder=\"Username\"></ion-input>\n              <ion-button style=\"margin:5px\"class=\"hw\" expand = \"block\" text-center (click)=\"goToPaswordPage()\">Continue</ion-button>\n          </div>\n    \n        </ion-col>\n      </ion-grid>\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/login-username/login-username.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/login-username/login-username.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginUsernamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUsernamePageModule", function() { return LoginUsernamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_username_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-username.page */ "./src/app/login-username/login-username.page.ts");







const routes = [
    {
        path: '',
        component: _login_username_page__WEBPACK_IMPORTED_MODULE_6__["LoginUsernamePage"]
    }
];
let LoginUsernamePageModule = class LoginUsernamePageModule {
};
LoginUsernamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_username_page__WEBPACK_IMPORTED_MODULE_6__["LoginUsernamePage"]]
    })
], LoginUsernamePageModule);



/***/ }),

/***/ "./src/app/login-username/login-username.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/login-username/login-username.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hw {\n  width: 250px;\n  text-align: center;\n}\n\n.dims {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvbG9naW4tdXNlcm5hbWUvbG9naW4tdXNlcm5hbWUucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi11c2VybmFtZS9sb2dpbi11c2VybmFtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tdXNlcm5hbWUvbG9naW4tdXNlcm5hbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh3IHtcbiAgICB3aWR0aDoyNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZGltcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSIsIi5odyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGltcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login-username/login-username.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/login-username/login-username.page.ts ***!
  \*******************************************************/
/*! exports provided: LoginUsernamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUsernamePage", function() { return LoginUsernamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let LoginUsernamePage = class LoginUsernamePage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
    }
    goToHome() {
        this.navCtrl.navigateBack("home");
    }
    goToPaswordPage() {
        this.navCtrl.navigateForward("login-password");
    }
};
LoginUsernamePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
LoginUsernamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-username',
        template: __webpack_require__(/*! raw-loader!./login-username.page.html */ "./node_modules/raw-loader/index.js!./src/app/login-username/login-username.page.html"),
        styles: [__webpack_require__(/*! ./login-username.page.scss */ "./src/app/login-username/login-username.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], LoginUsernamePage);



/***/ })

}]);
//# sourceMappingURL=login-username-login-username-module-es2015.js.map