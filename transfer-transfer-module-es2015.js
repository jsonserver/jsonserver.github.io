(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-transfer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/transfer/transfer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transfer/transfer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\r\n        <ion-icon color=\"dark\" name=\"arrow-back\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div>\r\n      <ion-title  color=\"dark\" class=\"tp-text-size-12\">Transfer Money</ion-title>\r\n    </div>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openManageAccounts()\" class=\"pull-right\">\r\n        <ion-icon color=\"dark\" name=\"md-more\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"tp-padding-right-20 tp-padding-left-20\">\r\n    <ion-grid>\r\n      <ion-row justify-content-center align-items-center>\r\n            <ion-col size=\"3\">\r\n              <ion-label class=\" tp-text-size-10\" color=\"dark\">From</ion-label>\r\n            </ion-col>\r\n            <ion-col  size=\"9\">\r\n              <ion-label class=\"tp-text-size-12\" color=\"dark\">My Velo Checking(..8965) <br/> <p class=\"tp-text-size-10\"> Available Balance $10,000.80</p> </ion-label>\r\n            </ion-col>\r\n      </ion-row>\r\n      <ion-row justify-content-center align-items-center>\r\n          <ion-col size=\"3\">\r\n              <ion-label color=\"primary\" class=\" tp-text-size-10\">Send to</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n                  <ion-row (click)=\"openActionmodalsheet()\" align-items-center>\r\n                    <ion-col align-self-center>\r\n                        <ion-label  class=\"tp-text-size-12 tp-label-gray\"> Select Amount</ion-label>\r\n                    </ion-col>\r\n                     <ion-col size=\"1\" align-self-center>  \r\n                           <ion-icon class=\"tp-label-gray\" size=\"small\" name=\"ios-arrow-down\"></ion-icon>\r\n                     </ion-col>\r\n                  </ion-row>\r\n            </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row justify-content-center align-items-center>\r\n          <ion-col size=\"3\">\r\n              <ion-label color=\"dark\" class=\" tp-text-size-10\">Amount</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-input type=\"number\" maxlength=10 min=0 required=\"true\" color=\"dark\" class=\" tp-text-size-12 dollar\"\r\n                placeholder=\"Enter Amount\"></ion-input>\r\n            </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row justify-content-end align-items-center>\r\n          <ion-col size=\"3\">\r\n              <ion-label color=\"dark\" class=\"tp-text-size-10 tp-text-align-start\">Method </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <ion-label class=\"tp-text-size-12\" color=\"dark\">ACH(1-3 Business Days, no fee) <br/> <p class=\"tp-text-size-10\">Remaining Transfer Limit:$9,000.00 </p> </ion-label>\r\n            </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  <div text-center>\r\n    <ion-button class=\"tp-ion-button\">Continue > </ion-button>\r\n  </div>\r\n  <ion-text color=\"primary\" class=\"tp-text-size-10\" text-center>\r\n    <p> Transfer limits & cut off times apply ></p>\r\n  </ion-text>\r\n\r\n  </div>\r\n  \r\n</ion-content>"

/***/ }),

/***/ "./src/app/transfer/transfer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.module.ts ***!
  \*********************************************/
/*! exports provided: TransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transfer_modal_sheet_transfer_modal_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transfer-modal-sheet/transfer-modal-sheet.page */ "./src/app/transfer-modal-sheet/transfer-modal-sheet.page.ts");
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transfer.page */ "./src/app/transfer/transfer.page.ts");
/* harmony import */ var _manage_accounts_manage_accounts_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manage-accounts/manage-accounts.page */ "./src/app/manage-accounts/manage-accounts.page.ts");









const routes = [
    {
        path: '',
        component: _transfer_page__WEBPACK_IMPORTED_MODULE_7__["TransferPage"]
    }
];
let TransferPageModule = class TransferPageModule {
};
TransferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_transfer_page__WEBPACK_IMPORTED_MODULE_7__["TransferPage"], _transfer_modal_sheet_transfer_modal_sheet_page__WEBPACK_IMPORTED_MODULE_6__["TransferModalSheetPage"], _manage_accounts_manage_accounts_page__WEBPACK_IMPORTED_MODULE_8__["ManageAccountsPage"]],
        entryComponents: [_transfer_modal_sheet_transfer_modal_sheet_page__WEBPACK_IMPORTED_MODULE_6__["TransferModalSheetPage"], _manage_accounts_manage_accounts_page__WEBPACK_IMPORTED_MODULE_8__["ManageAccountsPage"]]
    })
], TransferPageModule);



/***/ }),

/***/ "./src/app/transfer/transfer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tp-text-size-10 {\n  font-size: 10px;\n}\n\n.tp-text-size-12 {\n  font-size: 12px;\n}\n\n.tp-text-align-end {\n  text-align: end;\n}\n\n.tp-text-align-start {\n  text-align: start;\n}\n\n.tp-text-align-center {\n  text-align: center;\n}\n\n.tp-padding-right-20 {\n  padding-right: 20px;\n}\n\n.tp-padding-left-20 {\n  padding-left: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\n.tp-ion-button {\n  --border-width: 1px!important;\n  font-size: 0.7em;\n  --border-radius:0px;\n  width: 88%;\n  text-transform: capitalize;\n}\n\n.dollar:before {\n  content: \"$\";\n}\n\n.dollar:after {\n  content: \"USD\";\n}\n\n.tp-label-gray {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNmZXIvQzpcXFVzZXJzXFxzaHdldGEua1xcSW9uaWNQcm9qZWN0c1xcbWJhbmsvc3JjXFxhcHBcXHRyYW5zZmVyXFx0cmFuc2Zlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYW5zZmVyL3RyYW5zZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0FDTUo7O0FESkE7RUFDSSx3Q0FBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtBQ1FKOztBRE5BO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDU0o7O0FEUEE7RUFDUSxZQUFBO0FDVVI7O0FEUkE7RUFDUSxjQUFBO0FDV1I7O0FEVEE7RUFDQSxXQUFBO0FDWUEiLCJmaWxlIjoic3JjL2FwcC90cmFuc2Zlci90cmFuc2Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHAtdGV4dC1zaXplLTEwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi50cC10ZXh0LXNpemUtMTJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnRwLXRleHQtYWxpZ24tZW5ke1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG5cclxufVxyXG4udHAtdGV4dC1hbGlnbi1zdGFydHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcbi50cC10ZXh0LWFsaWduLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udHAtcGFkZGluZy1yaWdodC0yMHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcclxufVxyXG4udHAtcGFkZGluZy1sZWZ0LTIwe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gICAgY29sb3I6Z3JheTtcclxufVxyXG4udHAtaW9uLWJ1dHRvbntcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICB3aWR0aDo4OCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uZG9sbGFyOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCIkXCI7XHJcbn1cclxuLmRvbGxhcjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJVU0RcIjtcclxufVxyXG4udHAtbGFiZWwtZ3JheXtcclxuY29sb3I6IGdyYXlcclxufSIsIi50cC10ZXh0LXNpemUtMTAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi50cC10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50cC10ZXh0LWFsaWduLWVuZCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLnRwLXRleHQtYWxpZ24tc3RhcnQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnRwLXRleHQtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHAtcGFkZGluZy1yaWdodC0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi50cC1wYWRkaW5nLWxlZnQtMjAge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnRwLWlvbi1idXR0b24ge1xuICAtLWJvcmRlci13aWR0aDogMXB4IWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgd2lkdGg6IDg4JTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5kb2xsYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCIkXCI7XG59XG5cbi5kb2xsYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlVTRFwiO1xufVxuXG4udHAtbGFiZWwtZ3JheSB7XG4gIGNvbG9yOiBncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/transfer/transfer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/transfer/transfer.page.ts ***!
  \*******************************************/
/*! exports provided: TransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPage", function() { return TransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_accounts_manage_accounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manage-accounts/manage-accounts.page */ "./src/app/manage-accounts/manage-accounts.page.ts");
/* harmony import */ var _transfer_modal_sheet_transfer_modal_sheet_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transfer-modal-sheet/transfer-modal-sheet.page */ "./src/app/transfer-modal-sheet/transfer-modal-sheet.page.ts");





let TransferPage = class TransferPage {
    constructor(modalController, navCtrl, menuCtrl) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    openActionmodalsheet() {
        this.openModel();
    }
    openModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myModel = yield this.modalController.create({
                component: _transfer_modal_sheet_transfer_modal_sheet_page__WEBPACK_IMPORTED_MODULE_4__["TransferModalSheetPage"],
                cssClass: 'transfer-modal-css'
            });
            yield myModel.present();
        });
    }
    openManageAccounts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myModel = yield this.modalController.create({
                component: _manage_accounts_manage_accounts_page__WEBPACK_IMPORTED_MODULE_3__["ManageAccountsPage"],
                cssClass: 'manage-account-modal-css'
            });
            yield myModel.present();
        });
    }
    goToDashboard() {
        this.navCtrl.navigateBack("dashboard");
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
};
TransferPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
TransferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transfer',
        template: __webpack_require__(/*! raw-loader!./transfer.page.html */ "./node_modules/raw-loader/index.js!./src/app/transfer/transfer.page.html"),
        styles: [__webpack_require__(/*! ./transfer.page.scss */ "./src/app/transfer/transfer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], TransferPage);



/***/ })

}]);
//# sourceMappingURL=transfer-transfer-module-es2015.js.map