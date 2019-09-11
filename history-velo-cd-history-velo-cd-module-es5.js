(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-velo-cd-history-velo-cd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/history-velo-cd/history-velo-cd.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history-velo-cd/history-velo-cd.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"hv-toolbar-color\" >\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\r\n          <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <div>\r\n        <ion-title color=\"light\" class=\"hv-text-size-16\">mBank CD</ion-title>\r\n      </div>\r\n\r\n      <ion-buttons slot=\"end\">\r\n          <ion-button class=\"pull-right\" >\r\n            <ion-icon color=\"light\"  ></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n   </ion-header>\r\n\r\n<ion-content fullscreen >\r\n    <div class=\"hv-background\">\r\n        <ion-col class=\"ion-margin-top\"></ion-col>\r\n\r\n    <ion-text color=\"dark\" >\r\n        <h3 class=\"ion-text-center\">Certificate of Deposit (CD)</h3>\r\n    </ion-text>\r\n\r\n    <ion-text color=\"dark\" >\r\n        <p class=\"ion-text-left hv-text-size-12 hv-padding-left-20 hv-padding-right-20\">mBank CD is a fixed interest rate account that provides you the flexibility of selecting the deposite term and amount that works best for you. Withdrawals from a CD account before term maturity will incur early withdrawal penalty.</p>\r\n    </ion-text>\r\n    <ion-col class=\"ion-margin-top\"></ion-col>\r\n    <ion-button expand=\"full\" color=\"primary hv-padding-left-20 hv-padding-right-20\" (click)=\"goToDashboard()\">\r\n        <p style=\"color:white;\">\r\n      Get started ></p>\r\n    </ion-button>\r\n\r\n    <ion-col class=\"ion-margin-top\"></ion-col>\r\n    <ion-text color=\"dark\"><h3 class=\"ion-text-center\">Key features</h3></ion-text>\r\n\r\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >No monthly maintenance fee</li> </ul>\r\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >Fixed Interest rates;compounded daily</li> </ul>\r\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >Minimum opening balance of $1000</li> </ul>\r\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >Automatic renewal on term maturity</li> </ul>\r\n    <ul><li class=\"ion-list hv-text-size-16\" style=\"color:dark;\" >Flecible term from 32 days to 5 years</li> </ul>\r\n    </div>  \r\n</ion-content>\r\n"

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

module.exports = ".card-title {\n  color: #fff;\n}\n\n.hv-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.hv-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.hv-text-size-12 {\n  font-size: 12px;\n}\n\n.hv-text-size-16 {\n  font-size: 16px;\n}\n\n.hv-text-size-20 {\n  font-size: 20px;\n}\n\n.hv-text-size-10 {\n  font-size: 10px;\n}\n\n.hv-text-align-center {\n  text-align: center;\n}\n\n.hv-padding-left-20 {\n  padding-left: 20px;\n}\n\n.hv-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS12ZWxvLWNkL0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxoaXN0b3J5LXZlbG8tY2RcXGhpc3RvcnktdmVsby1jZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hpc3RvcnktdmVsby1jZC9oaXN0b3J5LXZlbG8tY2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ047O0FERUE7RUFDSSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0NBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS12ZWxvLWNkL2hpc3RvcnktdmVsby1jZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5odi1iYWNrZ3JvdW5ke1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uaHYtdG9vbGJhci1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5odi10ZXh0LXNpemUtMTJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5odi10ZXh0LXNpemUtMTZ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmh2LXRleHQtc2l6ZS0yMHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmh2LXRleHQtc2l6ZS0xMHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmh2LXRleHQtYWxpZ24tY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmh2LXBhZGRpbmctbGVmdC0yMHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweFxyXG59XHJcblxyXG4uaHYtcGFkZGluZy1yaWdodC0yMHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiA1JTtcclxufVxyXG4iLCIuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaHYtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5odi10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmh2LXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmh2LXRleHQtc2l6ZS0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmh2LXRleHQtc2l6ZS0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmh2LXRleHQtc2l6ZS0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmh2LXRleHQtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaHYtcGFkZGluZy1sZWZ0LTIwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaHYtcGFkZGluZy1yaWdodC0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNSU7XG59Il19 */"

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