(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-velo-cd-history-velo-cd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/history-velo-cd/history-velo-cd.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history-velo-cd/history-velo-cd.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar class=\"hv-toolbar-color\" >\n      <ion-buttons slot=\"start\">\n        <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\n          <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <div>\n        <ion-title color=\"light\" class=\"hv-text-size-16\">Velo CD</ion-title>\n      </div>\n\n      <ion-buttons slot=\"end\">\n          <ion-button class=\"pull-right\" >\n            <ion-icon color=\"light\"  ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n\n    </ion-toolbar>\n   </ion-header>\n\n<ion-content fullscreen >\n    <div class=\"hv-background\">\n        <ion-col class=\"ion-margin-top\"></ion-col>\n\n    <ion-text color=\"dark\" >\n        <h3 class=\"ion-text-center\">Certificate of Deposit (CD)</h3>\n    </ion-text>\n\n    <ion-text color=\"dark\" >\n        <p class=\"ion-text-left hv-text-size-12 hv-padding-left-20 hv-padding-right-20\">Velo CD is a fixed interest rate account that provides you the flexibility of selecting the deposite term and amount that works best for you. Withdrawals from a CD account before term maturity will incur early withdrawal penalty.</p>\n    </ion-text>\n    <ion-col class=\"ion-margin-top\"></ion-col>\n    <ion-button expand=\"full\" color=\"primary hv-padding-left-20 hv-padding-right-20\" (click)=\"goToDashboard()\">\n        <p style=\"color:white;\">\n      Get started ></p>\n    </ion-button>\n\n    <ion-col class=\"ion-margin-top\"></ion-col>\n    <ion-text color=\"dark\"><h3 class=\"ion-text-center\">Key features</h3></ion-text>\n\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >No monthly maintenance fee</li> </ul>\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >Fixed Interest rates;compounded daily</li> </ul>\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >Minimum opening balance of $1000</li> </ul>\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >Automatic renewal on term maturity</li> </ul>\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >Flecible term from 32 days to 5 years</li> </ul>\n    </div>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/history-velo-cd/history-velo-cd.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/history-velo-cd/history-velo-cd.module.ts ***!
  \***********************************************************/
/*! exports provided: HistoryVeloCdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryVeloCdPageModule", function() { return HistoryVeloCdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_velo_cd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-velo-cd.page */ "./src/app/history-velo-cd/history-velo-cd.page.ts");







var routes = [
    {
        path: '',
        component: _history_velo_cd_page__WEBPACK_IMPORTED_MODULE_6__["HistoryVeloCdPage"]
    }
];
var HistoryVeloCdPageModule = /** @class */ (function () {
    function HistoryVeloCdPageModule() {
    }
    HistoryVeloCdPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_velo_cd_page__WEBPACK_IMPORTED_MODULE_6__["HistoryVeloCdPage"]]
        })
    ], HistoryVeloCdPageModule);
    return HistoryVeloCdPageModule;
}());



/***/ }),

/***/ "./src/app/history-velo-cd/history-velo-cd.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/history-velo-cd/history-velo-cd.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  color: #fff;\n}\n\n.hv-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.hv-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.hv-text-size-12 {\n  font-size: 12px;\n}\n\n.hv-text-size-16 {\n  font-size: 16px;\n}\n\n.hv-text-size-20 {\n  font-size: 20px;\n}\n\n.hv-text-size-10 {\n  font-size: 10px;\n}\n\n.hv-text-align-center {\n  text-align: center;\n}\n\n.hv-padding-left-20 {\n  padding-left: 20px;\n}\n\n.hv-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvaGlzdG9yeS12ZWxvLWNkL2hpc3RvcnktdmVsby1jZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hpc3RvcnktdmVsby1jZC9oaXN0b3J5LXZlbG8tY2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ047O0FERUE7RUFDSSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0NBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS12ZWxvLWNkL2hpc3RvcnktdmVsby1jZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuaHYtYmFja2dyb3VuZHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmh2LXRvb2xiYXItY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmh2LXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTZ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmh2LXRleHQtc2l6ZS0yMHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uaHYtdGV4dC1hbGlnbi1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5odi1wYWRkaW5nLWxlZnQtMjB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4XG59XG5cbi5odi1wYWRkaW5nLXJpZ2h0LTIwe1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcbn1cblxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiA1JTtcbn1cbiIsIi5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5odi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmh2LXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xufVxuXG4uaHYtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaHYtdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaHYtdGV4dC1zaXplLTIwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaHYtdGV4dC1zaXplLTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uaHYtdGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5odi1wYWRkaW5nLWxlZnQtMjAge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5odi1wYWRkaW5nLXJpZ2h0LTIwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/history-velo-cd/history-velo-cd.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/history-velo-cd/history-velo-cd.page.ts ***!
  \*********************************************************/
/*! exports provided: HistoryVeloCdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryVeloCdPage", function() { return HistoryVeloCdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var HistoryVeloCdPage = /** @class */ (function () {
    function HistoryVeloCdPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    HistoryVeloCdPage.prototype.ngOnInit = function () {
    };
    HistoryVeloCdPage.prototype.goToDashboard = function () {
        this.navCtrl.navigateBack("dashboard");
    };
    HistoryVeloCdPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    HistoryVeloCdPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    HistoryVeloCdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history-velo-cd',
            template: __webpack_require__(/*! raw-loader!./history-velo-cd.page.html */ "./node_modules/raw-loader/index.js!./src/app/history-velo-cd/history-velo-cd.page.html"),
            styles: [__webpack_require__(/*! ./history-velo-cd.page.scss */ "./src/app/history-velo-cd/history-velo-cd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], HistoryVeloCdPage);
    return HistoryVeloCdPage;
}());



/***/ })

}]);
//# sourceMappingURL=history-velo-cd-history-velo-cd-module-es5.js.map