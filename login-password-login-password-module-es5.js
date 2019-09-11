(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-password-login-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-password/login-password.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-password/login-password.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n      <ion-icon name=\"arrow-back\" (click)=\"goToLoginUsername()\"></ion-icon>\r\n    <ion-title>Login_Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"welcome-card\">\r\n      <ion-card-header>\r\n          <img src=\"/assets/brillio.png\" alt=\"\" />\r\n          <ion-card-subtitle></ion-card-subtitle>\r\n          <ion-card-title>Enter your password</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n          <p></p>\r\n      </ion-card-content>\r\n      <ion-item>\r\n            <ion-icon name=\"lock\"></ion-icon>\r\n            <ion-input [type]=\"passwordType\" placeholder=\"Password\" ></ion-input>\r\n            <ion-icon  [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\r\n      </ion-item>\r\n      <ion-button expand=\"block\" (click)=\"verify()\">Log in</ion-button>\r\n      <ion-button expand=\"block\"  fill=\"clear\">Forgot password?</ion-button>\r\n      <ion-button expand=\"block\"  fill=\"clear\">Sign in as a different user</ion-button>\r\n  </ion-card>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/login-password/login-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/login-password/login-password.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPasswordPageModule", function() { return LoginPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-password.page */ "./src/app/login-password/login-password.page.ts");







var routes = [
    {
        path: '',
        component: _login_password_page__WEBPACK_IMPORTED_MODULE_6__["LoginPasswordPage"]
    }
];
var LoginPasswordPageModule = /** @class */ (function () {
    function LoginPasswordPageModule() {
    }
    LoginPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_password_page__WEBPACK_IMPORTED_MODULE_6__["LoginPasswordPage"]]
        })
    ], LoginPasswordPageModule);
    return LoginPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/login-password/login-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/login-password/login-password.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhc3N3b3JkL2xvZ2luLXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login-password/login-password.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/login-password/login-password.page.ts ***!
  \*******************************************************/
/*! exports provided: LoginPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPasswordPage", function() { return LoginPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoginPasswordPage = /** @class */ (function () {
    function LoginPasswordPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    LoginPasswordPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPasswordPage.prototype.ngOnInit = function () {
    };
    LoginPasswordPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPasswordPage.prototype.goToLoginUsername = function () {
        this.navCtrl.navigateBack("login-username");
    };
    LoginPasswordPage.prototype.verify = function () {
        //this.navCtrl.navigateForward("login-verify");
        this.navCtrl.navigateForward("dashboard");
    };
    LoginPasswordPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    LoginPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-password',
            template: __webpack_require__(/*! raw-loader!./login-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/login-password/login-password.page.html"),
            styles: [__webpack_require__(/*! ./login-password.page.scss */ "./src/app/login-password/login-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], LoginPasswordPage);
    return LoginPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-password-login-password-module-es5.js.map