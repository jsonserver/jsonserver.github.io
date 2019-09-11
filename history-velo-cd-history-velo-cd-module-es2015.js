(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-velo-cd-history-velo-cd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/history-velo-cd/history-velo-cd.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/history-velo-cd/history-velo-cd.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"hv-toolbar-color\" >\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\r\n          <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <div>\r\n        <ion-title color=\"light\" class=\"hv-text-size-12\">Velo CD</ion-title>\r\n      </div>\r\n    </ion-toolbar>\r\n   </ion-header>\r\n\r\n<ion-content fullscreen >\r\n    <div class=\"hv-background\">\r\n    <ion-text color=\"light\" >\r\n        <p class=\"ion-text-center hv-text-size-16\">Certificate of Deposit (CD)</p>\r\n    </ion-text>\r\n\r\n    <ion-text color=\"light\" >\r\n        <p class=\"ion-text-left hv-text-size-12 hv-padding-left-20 hv-padding-right-20\">Velo CD is a fixed interest rate account that provides you the flexibility of selecting the deposite term and amount that works best for you. Withdrawals from a CD account before term maturity will incur early withdrawal penalty.</p>\r\n    </ion-text>\r\n    <ion-col class=\"ion-margin-top\"></ion-col>\r\n    <ion-button expand=\"full\" color=\"teal hv-padding-left-20 hv-padding-right-20\">\r\n        <p style=\"color:darkslategrey;\">\r\n      Get started ></p>\r\n    </ion-button>\r\n\r\n    <ion-col class=\"ion-margin-top\"></ion-col>\r\n    <ion-text color=\"light\"><p class=\"ion-text-center hv-text-size-16\">Key features</p></ion-text>\r\n\r\n    <ul><li class=\"ion-list hv-text-size-12\" style=\"color:white;\" >No monthly maintenance fee</li> </ul>\r\n    <ul><li class=\"ion-list hv-text-size-12\" style=\"color:white;\" >Fixed Interest rates;compounded daily</li> </ul>\r\n    <ul><li class=\"ion-list hv-text-size-12\" style=\"color:white;\" >Minimum opening balance of $1000</li> </ul>\r\n    <ul><li class=\"ion-list hv-text-size-12\" style=\"color:white;\" >Automatic renewal on term maturity</li> </ul>\r\n    <ul><li class=\"ion-list hv-text-size-12\" style=\"color:white;\" >Flecible term from 32 days to 5 years</li> </ul>\r\n    </div>  \r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_velo_cd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-velo-cd.page */ "./src/app/history-velo-cd/history-velo-cd.page.ts");







const routes = [
    {
        path: '',
        component: _history_velo_cd_page__WEBPACK_IMPORTED_MODULE_6__["HistoryVeloCdPage"]
    }
];
let HistoryVeloCdPageModule = class HistoryVeloCdPageModule {
};
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



/***/ }),

/***/ "./src/app/history-velo-cd/history-velo-cd.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/history-velo-cd/history-velo-cd.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hv-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.hv-toolbar-color {\n  --background:#001e65 0% !important;\n}\n\n.hv-text-size-12 {\n  font-size: 12px;\n}\n\n.hv-text-size-16 {\n  font-size: 16px;\n}\n\n.hv-text-align-center {\n  text-align: center;\n}\n\n.hv-padding-left-20 {\n  padding-left: 20px;\n}\n\n.hv-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS12ZWxvLWNkL0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxoaXN0b3J5LXZlbG8tY2RcXGhpc3RvcnktdmVsby1jZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hpc3RvcnktdmVsby1jZC9oaXN0b3J5LXZlbG8tY2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEpBQUE7RUFBQSxzR0FBQTtFQUtBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLGtDQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0FDSEo7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURNQTtFQUNJLG1CQUFBO0FDSEo7O0FETUE7RUFDSSx3Q0FBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5LXZlbG8tY2QvaGlzdG9yeS12ZWxvLWNkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5odi1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZCA6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLDMwLDEwMSkgMCUscmdiYSg1NywxMjYsMTQ5KSAxMDAlLFxyXG4gICAgXHJcbiAgICByZ2JhKDI5LDI5LDI5LDEpIDMzLjMzJSxcclxuICAgIFxyXG4gICAgcmdiYSgwLDExMSwxNDcpIDEwMCUpIWltcG9ydGFudDsgIFxyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5odi10b29sYmFyLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDFlNjUgMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmh2LXRleHQtc2l6ZS0xMntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmh2LXRleHQtc2l6ZS0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaHYtdGV4dC1hbGlnbi1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uaHYtcGFkZGluZy1sZWZ0LTIwe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4XHJcbn1cclxuXHJcbi5odi1wYWRkaW5nLXJpZ2h0LTIwe1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweFxyXG59XHJcblxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIuaHYtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDFlNjUgMCUsICMzOTdlOTUgMTAwJSwgIzFkMWQxZCAzMy4zMyUsICMwMDZmOTMgMTAwJSkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmh2LXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwMWU2NSAwJSAhaW1wb3J0YW50O1xufVxuXG4uaHYtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaHYtdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaHYtdGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5odi1wYWRkaW5nLWxlZnQtMjAge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5odi1wYWRkaW5nLXJpZ2h0LTIwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1JTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let HistoryVeloCdPage = class HistoryVeloCdPage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    goToDashboard() {
        this.navCtrl.navigateBack("dashboard");
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
};
HistoryVeloCdPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
HistoryVeloCdPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-velo-cd',
        template: __webpack_require__(/*! raw-loader!./history-velo-cd.page.html */ "./node_modules/raw-loader/index.js!./src/app/history-velo-cd/history-velo-cd.page.html"),
        styles: [__webpack_require__(/*! ./history-velo-cd.page.scss */ "./src/app/history-velo-cd/history-velo-cd.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], HistoryVeloCdPage);



/***/ })

}]);
//# sourceMappingURL=history-velo-cd-history-velo-cd-module-es2015.js.map