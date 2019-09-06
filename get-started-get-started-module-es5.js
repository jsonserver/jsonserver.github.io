(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-started-get-started-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/get-started/get-started.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/get-started/get-started.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <div class=\"app-background\">\n        <div class=\"screenPhoto\">\n            <img src='/assets/building.svg' width=\"100\" height=\"100\">\n        </div>\n\n        <ion-card class=\"app-text-data\">\n        <ion-text color=\"dark\">\n          <p class=\"ion-text-center app-text-size-16\">Apply for a U.S. bank account in just a few minutes</p>\n        </ion-text>\n        \n        <ion-slides style=\"height: 25px\" pager class=\"ion-slides\" >\n            <ion-slide></ion-slide>\n            <ion-slide></ion-slide>\n            <ion-slide></ion-slide>\n            <ion-slide></ion-slide>\n        </ion-slides>\n\n        <ion-button expand=\"full\" class=\"app-margin-left app-margin-right\" color=\"primary\"> Log in ></ion-button>\n        <ion-col class=\"ion-margin-top\"></ion-col>\n\n        <ion-button fill=\"outline\" expand=\"block\" class=\"app-margin-left app-margin-right\" color=\"primary\"  (click)=\"goToVeloProducts()\"> Get started with Velo ></ion-button>\n        \n        <ion-text color=\"light\">\n            <p class=\"ion-text-center app-text-size-12\">Explore Velo Checking Account</p>\n        </ion-text>\n      </ion-card>\n\n    </div>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _get_started_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-started.page */ "./src/app/get-started/get-started.page.ts");







var routes = [
    {
        path: '',
        component: _get_started_page__WEBPACK_IMPORTED_MODULE_6__["GetStartedPage"]
    }
];
var GetStartedPageModule = /** @class */ (function () {
    function GetStartedPageModule() {
    }
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
    return GetStartedPageModule;
}());



/***/ }),

/***/ "./src/app/get-started/get-started.page.scss":
/*!***************************************************!*\
  !*** ./src/app/get-started/get-started.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-text-data {\n  margin-top: 70px;\n  box-shadow: none !important;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.screenPhoto img {\n  margin: auto;\n  display: block;\n  margin-top: 200px;\n}\n\nion-slides {\n  --bullet-background: #32CD32;\n  --bullet-background-active: #4ca088;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL29uYm9hcmQvb25Cb2FyZGluZ0FwcGxpY2F0aW9uL3NyYy9hcHAvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQucGFnZS5zY3NzIiwic3JjL2FwcC9nZXQtc3RhcnRlZC9nZXQtc3RhcnRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREdJO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRElJO0VBQ0ksNEJBQUE7RUFDQSxtQ0FBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvZ2V0LXN0YXJ0ZWQvZ2V0LXN0YXJ0ZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE2e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFwcC10ZXh0LWRhdGF7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cbn1cblxuLmFwcC1tYXJnaW4tbGVmdHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5hcHAtbWFyZ2luLXJpZ2h0e1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnNjcmVlblBob3RvIHtcbiAgICBpbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAyMDBweFxuICAgIH1cbiAgICB9XG5cbiAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzMyQ0QzMjtcbiAgICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICM0Y2EwODg7XG4gICAgfVxuXG4iLCIuYXBwLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFwcC10ZXh0LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hcHAtdGV4dC1kYXRhIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYXBwLW1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5hcHAtbWFyZ2luLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2NyZWVuUGhvdG8gaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMzJDRDMyO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogIzRjYTA4ODtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var GetStartedPage = /** @class */ (function () {
    function GetStartedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GetStartedPage.prototype.ngOnInit = function () {
    };
    GetStartedPage.prototype.goToVeloProducts = function () {
        this.navCtrl.navigateForward("velo-products");
    };
    GetStartedPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    GetStartedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-started',
            template: __webpack_require__(/*! raw-loader!./get-started.page.html */ "./node_modules/raw-loader/index.js!./src/app/get-started/get-started.page.html"),
            styles: [__webpack_require__(/*! ./get-started.page.scss */ "./src/app/get-started/get-started.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], GetStartedPage);
    return GetStartedPage;
}());



/***/ })

}]);
//# sourceMappingURL=get-started-get-started-module-es5.js.map