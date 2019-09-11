(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-history-cd-transaction-history-cd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/transaction-history-cd/transaction-history-cd.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transaction-history-cd/transaction-history-cd.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"hv-toolbar-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\r\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <div>\r\n          <ion-title color=\"light\" class=\"hv-text-size-16\">Transaction History</ion-title>\r\n        </div>\r\n       \r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content fullscreen>\r\n      <div class=\"hv-background\">\r\n\r\n    <ion-col class=\"ion-margin-top\"></ion-col>\r\n    <ion-text color=\"dark\">\r\n      <h1 class=\"ion-text-center\">CD....7087</h1>\r\n    </ion-text>\r\n\r\n    <ion-text color=\"dark\">\r\n        <h2 class=\"ion-text-center\">$1,983.00</h2>\r\n    </ion-text>\r\n  \r\n    <ion-list >\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of cDListData\">\r\n  \r\n        <ion-list-header >\r\n            <ion-col align-self-center text-center > <h3 class=\"ion-text-center \" style=\"color:dark;\">{{p.month}}</h3></ion-col>\r\n        </ion-list-header>\r\n  \r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let dt of p.details\">\r\n        <ion-card>\r\n            <ion-item >\r\n                <ion-avatar >\r\n                    <img src={{dt.url}}>\r\n                </ion-avatar>\r\n  \r\n                <ion-label class=\"ion-margin\">\r\n                <h4>{{dt.title}}</h4>\r\n                <p class=\"hv-text-size-12\">{{dt.status}}</p>\r\n                </ion-label>\r\n                <ion-label class=\"ion-text-right\" >\r\n                    <h4>{{dt.amount}}</h4>\r\n                    <p class=\"hv-text-size-12\">{{dt.date}}</p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card></ion-menu-toggle>\r\n  \r\n       </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n      </div>\r\n  </ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transaction_history_cd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-history-cd.page */ "./src/app/transaction-history-cd/transaction-history-cd.page.ts");







const routes = [
    {
        path: '',
        component: _transaction_history_cd_page__WEBPACK_IMPORTED_MODULE_6__["TransactionHistoryCDPage"]
    }
];
let TransactionHistoryCDPageModule = class TransactionHistoryCDPageModule {
};
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



/***/ }),

/***/ "./src/app/transaction-history-cd/transaction-history-cd.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/transaction-history-cd/transaction-history-cd.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  color: #fff;\n}\n\n.hv-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.hv-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.hv-text-size-12 {\n  font-size: 12px;\n}\n\n.hv-text-size-16 {\n  font-size: 16px;\n}\n\n.hv-text-size-20 {\n  font-size: 20px;\n}\n\n.hv-text-size-10 {\n  font-size: 10px;\n}\n\n.hv-text-align-center {\n  text-align: center;\n}\n\n.hv-padding-left-20 {\n  padding-left: 20px;\n}\n\n.hv-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb24taGlzdG9yeS1jZC9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxcdHJhbnNhY3Rpb24taGlzdG9yeS1jZFxcdHJhbnNhY3Rpb24taGlzdG9yeS1jZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYW5zYWN0aW9uLWhpc3RvcnktY2QvdHJhbnNhY3Rpb24taGlzdG9yeS1jZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFQTtFQUNJLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90cmFuc2FjdGlvbi1oaXN0b3J5LWNkL3RyYW5zYWN0aW9uLWhpc3RvcnktY2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuaHYtYmFja2dyb3VuZHtcclxuICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmh2LXRvb2xiYXItY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHYtdGV4dC1zaXplLTEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uaHYtdGV4dC1zaXplLTE2e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5odi10ZXh0LXNpemUtMjB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5odi10ZXh0LXNpemUtMTB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5odi10ZXh0LWFsaWduLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5odi1wYWRkaW5nLWxlZnQtMjB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHhcclxufVxyXG5cclxuLmh2LXBhZGRpbmctcmlnaHQtMjB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4XHJcbn1cclxuXHJcbmlvbi1saXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNSU7XHJcbn1cclxuLy8gLnRoLXdpZHRoLWNlbnRlcntcclxuLy8gICAgIHdpZHRoOiA0NzBweDtcclxuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbiIsIi5jYXJkLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5odi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmh2LXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xufVxuXG4uaHYtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaHYtdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaHYtdGV4dC1zaXplLTIwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaHYtdGV4dC1zaXplLTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uaHYtdGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5odi1wYWRkaW5nLWxlZnQtMjAge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5odi1wYWRkaW5nLXJpZ2h0LTIwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1JTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let TransactionHistoryCDPage = class TransactionHistoryCDPage {
    constructor(navCtrl, menuCtrl) {
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
TransactionHistoryCDPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
TransactionHistoryCDPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-history-cd',
        template: __webpack_require__(/*! raw-loader!./transaction-history-cd.page.html */ "./node_modules/raw-loader/index.js!./src/app/transaction-history-cd/transaction-history-cd.page.html"),
        styles: [__webpack_require__(/*! ./transaction-history-cd.page.scss */ "./src/app/transaction-history-cd/transaction-history-cd.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], TransactionHistoryCDPage);



/***/ })

}]);
//# sourceMappingURL=transaction-history-cd-transaction-history-cd-module-es2015.js.map