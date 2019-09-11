(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["premier-checking-premier-checking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/premier-checking/premier-checking.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/premier-checking/premier-checking.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"app-toolbar-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button class=\"pull-left\" (click)=\"goBack()\">\r\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" (click)=\"dismiss()\" ></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <div>\r\n          <ion-title color=\"light\" class=\"app-text-size-16\">mBank Premier Checking</ion-title>\r\n        </div>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button class=\"pull-right\">\r\n              <ion-icon color=\"light\" ></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"app-background\">\r\n        <ion-col class=\"ion-margin-top\"></ion-col>\r\n        <ion-text color=\"dark\">\r\n         <p class=\"ion-text-center app-text-size-16 app-margin-left app-margin-right\">To complete this application, please ensure you have the following documents:</p>\r\n        </ion-text>\r\n\r\n        <ion-item color=\"none\" lines=\"none\" class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">\r\n            <ion-icon color=\"dark\" name=\"md-checkmark-circle-outline\" ></ion-icon>\r\n            <ion-label class=\"ion-margin\" color=\"dark\"> Your China national identification card</ion-label>\r\n          </ion-item>\r\n\r\n        <ion-text color=\"dark\">\r\n            <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">We will require you to upload photos of these documents to process your application</p>\r\n        </ion-text>\r\n\r\n        <ion-button color=\"primary\" expand=\"full\" class=\"app-margin-left app-margin-right app-text-size-12\" (click)=\"goToChatWindow()\" > Continue ></ion-button>\r\n\r\n\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/premier-checking/premier-checking.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/premier-checking/premier-checking.module.ts ***!
  \*************************************************************/
/*! exports provided: PremierCheckingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremierCheckingPageModule", function() { return PremierCheckingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _premier_checking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./premier-checking.page */ "./src/app/premier-checking/premier-checking.page.ts");







const routes = [
    {
        path: '',
        component: _premier_checking_page__WEBPACK_IMPORTED_MODULE_6__["PremierCheckingPage"]
    }
];
let PremierCheckingPageModule = class PremierCheckingPageModule {
};
PremierCheckingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_premier_checking_page__WEBPACK_IMPORTED_MODULE_6__["PremierCheckingPage"]]
    })
], PremierCheckingPageModule);



/***/ }),

/***/ "./src/app/premier-checking/premier-checking.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/premier-checking/premier-checking.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.bg-transparent {\n  background: transparent;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.app-term-condition-margin {\n  margin-top: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlbWllci1jaGVja2luZy9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxccHJlbWllci1jaGVja2luZ1xccHJlbWllci1jaGVja2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByZW1pZXItY2hlY2tpbmcvcHJlbWllci1jaGVja2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcHJlbWllci1jaGVja2luZy9wcmVtaWVyLWNoZWNraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmFwcC10ZXh0LXNpemUtMTJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5hcHAtdGV4dC1zaXplLTE2e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYXBwLXRvb2xiYXItY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctdHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuLmFwcC1tYXJnaW4tbGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5hcHAtbWFyZ2luLXJpZ2h0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYXBwLXRlcm0tY29uZGl0aW9uLW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDI3MHB4O1xyXG59XHJcblxyXG5cclxuIiwiLmFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmFwcC10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYXBwLXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmFwcC1tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYXBwLW1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyNzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/premier-checking/premier-checking.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/premier-checking/premier-checking.page.ts ***!
  \***********************************************************/
/*! exports provided: PremierCheckingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremierCheckingPage", function() { return PremierCheckingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PremierCheckingPage = class PremierCheckingPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goToChatWindow() {
        this.navCtrl.navigateForward("chat-page");
    }
    goBack() {
        this.navCtrl.navigateForward("country-of-citizenship");
    }
};
PremierCheckingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PremierCheckingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-premier-checking',
        template: __webpack_require__(/*! raw-loader!./premier-checking.page.html */ "./node_modules/raw-loader/index.js!./src/app/premier-checking/premier-checking.page.html"),
        styles: [__webpack_require__(/*! ./premier-checking.page.scss */ "./src/app/premier-checking/premier-checking.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PremierCheckingPage);



/***/ })

}]);
//# sourceMappingURL=premier-checking-premier-checking-module-es2015.js.map