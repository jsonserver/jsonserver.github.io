(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-username-login-username-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-username/login-username.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-username/login-username.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-icon name=\"arrow-back\" (click)=\"goToHome()\"></ion-icon>\r\n    <ion-title>Login_Username</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n            <img src=\"/assets/brillio.png\" alt=\"\" />\r\n          <ion-card-subtitle></ion-card-subtitle>\r\n          <ion-card-title>Enter your Username</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <p></p>\r\n        </ion-card-content>\r\n        <ion-item>   \r\n            <ion-input type=\"text\" placeholder=\"Username\"></ion-input>\r\n        </ion-item>\r\n        <ion-button expand=\"block\" (click)=\"goToPaswordPage()\">Continue</ion-button>\r\n      </ion-card>\r\n</ion-content>\r\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXVzZXJuYW1lL2xvZ2luLXVzZXJuYW1lLnBhZ2Uuc2NzcyJ9 */"

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