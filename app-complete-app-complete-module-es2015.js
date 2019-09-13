(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-complete-app-complete-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app-complete/app-complete.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-complete/app-complete.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n  <ion-toolbar class=\"app-toolbar-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"pull-left\" (click)=\"goBack()\">\r\n        <ion-icon color=\"light\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div>\r\n      <ion-title color=\"light\" class=\"app-text-size-16\">Application Complete</ion-title>\r\n    </div>\r\n\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button class=\"pull-right\">\r\n          <ion-icon color=\"light\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"app-chat-background ion-padding\">\r\n      <ion-img class=\"app-img-icon-header\" src=\"assets/notes.svg\"></ion-img>\r\n  \r\n      <ion-label text-center color=\"dark\" >\r\n        <p class=\"app-text-size-18\">Thank you! <br> We have received your mBank application </p>\r\n      </ion-label>\r\n      <ion-label class=\"ion-margin \"text-center color=\"dark\">\r\n        <p class=\"app-text-size-12\">We will notify you via email and SMS once a decision  has been made about your application</p>\r\n      </ion-label>\r\n\r\n      <ion-button class=\"app-ion-button \" expand=\"full\" (click)=\"backToDashboard()\" color=\"primary\">\r\n        Back to m-Bank App\r\n      </ion-button>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/app-complete/app-complete.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-complete/app-complete.module.ts ***!
  \*****************************************************/
/*! exports provided: AppCompletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCompletePageModule", function() { return AppCompletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_complete_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-complete.page */ "./src/app/app-complete/app-complete.page.ts");







const routes = [
    {
        path: '',
        component: _app_complete_page__WEBPACK_IMPORTED_MODULE_6__["AppCompletePage"]
    }
];
let AppCompletePageModule = class AppCompletePageModule {
};
AppCompletePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_app_complete_page__WEBPACK_IMPORTED_MODULE_6__["AppCompletePage"]]
    })
], AppCompletePageModule);



/***/ }),

/***/ "./src/app/app-complete/app-complete.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/app-complete/app-complete.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-chat-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.app-img-icon-header {\n  height: 100px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  width: auto !important;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-text-size-18 {\n  font-size: 18px;\n}\n\nion-label {\n  text-align: center;\n}\n\n.app-ion-button {\n  margin-left: 20px;\n  -webkit-box-align: bottom;\n          align-items: bottom;\n  margin-right: 20px;\n  margin-top: 30px;\n  text-transform: capitalize;\n  --background:rgb(1, 220, 243) !important;\n  --color: black;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBsZXRlL0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxhcHAtY29tcGxldGVcXGFwcC1jb21wbGV0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FwcC1jb21wbGV0ZS9hcHAtY29tcGxldGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0FDTUo7O0FESEE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9hcHAtY29tcGxldGUvYXBwLWNvbXBsZXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY2hhdC1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5hcHAtdG9vbGJhci1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFwcC1pbWctaWNvbi1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYXBwLXRleHQtc2l6ZS0xMntcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG59XHJcblxyXG4uYXBwLXRleHQtc2l6ZS0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uYXBwLXRleHQtc2l6ZS0xOHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5hcHAtaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBib3R0b207XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6cmdiKDEsIDIyMCwgMjQzKSAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHhcclxufSIsIi5hcHAtY2hhdC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmFwcC10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmFwcC1pbWctaWNvbi1oZWFkZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFwcC10ZXh0LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE4IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hcHAtaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogYm90dG9tO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6cmdiKDEsIDIyMCwgMjQzKSAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-complete/app-complete.page.ts":
/*!***************************************************!*\
  !*** ./src/app/app-complete/app-complete.page.ts ***!
  \***************************************************/
/*! exports provided: AppCompletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCompletePage", function() { return AppCompletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AppCompletePage = class AppCompletePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    backToDashboard() {
        this.navCtrl.navigateRoot("get-started");
    }
    goBack() {
        this.navCtrl.navigateForward("chat-review3");
    }
};
AppCompletePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
AppCompletePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-complete',
        template: __webpack_require__(/*! raw-loader!./app-complete.page.html */ "./node_modules/raw-loader/index.js!./src/app/app-complete/app-complete.page.html"),
        styles: [__webpack_require__(/*! ./app-complete.page.scss */ "./src/app/app-complete/app-complete.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], AppCompletePage);



/***/ })

}]);
//# sourceMappingURL=app-complete-app-complete-module-es2015.js.map