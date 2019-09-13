(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-started-get-started-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/get-started/get-started.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/get-started/get-started.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"background\">\r\n    <div >\r\n        <div class=\"screenPhoto\">\r\n            <img src='/assets/building.svg' width=\"100\" height=\"100\">\r\n        </div>\r\n\r\n        <ion-card class=\"app-text-data\">\r\n        <ion-text color=\"dark\">\r\n          <p class=\"ion-text-center app-text-size-16\">Apply for a U.S. bank account in just a few minutes</p>\r\n        </ion-text>\r\n        \r\n        <ion-slides style=\"height: 25px\" pager class=\"ion-slides\" >\r\n            <ion-slide></ion-slide>\r\n            <ion-slide></ion-slide>\r\n            <ion-slide></ion-slide>\r\n            <ion-slide></ion-slide>\r\n        </ion-slides>\r\n\r\n        <ion-button expand=\"full\" class=\"app-margin-left app-margin-right\" color=\"primary\" (click)=\"goToLoginPage()\"> Log in ></ion-button>\r\n        <ion-col class=\"ion-margin-top\"></ion-col>\r\n\r\n        <ion-button fill=\"outline\" expand=\"block\" class=\"app-margin-left app-margin-right\" color=\"primary\"  (click)=\"goToVeloProducts()\"> Get started with mBank ></ion-button>\r\n        \r\n        <ion-text color=\"dark\">\r\n            <p class=\"ion-text-center app-text-size-12\">Explore mBank Checking Account</p>\r\n        </ion-text>\r\n      </ion-card>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/get-started/get-started.module.ts":
/*!***************************************************!*\
  !*** ./src/app/get-started/get-started.module.ts ***!
  \***************************************************/
/*! exports provided: GetStartedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedPageModule", function() { return GetStartedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _get_started_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-started.page */ "./src/app/get-started/get-started.page.ts");







const routes = [
    {
        path: '',
        component: _get_started_page__WEBPACK_IMPORTED_MODULE_6__["GetStartedPage"]
    }
];
let GetStartedPageModule = class GetStartedPageModule {
};
GetStartedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_get_started_page__WEBPACK_IMPORTED_MODULE_6__["GetStartedPage"]]
    })
], GetStartedPageModule);



/***/ }),

/***/ "./src/app/get-started/get-started.page.scss":
/*!***************************************************!*\
  !*** ./src/app/get-started/get-started.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\nion-content.background {\n  --background: url('back1.jpg') 0 0/100% 100% no-repeat;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-text-data {\n  margin-top: 70px;\n  box-shadow: none !important;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.screenPhoto img {\n  margin: auto;\n  display: block;\n  margin-top: 100px;\n}\n\nion-slides {\n  --bullet-background: #32CD32;\n  --bullet-background-active: #4ca088;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LXN0YXJ0ZWQvQzpcXFVzZXJzXFxzaHdldGEua1xcSW9uaWNQcm9qZWN0c1xcbWJhbmsvc3JjXFxhcHBcXGdldC1zdGFydGVkXFxnZXQtc3RhcnRlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2dldC1zdGFydGVkL2dldC1zdGFydGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0RBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREdJO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRElJO0VBQ0ksNEJBQUE7RUFDQSxtQ0FBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5pb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2sxLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5hcHAtdGV4dC1zaXplLTEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYXBwLXRleHQtc2l6ZS0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmFwcC10ZXh0LWRhdGF7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmFwcC1tYXJnaW4tbGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5hcHAtbWFyZ2luLXJpZ2h0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uc2NyZWVuUGhvdG8ge1xyXG4gICAgaW1nIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHhcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tc2xpZGVzIHtcclxuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMzJDRDMyO1xyXG4gICAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjNGNhMDg4O1xyXG4gICAgfVxyXG5cclxuIiwiLmFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrMS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFwcC10ZXh0LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hcHAtdGV4dC1kYXRhIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYXBwLW1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5hcHAtbWFyZ2luLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2NyZWVuUGhvdG8gaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMzJDRDMyO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzRjYTA4ODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/get-started/get-started.page.ts":
/*!*************************************************!*\
  !*** ./src/app/get-started/get-started.page.ts ***!
  \*************************************************/
/*! exports provided: GetStartedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStartedPage", function() { return GetStartedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let GetStartedPage = class GetStartedPage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    goToVeloProducts() {
        this.navCtrl.navigateForward("bank-products");
    }
    goToLoginPage() {
        this.navCtrl.navigateForward("login-username");
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
};
GetStartedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
GetStartedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-started',
        template: __webpack_require__(/*! raw-loader!./get-started.page.html */ "./node_modules/raw-loader/index.js!./src/app/get-started/get-started.page.html"),
        styles: [__webpack_require__(/*! ./get-started.page.scss */ "./src/app/get-started/get-started.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], GetStartedPage);



/***/ })

}]);
//# sourceMappingURL=get-started-get-started-module-es2015.js.map