(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-history-checking-transaction-history-checking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/transaction-history-checking/transaction-history-checking.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transaction-history-checking/transaction-history-checking.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar class=\"hv-toolbar-color\">\n      <ion-buttons slot=\"start\">\n          <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <div>\n          <ion-title color=\"light\" class=\"hv-text-size-16\">Transaction History</ion-title>\n        </div>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n    <div class=\"hv-background\">\n\n  <ion-col class=\"ion-margin-top\"></ion-col>\n  <ion-text color=\"dark\">\n    <h1 class=\"ion-text-center\">CHECKING....8956</h1>\n  </ion-text>\n  <ion-text color=\"dark\">\n      <h2 class=\"ion-text-center\">$10,0130,239</h2>\n  </ion-text>\n\n  <ion-list>\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of listData\">\n\n      <ion-list-header >\n          <ion-col align-self-center text-center > <h3 class=\"ion-text-center\" style=\"color:dark;\">{{p.month}}</h3></ion-col>\n      </ion-list-header>\n\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let dt of p.details\">\n      <ion-card>\n          <ion-item >\n              <ion-avatar >\n                  <img src={{dt.url}}>\n              </ion-avatar>\n\n              <ion-label class=\"ion-margin\">\n              <h4 >{{dt.title}}</h4>\n              <p class=\"hv-text-size-12\">{{dt.status}}</p>\n              </ion-label>\n              <ion-label class=\"ion-text-right\" >\n                  <h4 >{{dt.amount}}</h4>\n                  <p class=\"hv-text-size-12\">{{dt.date}}</p>\n              </ion-label>\n          </ion-item>\n      </ion-card></ion-menu-toggle>\n\n     </ion-menu-toggle>\n    </ion-list>\n    \n\n    </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transaction_history_checking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-history-checking.page */ "./src/app/transaction-history-checking/transaction-history-checking.page.ts");







var routes = [
    {
        path: '',
        component: _transaction_history_checking_page__WEBPACK_IMPORTED_MODULE_6__["TransactionHistoryCheckingPage"]
    }
];
var TransactionHistoryCheckingPageModule = /** @class */ (function () {
    function TransactionHistoryCheckingPageModule() {
    }
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
    return TransactionHistoryCheckingPageModule;
}());



/***/ }),

/***/ "./src/app/transaction-history-checking/transaction-history-checking.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/transaction-history-checking/transaction-history-checking.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  color: #fff;\n}\n\n.hv-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.hv-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.hv-text-size-12 {\n  font-size: 12px;\n}\n\n.hv-text-size-16 {\n  font-size: 16px;\n}\n\n.hv-text-size-20 {\n  font-size: 20px;\n}\n\n.hv-text-size-10 {\n  font-size: 10px;\n}\n\n.hv-text-align-center {\n  text-align: center;\n}\n\n.hv-padding-left-20 {\n  padding-left: 20px;\n}\n\n.hv-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvdHJhbnNhY3Rpb24taGlzdG9yeS1jaGVja2luZy90cmFuc2FjdGlvbi1oaXN0b3J5LWNoZWNraW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdHJhbnNhY3Rpb24taGlzdG9yeS1jaGVja2luZy90cmFuc2FjdGlvbi1oaXN0b3J5LWNoZWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NOOztBREVBO0VBQ0ksa0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uLWhpc3RvcnktY2hlY2tpbmcvdHJhbnNhY3Rpb24taGlzdG9yeS1jaGVja2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuaHYtYmFja2dyb3VuZHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmh2LXRvb2xiYXItY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmh2LXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTZ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmh2LXRleHQtc2l6ZS0yMHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uaHYtdGV4dC1hbGlnbi1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5odi1wYWRkaW5nLWxlZnQtMjB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4XG59XG5cbi5odi1wYWRkaW5nLXJpZ2h0LTIwe1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcbn1cblxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGV7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiA1JTtcbn1cblxuXG5cblxuIiwiLmNhcmQtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmh2LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaHYtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5odi10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5odi10ZXh0LXNpemUtMjAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5odi10ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmh2LXBhZGRpbmctbGVmdC0yMCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmh2LXBhZGRpbmctcmlnaHQtMjAge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDUlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TransactionHistoryCheckingPage = /** @class */ (function () {
    function TransactionHistoryCheckingPage(navCtrl, menuCtrl) {
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
                        url: '/assets/credit-card.svg',
                        icon: 'image',
                        date: 'Aug 22'
                    },
                    {
                        title: 'Other Credit',
                        status: 'Completed',
                        amount: '$3,784.10',
                        url: '/assets/credit-card.svg',
                        icon: 'image',
                        date: 'Aug 24'
                    },
                    {
                        title: 'Other Debit',
                        status: 'Pending',
                        amount: '-$1,122.00',
                        url: '/assets/credit-card.svg',
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
                        url: '/assets/credit-card.svg',
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
                        url: '/assets/credit-card.svg',
                        icon: 'image',
                        date: 'jun 11'
                    }
                ]
            }
        ];
    }
    TransactionHistoryCheckingPage.prototype.ngOnInit = function () {
    };
    TransactionHistoryCheckingPage.prototype.goToDashboard = function () {
        this.navCtrl.navigateBack("dashboard");
    };
    TransactionHistoryCheckingPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    TransactionHistoryCheckingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    TransactionHistoryCheckingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transaction-history-checking',
            template: __webpack_require__(/*! raw-loader!./transaction-history-checking.page.html */ "./node_modules/raw-loader/index.js!./src/app/transaction-history-checking/transaction-history-checking.page.html"),
            styles: [__webpack_require__(/*! ./transaction-history-checking.page.scss */ "./src/app/transaction-history-checking/transaction-history-checking.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], TransactionHistoryCheckingPage);
    return TransactionHistoryCheckingPage;
}());



/***/ })

}]);
//# sourceMappingURL=transaction-history-checking-transaction-history-checking-module-es5.js.map