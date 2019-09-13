(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-username-login-username-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-username/login-username.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-username/login-username.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"pull-left\" (click)=\"goToHome()\">\r\n        <ion-icon color=\"dark\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div>\r\n      <ion-title color=\"dark\" class=\"tp-text-size-12\"></ion-title>\r\n    </div>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openManageAccounts()\" class=\"pull-right\">\r\n        <ion-icon color=\"dark\" name=\"md-more\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"width: 100%; height:100%\">\r\n\r\n  <!-- <img   style=\"display: block; margin:auto\" src=\"/assets/brillio.png\" alt=\"\" /> -->\r\n  \r\n  <p  class=\"title h1-margin\" text-center >mBank</p>\r\n  <img   style=\"display: block; margin:auto; height:40px; width:40px\" src=\"/assets/building.svg\" alt=\"\"/>\r\n  \r\n<ion-card style=\"margin-top: 10%\" col-md-4> \r\n    <ion-grid>\r\n        <ion-row>\r\n              <ion-col >\r\n                    <p class=\"p-font\" text-center>Enter your Username</p>\r\n                    <ion-item>\r\n                        <ion-input  placeholder=\"Username\"></ion-input>\r\n                    </ion-item>\r\n                    <ion-button style=\"margin-top: 10px \" expand=\"full\" text-center (click)=\"goToPaswordPage()\">Continue</ion-button>\r\n              </ion-col>\r\n        </ion-row>\r\n  </ion-grid>\r\n</ion-card>\r\n   \r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_username_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-username.page */ "./src/app/login-username/login-username.page.ts");







var routes = [
    {
        path: '',
        component: _login_username_page__WEBPACK_IMPORTED_MODULE_6__["LoginUsernamePage"]
    }
];
var LoginUsernamePageModule = /** @class */ (function () {
    function LoginUsernamePageModule() {
    }
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
    return LoginUsernamePageModule;
}());



/***/ }),

/***/ "./src/app/login-username/login-username.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/login-username/login-username.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: #007856;\n  font-size: 30px;\n}\n\n.h1-margin {\n  margin-top: 5%;\n}\n\nion-input {\n  font-size: 14px;\n}\n\n.p-font {\n  font-size: 14px;\n  color: #007856;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tdXNlcm5hbWUvQzpcXFVzZXJzXFxzaHdldGEua1xcSW9uaWNQcm9qZWN0c1xcbWJhbmsvc3JjXFxhcHBcXGxvZ2luLXVzZXJuYW1lXFxsb2dpbi11c2VybmFtZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luLXVzZXJuYW1lL2xvZ2luLXVzZXJuYW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tdXNlcm5hbWUvbG9naW4tdXNlcm5hbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50aXRsZXtcclxuICBjb2xvcjogIzAwNzg1NjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmgxLW1hcmdpbntcclxuICBtYXJnaW4tdG9wOjUlO1xyXG59XHJcbmlvbi1pbnB1dHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnAtZm9udHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMwMDc4NTY7XHJcbn0iLCIudGl0bGUge1xuICBjb2xvcjogIzAwNzg1NjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaDEtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnAtZm9udCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDc4NTY7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoginUsernamePage = /** @class */ (function () {
    function LoginUsernamePage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    LoginUsernamePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginUsernamePage.prototype.ngOnInit = function () {
    };
    LoginUsernamePage.prototype.goToHome = function () {
        this.navCtrl.navigateBack("get-started");
    };
    LoginUsernamePage.prototype.goToPaswordPage = function () {
        this.navCtrl.navigateForward("login-password");
    };
    LoginUsernamePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    LoginUsernamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-username',
            template: __webpack_require__(/*! raw-loader!./login-username.page.html */ "./node_modules/raw-loader/index.js!./src/app/login-username/login-username.page.html"),
            styles: [__webpack_require__(/*! ./login-username.page.scss */ "./src/app/login-username/login-username.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], LoginUsernamePage);
    return LoginUsernamePage;
}());



/***/ })

}]);
//# sourceMappingURL=login-username-login-username-module-es5.js.map