(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-verify-login-verify-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-verify/login-verify.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-verify/login-verify.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon name=\"arrow-back\" (click)=\"goToLoginPassword()\"></ion-icon>\r\n    <ion-title>login-verify</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card class=\"welcome-card\">\r\n        <ion-card-header>\r\n            <img src=\"/assets/brillio.png\" alt=\"\" />\r\n            <ion-card-subtitle></ion-card-subtitle>\r\n            <ion-card-title>Please verify your account</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n            <p>Enter the code sent to your registered phone number</p>\r\n        </ion-card-content>\r\n        <ion-item>\r\n              <ion-col text-center>\r\n                <ion-input #otp1 required maxLength=\"1\" pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp2,'')\">\r\n                </ion-input>\r\n                <ion-input #otp2 required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp3,otp1)\">\r\n                </ion-input>\r\n                <ion-input #otp3 required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp4,otp2)\">\r\n                </ion-input>\r\n                <ion-input #otp4  required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp5,otp3)\">\r\n                </ion-input>\r\n                <ion-input #otp5 required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp6,otp4)\">\r\n                </ion-input>\r\n                <ion-input #otp6  required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,'',otp5)\">\r\n                </ion-input>\r\n              </ion-col>\r\n        </ion-item>\r\n        <ion-button expand=\"block\"  fill=\"clear\">Didn't receive it?</ion-button>\r\n    </ion-card>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/login-verify/login-verify.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/login-verify/login-verify.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginVerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginVerifyPageModule", function() { return LoginVerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-verify.page */ "./src/app/login-verify/login-verify.page.ts");







var routes = [
    {
        path: '',
        component: _login_verify_page__WEBPACK_IMPORTED_MODULE_6__["LoginVerifyPage"]
    }
];
var LoginVerifyPageModule = /** @class */ (function () {
    function LoginVerifyPageModule() {
    }
    LoginVerifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_verify_page__WEBPACK_IMPORTED_MODULE_6__["LoginVerifyPage"]]
        })
    ], LoginVerifyPageModule);
    return LoginVerifyPageModule;
}());



/***/ }),

/***/ "./src/app/login-verify/login-verify.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/login-verify/login-verify.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  margin: 9px;\n  border-radius: 30%;\n  background: #6ea8fe;\n  padding: 3px;\n  -webkit-text-fill-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tdmVyaWZ5L0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxsb2dpbi12ZXJpZnlcXGxvZ2luLXZlcmlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luLXZlcmlmeS9sb2dpbi12ZXJpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi12ZXJpZnkvbG9naW4tdmVyaWZ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6MzJweDtcclxuICAgIGhlaWdodDozMnB4O1xyXG4gICAgbWFyZ2luOjlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcclxuICAgIGJhY2tncm91bmQ6IzZlYThmZTtcclxuICAgIHBhZGRpbmc6M3B4O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlO1xyXG4gICAgfSIsImlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgYmFja2dyb3VuZDogIzZlYThmZTtcbiAgcGFkZGluZzogM3B4O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/login-verify/login-verify.page.ts":
/*!***************************************************!*\
  !*** ./src/app/login-verify/login-verify.page.ts ***!
  \***************************************************/
/*! exports provided: LoginVerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginVerifyPage", function() { return LoginVerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoginVerifyPage = /** @class */ (function () {
    function LoginVerifyPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    LoginVerifyPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginVerifyPage.prototype.ngOnInit = function () {
    };
    LoginVerifyPage.prototype.otpController = function (event, next, prev) {
        var count = 0;
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        }
        else if (next && event.target.value.length > 0) {
            next.setFocus();
        }
        else {
            this.navCtrl.navigateForward("dashboard");
        }
    };
    LoginVerifyPage.prototype.goToLoginPassword = function () {
        this.navCtrl.navigateBack("login-password");
    };
    LoginVerifyPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    LoginVerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-verify',
            template: __webpack_require__(/*! raw-loader!./login-verify.page.html */ "./node_modules/raw-loader/index.js!./src/app/login-verify/login-verify.page.html"),
            styles: [__webpack_require__(/*! ./login-verify.page.scss */ "./src/app/login-verify/login-verify.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], LoginVerifyPage);
    return LoginVerifyPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-verify-login-verify-module-es5.js.map