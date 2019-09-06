(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["premier-checking-premier-checking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/premier-checking/premier-checking.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/premier-checking/premier-checking.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar class=\"app-toolbar-color\">\n      <ion-buttons slot=\"start\">\n          <ion-button class=\"pull-left\" (click)=\"goBack()\">\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" (click)=\"dismiss()\" ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <div>\n          <ion-title color=\"light\" class=\"app-text-size-12\">Velo Premier Checking</ion-title>\n        </div>\n\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"pull-right\">\n              <ion-icon color=\"light\" ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <div class=\"app-background\">\n        <ion-col class=\"ion-margin-top\"></ion-col>\n        <ion-text color=\"dark\">\n         <p class=\"ion-text-center app-text-size-16 app-margin-left app-margin-right\">To complete this application, please ensure you have the following documents:</p>\n        </ion-text>\n\n        <ion-item color=\"none\" lines=\"none\" class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">\n            <ion-icon color=\"dark\" name=\"md-checkmark-circle-outline\" ></ion-icon>\n            <ion-label class=\"ion-margin\" color=\"dark\"> Your China national identification card</ion-label>\n          </ion-item>\n\n        <ion-text color=\"dark\">\n            <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">We will require you to upload photos of these documents to process your application</p>\n        </ion-text>\n\n        <ion-button color=\"primary\" expand=\"full\" class=\"app-margin-left app-margin-right app-text-size-12\" (click)=\"goToChatWindow()\" > Continue ></ion-button>\n\n\n    </div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _premier_checking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./premier-checking.page */ "./src/app/premier-checking/premier-checking.page.ts");







var routes = [
    {
        path: '',
        component: _premier_checking_page__WEBPACK_IMPORTED_MODULE_6__["PremierCheckingPage"]
    }
];
var PremierCheckingPageModule = /** @class */ (function () {
    function PremierCheckingPageModule() {
    }
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
    return PremierCheckingPageModule;
}());



/***/ }),

/***/ "./src/app/premier-checking/premier-checking.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/premier-checking/premier-checking.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.bg-transparent {\n  background: transparent;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.app-term-condition-margin {\n  margin-top: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL29uYm9hcmQvb25Cb2FyZGluZ0FwcGxpY2F0aW9uL3NyYy9hcHAvcHJlbWllci1jaGVja2luZy9wcmVtaWVyLWNoZWNraW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJlbWllci1jaGVja2luZy9wcmVtaWVyLWNoZWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wcmVtaWVyLWNoZWNraW5nL3ByZW1pZXItY2hlY2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE2e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFwcC10b29sYmFyLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuLmFwcC1tYXJnaW4tbGVmdHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5hcHAtbWFyZ2luLXJpZ2h0e1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW57XG4gICAgbWFyZ2luLXRvcDogMjcwcHg7XG59XG5cblxuIiwiLmFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmFwcC10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYXBwLXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmFwcC1tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYXBwLW1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyNzBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PremierCheckingPage = /** @class */ (function () {
    function PremierCheckingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PremierCheckingPage.prototype.ngOnInit = function () {
    };
    PremierCheckingPage.prototype.goToChatWindow = function () {
        this.navCtrl.navigateForward("chat-page");
    };
    PremierCheckingPage.prototype.goBack = function () {
        this.navCtrl.navigateForward("country-of-citizenship");
    };
    PremierCheckingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    PremierCheckingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-premier-checking',
            template: __webpack_require__(/*! raw-loader!./premier-checking.page.html */ "./node_modules/raw-loader/index.js!./src/app/premier-checking/premier-checking.page.html"),
            styles: [__webpack_require__(/*! ./premier-checking.page.scss */ "./src/app/premier-checking/premier-checking.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], PremierCheckingPage);
    return PremierCheckingPage;
}());



/***/ })

}]);
//# sourceMappingURL=premier-checking-premier-checking-module-es5.js.map