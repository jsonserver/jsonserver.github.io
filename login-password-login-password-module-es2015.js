(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-password-login-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-password/login-password.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-password/login-password.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar color=\"light\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"pull-left\" (click)=\"goToLoginUsername()\">\r\n          <ion-icon color=\"dark\" name=\"arrow-back\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <div>\r\n        <ion-title  color=\"dark\" class=\"tp-text-size-12\"></ion-title>\r\n      </div>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"openManageAccounts()\" class=\"pull-right\">\r\n          <ion-icon color=\"dark\" name=\"md-more\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n    <ion-grid style=\"width: 100%; height:100%\">\r\n        <ion-col>\r\n            <p  class=\"title h1-margin\" text-center >mBank</p>\r\n            <img   style=\"display: block; margin:auto;height:40px; width:40px\" src=\"/assets/building.svg\" alt=\"\"/>\r\n            <ion-card  class=\"ion-margin\">\r\n                <ion-text   style=\"padding-top: 30px;\" >\r\n                    <p class=\"p-font\" text-center>Enter your Password</p>\r\n                </ion-text>\r\n                <ion-item  class=\"ion-margin\">\r\n                    <ion-icon name=\"lock\"></ion-icon>\r\n                    <ion-input  type=\"passwordType\" placeholder=\"Password\" ></ion-input>\r\n                    <ion-icon  [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\r\n              </ion-item>\r\n  \r\n            <p></p>\r\n  \r\n              <ion-button class=\"ion-margin\" expand = \"full\" text-center (click)=\"verify()\">Log in</ion-button>\r\n             \r\n            </ion-card>\r\n            <p class=\"p-font\" text-center>Forgot password?</p>\r\n            <p class=\"p-font\" text-center>Sign in as a different user</p>\r\n\r\n                 \r\n        </ion-col>\r\n      </ion-grid>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-password.page */ "./src/app/login-password/login-password.page.ts");







const routes = [
    {
        path: '',
        component: _login_password_page__WEBPACK_IMPORTED_MODULE_6__["LoginPasswordPage"]
    }
];
let LoginPasswordPageModule = class LoginPasswordPageModule {
};
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



/***/ }),

/***/ "./src/app/login-password/login-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/login-password/login-password.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hw {\n  width: 250px;\n  text-align: center;\n}\n\n.dims {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.title {\n  color: #007856;\n  font-size: 30px;\n}\n\n.h1-margin {\n  margin-top: 5%;\n}\n\n.p-font {\n  font-size: 14px;\n  color: #007856;\n}\n\nion-input {\n  font-size: 14px;\n}\n\n.tp-ion-button {\n  --border-width: 1px!important;\n  font-size: 0.7em;\n  --border-radius:0px;\n  width: 88%;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFzc3dvcmQvQzpcXFVzZXJzXFxzaHdldGEua1xcSW9uaWNQcm9qZWN0c1xcbWJhbmsvc3JjXFxhcHBcXGxvZ2luLXBhc3N3b3JkXFxsb2dpbi1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luLXBhc3N3b3JkL2xvZ2luLXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFFO0VBQ0UsY0FBQTtBQ0dKOztBRERFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNJSjs7QURGRTtFQUNFLGVBQUE7QUNLSjs7QURIRTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcGFzc3dvcmQvbG9naW4tcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh3IHtcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmRpbXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudGl0bGV7XHJcbiAgICBjb2xvcjogIzAwNzg1NjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmgxLW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgfVxyXG4gIC5wLWZvbnR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwNzg1NjtcclxuICB9XHJcbiAgaW9uLWlucHV0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAudHAtaW9uLWJ1dHRvbntcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICB3aWR0aDo4OCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4iLCIuaHcge1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjMDA3ODU2O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5oMS1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLnAtZm9udCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDc4NTY7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRwLWlvbi1idXR0b24ge1xuICAtLWJvcmRlci13aWR0aDogMXB4IWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDg4JTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let LoginPasswordPage = class LoginPasswordPage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    goToLoginUsername() {
        this.navCtrl.navigateBack("login-username");
    }
    verify() {
        //this.navCtrl.navigateForward("login-verify");
        this.navCtrl.navigateForward("dashboard");
    }
};
LoginPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
LoginPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-password',
        template: __webpack_require__(/*! raw-loader!./login-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/login-password/login-password.page.html"),
        styles: [__webpack_require__(/*! ./login-password.page.scss */ "./src/app/login-password/login-password.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], LoginPasswordPage);



/***/ })

}]);
//# sourceMappingURL=login-password-login-password-module-es2015.js.map