(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-history-cd-transaction-history-cd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/transaction-history-cd/transaction-history-cd.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transaction-history-cd/transaction-history-cd.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"hv-toolbar-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\r\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <div>\r\n          <ion-title color=\"light\" class=\"hv-text-size-12\">Transaction History</ion-title>\r\n        </div>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button class=\"pull-right\">\r\n              <ion-icon color=\"light\" name=\"md-more\" ></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content fullscreen>\r\n      <div class=\"hv-background\">\r\n\r\n    <ion-col class=\"ion-margin-top\"></ion-col>\r\n    <ion-text color=\"light\">\r\n      <h2 class=\"ion-text-center hv-text-size-16\">CD....7087</h2>\r\n    </ion-text>\r\n\r\n    <ion-text color=\"light\">\r\n        <h2 class=\"ion-text-center hv-text-size-16\">$10,0130,239</h2>\r\n    </ion-text>\r\n  \r\n    <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of cDListData\">\r\n  \r\n        <ion-list-header >\r\n            <ion-col align-self-center text-center > <h2 class=\"ion-text-center hv-text-size-16\" style=\"color:white;\">{{p.month}}</h2></ion-col>\r\n        </ion-list-header>\r\n  \r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let dt of p.details\">\r\n        <ion-card>\r\n            <ion-item >\r\n                <ion-avatar >\r\n                    <img src={{dt.url}}>\r\n                </ion-avatar>\r\n  \r\n                <ion-label class=\"ion-margin\">\r\n                <h2 class=\"hv-text-size-12\">{{dt.title}}</h2>\r\n                <p class=\"hv-text-size-10\">{{dt.status}}</p>\r\n                </ion-label>\r\n                <ion-label class=\"ion-text-right\" >\r\n                    <h2 class=\"hv-text-size-12\">{{dt.amount}}</h2>\r\n                    <p class=\"hv-text-size-10\">{{dt.date}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card></ion-menu-toggle>\r\n  \r\n       </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n      </div>\r\n  </ion-content>\r\n"

/***/ }),

/***/ "./src/app/transaction-history-cd/transaction-history-cd.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/transaction-history-cd/transaction-history-cd.module.ts ***!
  \*************************************************************************/
/*! exports provided: TransactionHistoryCDPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryCDPageModule", function() { return TransactionHistoryCDPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transaction_history_cd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-history-cd.page */ "./src/app/transaction-history-cd/transaction-history-cd.page.ts");







var routes = [
    {
        path: '',
        component: _transaction_history_cd_page__WEBPACK_IMPORTED_MODULE_6__["TransactionHistoryCDPage"]
    }
];
var TransactionHistoryCDPageModule = /** @class */ (function () {
    function TransactionHistoryCDPageModule() {
    }
    TransactionHistoryCDPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_transaction_history_cd_page__WEBPACK_IMPORTED_MODULE_6__["TransactionHistoryCDPage"]]
        })
    ], TransactionHistoryCDPageModule);
    return TransactionHistoryCDPageModule;
}());



/***/ }),

/***/ "./src/app/transaction-history-cd/transaction-history-cd.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/transaction-history-cd/transaction-history-cd.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hv-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.hv-toolbar-color {\n  --background:#001e65 0% !important;\n}\n\n.hv-text-size-12 {\n  font-size: 12px;\n}\n\n.hv-text-size-16 {\n  font-size: 16px;\n}\n\n.hv-text-size-10 {\n  font-size: 10px;\n}\n\n.hv-text-align-center {\n  text-align: center;\n}\n\n.hv-padding-left-20 {\n  padding-left: 20px;\n}\n\n.hv-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb24taGlzdG9yeS1jZC9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxcdHJhbnNhY3Rpb24taGlzdG9yeS1jZFxcdHJhbnNhY3Rpb24taGlzdG9yeS1jZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYW5zYWN0aW9uLWhpc3RvcnktY2QvdHJhbnNhY3Rpb24taGlzdG9yeS1jZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwSkFBQTtFQUFBLHNHQUFBO0VBS0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksa0NBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FET0E7RUFDSSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksbUJBQUE7QUNKSjs7QURPQTtFQUNJLHdDQUFBO0FDSko7O0FET0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uLWhpc3RvcnktY2QvdHJhbnNhY3Rpb24taGlzdG9yeS1jZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHYtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQgOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwzMCwxMDEpIDAlLHJnYmEoNTcsMTI2LDE0OSkgMTAwJSxcclxuICAgIFxyXG4gICAgcmdiYSgyOSwyOSwyOSwxKSAzMy4zMyUsXHJcbiAgICBcclxuICAgIHJnYmEoMCwxMTEsMTQ3KSAxMDAlKSFpbXBvcnRhbnQ7ICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uaHYtdG9vbGJhci1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojMDAxZTY1IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5odi10ZXh0LXNpemUtMTJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5odi10ZXh0LXNpemUtMTZ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5odi10ZXh0LXNpemUtMTB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5odi10ZXh0LWFsaWduLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5odi1wYWRkaW5nLWxlZnQtMjB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHhcclxufVxyXG5cclxuLmh2LXBhZGRpbmctcmlnaHQtMjB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4XHJcbn1cclxuXHJcbmlvbi1saXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNSU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIi5odi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMWU2NSAwJSwgIzM5N2U5NSAxMDAlLCAjMWQxZDFkIDMzLjMzJSwgIzAwNmY5MyAxMDAlKSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaHYtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDAxZTY1IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5odi10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5odi10ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmh2LXBhZGRpbmctbGVmdC0yMCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmh2LXBhZGRpbmctcmlnaHQtMjAge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/transaction-history-cd/transaction-history-cd.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/transaction-history-cd/transaction-history-cd.page.ts ***!
  \***********************************************************************/
/*! exports provided: TransactionHistoryCDPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryCDPage", function() { return TransactionHistoryCDPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TransactionHistoryCDPage = /** @class */ (function () {
    function TransactionHistoryCDPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.cDListData = [
            {
                month: 'August',
                details: [
                    {
                        title: 'Other Debit',
                        status: 'Completed',
                        amount: '-$1,000.00',
                        url: '/assets/icon/favicon.png',
                        icon: 'image',
                        date: 'Aug 22'
                    },
                    {
                        title: 'Other Credit',
                        status: 'Completed',
                        amount: '$3,784.10',
                        url: '/assets/icon/favicon.png',
                        icon: 'image',
                        date: 'Aug 24'
                    }
                ]
            }
        ];
    }
    TransactionHistoryCDPage.prototype.ngOnInit = function () {
    };
    TransactionHistoryCDPage.prototype.goToDashboard = function () {
        this.navCtrl.navigateBack("dashboard");
    };
    TransactionHistoryCDPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    TransactionHistoryCDPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    TransactionHistoryCDPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transaction-history-cd',
            template: __webpack_require__(/*! raw-loader!./transaction-history-cd.page.html */ "./node_modules/raw-loader/index.js!./src/app/transaction-history-cd/transaction-history-cd.page.html"),
            styles: [__webpack_require__(/*! ./transaction-history-cd.page.scss */ "./src/app/transaction-history-cd/transaction-history-cd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], TransactionHistoryCDPage);
    return TransactionHistoryCDPage;
}());



/***/ })

}]);
//# sourceMappingURL=transaction-history-cd-transaction-history-cd-module-es5.js.map