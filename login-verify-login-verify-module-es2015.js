(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-verify-login-verify-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-verify/login-verify.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-verify/login-verify.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar color=\"light\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\r\n          <ion-icon color=\"dark\" name=\"arrow-back\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <div>\r\n        <ion-title  color=\"dark\" class=\"tp-text-size-12\"></ion-title>\r\n      </div>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"openManageAccounts()\" class=\"pull-right\">\r\n          <ion-icon color=\"dark\" name=\"md-more\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-grid style=\"width: 100%; height:100%\">\r\n        <ion-col>\r\n          <ion-row style=\"height: 50%; width: 100%\">\r\n            <img   style=\"display: block; margin:auto\" src=\"/assets/brillio.png\" alt=\"\" />\r\n          </ion-row>\r\n          \r\n          <p></p>\r\n          <p></p>\r\n    \r\n          <div class=\"dims\">\r\n              <ion-text class=\"hw\" text-center>Please verify your account</ion-text>\r\n              <p></p>\r\n              <ion-text class=\"hw\" text-center>Enter the code sent to your registered phone number</ion-text>\r\n              <ion-item>\r\n                  <ion-col text-center>\r\n                    <ion-input  #otp1 required maxLength=\"1\" pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp2,'')\">\r\n                    </ion-input>\r\n                    <ion-input  #otp2 required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp3,otp1)\">\r\n                    </ion-input>\r\n                    <ion-input  #otp3 required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp4,otp2)\">\r\n                    </ion-input>\r\n                    <ion-input  #otp4  required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp5,otp3)\">\r\n                    </ion-input>\r\n                    <ion-input  #otp5 required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp6,otp4)\">\r\n                    </ion-input>\r\n                    <ion-input  #otp6  required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,'',otp5)\">\r\n                    </ion-input>\r\n                  </ion-col>\r\n            </ion-item>\r\n            <ion-button style=\"margin:5px\"class=\"hw\" expand = \"block\" text-center  fill=\"clear\">Didn't receive it?</ion-button>\r\n          </div>\r\n    \r\n        </ion-col>\r\n      </ion-grid>\r\n\r\n  </ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-verify.page */ "./src/app/login-verify/login-verify.page.ts");







const routes = [
    {
        path: '',
        component: _login_verify_page__WEBPACK_IMPORTED_MODULE_6__["LoginVerifyPage"]
    }
];
let LoginVerifyPageModule = class LoginVerifyPageModule {
};
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



/***/ }),

/***/ "./src/app/login-verify/login-verify.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/login-verify/login-verify.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  margin: 9px;\n  border-radius: 30%;\n  background: #6ea8fe;\n  padding: 3px;\n  -webkit-text-fill-color: white;\n}\n\n.dims {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.hw {\n  width: 250px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tdmVyaWZ5L0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxsb2dpbi12ZXJpZnlcXGxvZ2luLXZlcmlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luLXZlcmlmeS9sb2dpbi12ZXJpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUk7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFSTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tdmVyaWZ5L2xvZ2luLXZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjMycHg7XHJcbiAgICBoZWlnaHQ6MzJweDtcclxuICAgIG1hcmdpbjo5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiM2ZWE4ZmU7XHJcbiAgICBwYWRkaW5nOjNweDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuZGltcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmh3IHtcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgICAiLCJpb24taW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbjogOXB4O1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIGJhY2tncm91bmQ6ICM2ZWE4ZmU7XG4gIHBhZGRpbmc6IDNweDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlO1xufVxuXG4uZGltcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmh3IHtcbiAgd2lkdGg6IDI1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let LoginVerifyPage = class LoginVerifyPage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
    }
    otpController(event, next, prev) {
        let count = 0;
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        }
        else if (next && event.target.value.length > 0) {
            next.setFocus();
        }
        else {
            this.navCtrl.navigateForward("dashboard");
        }
    }
    goToLoginPassword() {
        this.navCtrl.navigateBack("login-password");
    }
};
LoginVerifyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
LoginVerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-verify',
        template: __webpack_require__(/*! raw-loader!./login-verify.page.html */ "./node_modules/raw-loader/index.js!./src/app/login-verify/login-verify.page.html"),
        styles: [__webpack_require__(/*! ./login-verify.page.scss */ "./src/app/login-verify/login-verify.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], LoginVerifyPage);



/***/ })

}]);
//# sourceMappingURL=login-verify-login-verify-module-es2015.js.map