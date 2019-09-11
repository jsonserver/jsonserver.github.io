(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-history-checking-transaction-history-checking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/transaction-history-checking/transaction-history-checking.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transaction-history-checking/transaction-history-checking.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"hv-toolbar-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\r\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <div>\r\n          <ion-title color=\"light\" class=\"hv-text-size-12\">Transaction History</ion-title>\r\n        </div>\r\n        <ion-buttons slot=\"primary\">\r\n            <ion-button class=\"pull-right\">\r\n              <ion-icon color=\"light\" name=\"md-more\" ></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content fullscreen>\r\n    <div class=\"hv-background\">\r\n\r\n  <ion-col class=\"ion-margin-top\"></ion-col>\r\n  <ion-text color=\"light\">\r\n    <h2 class=\"ion-text-center hv-text-size-16\">CHECKING....8956</h2>\r\n  </ion-text>\r\n  <ion-text color=\"light\">\r\n      <h2 class=\"ion-text-center hv-text-size-16\">$10,0130,239</h2>\r\n  </ion-text>\r\n\r\n  <ion-list>\r\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of listData\">\r\n\r\n      <ion-list-header >\r\n          <ion-col align-self-center text-center > <h2 class=\"ion-text-center hv-text-size-16\" style=\"color:white;\">{{p.month}}</h2></ion-col>\r\n      </ion-list-header>\r\n\r\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let dt of p.details\">\r\n      <ion-card>\r\n          <ion-item >\r\n              <ion-avatar >\r\n                  <img src={{dt.url}}>\r\n              </ion-avatar>\r\n\r\n              <ion-label class=\"ion-margin\">\r\n              <h2 class=\"hv-text-size-12\">{{dt.title}}</h2>\r\n              <p class=\"hv-text-size-10\">{{dt.status}}</p>\r\n              </ion-label>\r\n              <ion-label class=\"ion-text-right\" >\r\n                  <h2 class=\"hv-text-size-12\">{{dt.amount}}</h2>\r\n                  <p class=\"hv-text-size-10\">{{dt.date}}</p>\r\n              </ion-label>\r\n          </ion-item>\r\n      </ion-card></ion-menu-toggle>\r\n\r\n     </ion-menu-toggle>\r\n    </ion-list>\r\n    \r\n\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/transaction-history-checking/transaction-history-checking.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/transaction-history-checking/transaction-history-checking.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TransactionHistoryCheckingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryCheckingPageModule", function() { return TransactionHistoryCheckingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transaction_history_checking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-history-checking.page */ "./src/app/transaction-history-checking/transaction-history-checking.page.ts");







const routes = [
    {
        path: '',
        component: _transaction_history_checking_page__WEBPACK_IMPORTED_MODULE_6__["TransactionHistoryCheckingPage"]
    }
];
let TransactionHistoryCheckingPageModule = class TransactionHistoryCheckingPageModule {
};
TransactionHistoryCheckingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_transaction_history_checking_page__WEBPACK_IMPORTED_MODULE_6__["TransactionHistoryCheckingPage"]]
    })
], TransactionHistoryCheckingPageModule);



/***/ }),

/***/ "./src/app/transaction-history-checking/transaction-history-checking.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/transaction-history-checking/transaction-history-checking.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  color: #fff;\n}\n\n.hv-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.hv-toolbar-color {\n  --background:#001e65 0% !important;\n}\n\n.hv-text-size-12 {\n  font-size: 12px;\n}\n\n.hv-text-size-16 {\n  font-size: 16px;\n}\n\n.hv-text-size-10 {\n  font-size: 10px;\n}\n\n.hv-text-align-center {\n  text-align: center;\n}\n\n.hv-padding-left-20 {\n  padding-left: 20px;\n}\n\n.hv-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb24taGlzdG9yeS1jaGVja2luZy9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxcdHJhbnNhY3Rpb24taGlzdG9yeS1jaGVja2luZ1xcdHJhbnNhY3Rpb24taGlzdG9yeS1jaGVja2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYW5zYWN0aW9uLWhpc3RvcnktY2hlY2tpbmcvdHJhbnNhY3Rpb24taGlzdG9yeS1jaGVja2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSwwSkFBQTtFQUFBLHNHQUFBO0VBS0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksa0NBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FET0E7RUFDSSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksbUJBQUE7QUNKSjs7QURPQTtFQUNJLHdDQUFBO0FDSko7O0FET0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uLWhpc3RvcnktY2hlY2tpbmcvdHJhbnNhY3Rpb24taGlzdG9yeS1jaGVja2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5odi1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZCA6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLDMwLDEwMSkgMCUscmdiYSg1NywxMjYsMTQ5KSAxMDAlLFxyXG4gICAgXHJcbiAgICByZ2JhKDI5LDI5LDI5LDEpIDMzLjMzJSxcclxuICAgIFxyXG4gICAgcmdiYSgwLDExMSwxNDcpIDEwMCUpIWltcG9ydGFudDsgIFxyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5odi10b29sYmFyLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDFlNjUgMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmh2LXRleHQtc2l6ZS0xMntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmh2LXRleHQtc2l6ZS0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmh2LXRleHQtc2l6ZS0xMHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmh2LXRleHQtYWxpZ24tY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmh2LXBhZGRpbmctbGVmdC0yMHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweFxyXG59XHJcblxyXG4uaHYtcGFkZGluZy1yaWdodC0yMHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiA1JTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLmNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmh2LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAxZTY1IDAlLCAjMzk3ZTk1IDEwMCUsICMxZDFkMWQgMzMuMzMlLCAjMDA2ZjkzIDEwMCUpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5odi10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDFlNjUgMCUgIWltcG9ydGFudDtcbn1cblxuLmh2LXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmh2LXRleHQtc2l6ZS0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmh2LXRleHQtc2l6ZS0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmh2LXRleHQtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaHYtcGFkZGluZy1sZWZ0LTIwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaHYtcGFkZGluZy1yaWdodC0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/transaction-history-checking/transaction-history-checking.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/transaction-history-checking/transaction-history-checking.page.ts ***!
  \***********************************************************************************/
/*! exports provided: TransactionHistoryCheckingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionHistoryCheckingPage", function() { return TransactionHistoryCheckingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let TransactionHistoryCheckingPage = class TransactionHistoryCheckingPage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.listData = [
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
                    },
                    {
                        title: 'Other Debit',
                        status: 'Pending',
                        amount: '-$1,122.00',
                        url: '/assets/icon/favicon.png',
                        icon: 'image',
                        date: 'Aug 27'
                    }
                ]
            },
            {
                month: 'July',
                details: [
                    {
                        title: 'Other Credit',
                        status: 'Completed',
                        amount: '$3,788.10',
                        url: '/assets/icon/favicon.png',
                        icon: 'image',
                        date: 'jul 31'
                    }
                ]
            },
            {
                month: 'June',
                details: [
                    {
                        title: 'Other Credit',
                        status: 'Pending',
                        amount: '$1,788.10',
                        url: '/assets/icon/favicon.png',
                        icon: 'image',
                        date: 'jun 11'
                    }
                ]
            }
        ];
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
TransactionHistoryCheckingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
TransactionHistoryCheckingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-history-checking',
        template: __webpack_require__(/*! raw-loader!./transaction-history-checking.page.html */ "./node_modules/raw-loader/index.js!./src/app/transaction-history-checking/transaction-history-checking.page.html"),
        styles: [__webpack_require__(/*! ./transaction-history-checking.page.scss */ "./src/app/transaction-history-checking/transaction-history-checking.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], TransactionHistoryCheckingPage);



/***/ })

}]);
//# sourceMappingURL=transaction-history-checking-transaction-history-checking-module-es2015.js.map