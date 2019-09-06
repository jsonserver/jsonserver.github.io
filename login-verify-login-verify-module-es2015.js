(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-verify-login-verify-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-verify/login-verify.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-verify/login-verify.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar color=\"light\">\n      <ion-buttons slot=\"start\">\n        <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\n          <ion-icon color=\"dark\" name=\"arrow-back\" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <div>\n        <ion-title  color=\"dark\" class=\"tp-text-size-12\"></ion-title>\n      </div>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"openManageAccounts()\" class=\"pull-right\">\n          <ion-icon color=\"dark\" name=\"md-more\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\n    <ion-grid style=\"width: 100%; height:100%\">\n        <ion-col>\n          <ion-row style=\"height: 50%; width: 100%\">\n            <img   style=\"display: block; margin:auto\" src=\"/assets/brillio.png\" alt=\"\" />\n          </ion-row>\n          \n          <p></p>\n          <p></p>\n    \n          <div class=\"dims\">\n              <ion-text class=\"hw\" text-center>Please verify your account</ion-text>\n              <p></p>\n              <ion-text class=\"hw\" text-center>Enter the code sent to your registered phone number</ion-text>\n              <ion-item>\n                  <ion-col text-center>\n                    <ion-input  #otp1 required maxLength=\"1\" pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp2,'')\">\n                    </ion-input>\n                    <ion-input  #otp2 required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp3,otp1)\">\n                    </ion-input>\n                    <ion-input  #otp3 required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp4,otp2)\">\n                    </ion-input>\n                    <ion-input  #otp4  required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp5,otp3)\">\n                    </ion-input>\n                    <ion-input  #otp5 required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,otp6,otp4)\">\n                    </ion-input>\n                    <ion-input  #otp6  required maxLength=\"1\"  pattern=\"[0-9]{6}\" (keyup)=\"otpController($event,'',otp5)\">\n                    </ion-input>\n                  </ion-col>\n            </ion-item>\n            <ion-button style=\"margin:5px\"class=\"hw\" expand = \"block\" text-center  fill=\"clear\">Didn't receive it?</ion-button>\n          </div>\n    \n        </ion-col>\n      </ion-grid>\n\n  </ion-content>"

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

module.exports = "ion-input {\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  margin: 9px;\n  border-radius: 30%;\n  background: #6ea8fe;\n  padding: 3px;\n  -webkit-text-fill-color: white;\n}\n\n.dims {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.hw {\n  width: 250px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvbG9naW4tdmVyaWZ5L2xvZ2luLXZlcmlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luLXZlcmlmeS9sb2dpbi12ZXJpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUk7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFSTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tdmVyaWZ5L2xvZ2luLXZlcmlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6MzJweDtcbiAgICBoZWlnaHQ6MzJweDtcbiAgICBtYXJnaW46OXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgICBiYWNrZ3JvdW5kOiM2ZWE4ZmU7XG4gICAgcGFkZGluZzozcHg7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5kaW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5odyB7XG4gICAgd2lkdGg6MjUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAgICIsImlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgYmFja2dyb3VuZDogIzZlYThmZTtcbiAgcGFkZGluZzogM3B4O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XG59XG5cbi5kaW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaHcge1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

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