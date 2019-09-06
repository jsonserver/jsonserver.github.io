(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-transfer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/transfer/transfer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transfer/transfer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"pull-left\" (click)=\"goToDashboard()\">\n        <ion-icon color=\"dark\" name=\"ios-arrow-back\"  ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div>\n      <ion-title  color=\"dark\" class=\"tp-text-size-12\">Transfer Money</ion-title>\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openManageAccounts()\" class=\"pull-right\">\n        <ion-icon color=\"dark\" name=\"md-more\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"tp-padding-right-20 tp-padding-left-20\">\n    <ion-grid>\n      <ion-row justify-content-center align-items-center>\n            <ion-col size=\"3\">\n              <ion-label class=\" tp-text-size-10\" color=\"dark\">From</ion-label>\n            </ion-col>\n            <ion-col  size=\"9\">\n              <ion-label class=\"tp-text-size-10\" color=\"dark\">My Velo Checking(..8965) <br/> <p class=\"tp-text-size-10\"> Available Balance $10,000.80</p> </ion-label>\n            </ion-col>\n      </ion-row>\n      <ion-row justify-content-center align-items-center>\n          <ion-col size=\"3\">\n              <ion-label color=\"dark\" class=\" tp-text-size-10\">Send to</ion-label>\n            </ion-col>\n            <ion-col size=\"9\">\n                  <ion-row (click)=\"openActionmodalsheet()\" align-items-center>\n                    <ion-col align-self-center>\n                        <ion-label  class=\"tp-text-size-10 tp-label-gray\"> Select Amount</ion-label>\n                    </ion-col>\n                     <ion-col size=\"1\" align-self-center>  \n                           <ion-icon class=\"tp-label-gray\" size=\"small\" name=\"ios-arrow-down\"></ion-icon>\n                     </ion-col>\n                  </ion-row>\n            </ion-col>\n      </ion-row>\n\n      <ion-row justify-content-center align-items-center>\n          <ion-col size=\"3\">\n              <ion-label color=\"dark\" class=\" tp-text-size-10\">Amount</ion-label>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-input type=\"number\" maxlength=10 min=0 required=\"true\" color=\"dark\" class=\" tp-text-size-10 dollar\"\n                placeholder=\"Enter Amount\"></ion-input>\n            </ion-col>\n      </ion-row>\n\n      <ion-row justify-content-end align-items-center>\n          <ion-col size=\"3\">\n              <ion-label color=\"dark\" class=\"tp-text-size-10 tp-text-align-start\">Method </ion-label>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-label class=\"tp-text-size-10\" color=\"dark\">ACH(1-3 Business Days, no fee) <br/> <p class=\"tp-text-size-10\">Remaining Transfer Limit:$9,000.00 </p> </ion-label>\n            </ion-col>\n      </ion-row>\n    </ion-grid>\n  <div text-center>\n    <ion-button class=\"tp-ion-button\">Continue > </ion-button>\n  </div>\n  <ion-text color=\"secondary\" class=\"tp-text-size-10\" text-center>\n    <p> Transfer limits & cut off times apply ></p>\n  </ion-text>\n\n  </div>\n  \n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transfer_modal_sheet_transfer_modal_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transfer-modal-sheet/transfer-modal-sheet.page */ "./src/app/transfer-modal-sheet/transfer-modal-sheet.page.ts");
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transfer.page */ "./src/app/transfer/transfer.page.ts");
/* harmony import */ var _manage_accounts_manage_accounts_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../manage-accounts/manage-accounts.page */ "./src/app/manage-accounts/manage-accounts.page.ts");









var routes = [
    {
        path: '',
        component: _transfer_page__WEBPACK_IMPORTED_MODULE_7__["TransferPage"]
    }
];
var TransferPageModule = /** @class */ (function () {
    function TransferPageModule() {
    }
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
    return TransferPageModule;
}());



/***/ }),

/***/ "./src/app/transfer/transfer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tp-text-size-10 {\n  font-size: 10px;\n}\n\n.tp-text-size-12 {\n  font-size: 12px;\n}\n\n.tp-text-align-end {\n  text-align: end;\n}\n\n.tp-text-align-start {\n  text-align: start;\n}\n\n.tp-text-align-center {\n  text-align: center;\n}\n\n.tp-padding-right-20 {\n  padding-right: 20px;\n}\n\n.tp-padding-left-20 {\n  padding-left: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\n.tp-ion-button {\n  --border-width: 1px!important;\n  font-size: 0.7em;\n  --border-radius:0px;\n  width: 88%;\n  text-transform: capitalize;\n}\n\n.dollar:before {\n  content: \"$\";\n}\n\n.dollar:after {\n  content: \"USD\";\n}\n\n.tp-label-gray {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvdHJhbnNmZXIvdHJhbnNmZXIucGFnZS5zY3NzIiwic3JjL2FwcC90cmFuc2Zlci90cmFuc2Zlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURGQTtFQUNJLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksd0NBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7QUNRSjs7QUROQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQ1NKOztBRFBBO0VBQ1EsWUFBQTtBQ1VSOztBRFJBO0VBQ1EsY0FBQTtBQ1dSOztBRFRBO0VBQ0EsV0FBQTtBQ1lBIiwiZmlsZSI6InNyYy9hcHAvdHJhbnNmZXIvdHJhbnNmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRwLXRleHQtc2l6ZS0xMHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4udHAtdGV4dC1zaXplLTEye1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi50cC10ZXh0LWFsaWduLWVuZHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG5cbn1cbi50cC10ZXh0LWFsaWduLXN0YXJ0e1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLnRwLXRleHQtYWxpZ24tY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50cC1wYWRkaW5nLXJpZ2h0LTIwe1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcbn1cbi50cC1wYWRkaW5nLWxlZnQtMjB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSB7XG4gICAgY29sb3I6Z3JheTtcbn1cbi50cC1pb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgLS1ib3JkZXItcmFkaXVzOjBweDtcbiAgICB3aWR0aDo4OCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZG9sbGFyOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiJFwiO1xufVxuLmRvbGxhcjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiVVNEXCI7XG59XG4udHAtbGFiZWwtZ3JheXtcbmNvbG9yOiBncmF5XG59IiwiLnRwLXRleHQtc2l6ZS0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnRwLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRwLXRleHQtYWxpZ24tZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4udHAtdGV4dC1hbGlnbi1zdGFydCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4udHAtdGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50cC1wYWRkaW5nLXJpZ2h0LTIwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnRwLXBhZGRpbmctbGVmdC0yMCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4udHAtaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuN2VtO1xuICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICB3aWR0aDogODglO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmRvbGxhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIiRcIjtcbn1cblxuLmRvbGxhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiVVNEXCI7XG59XG5cbi50cC1sYWJlbC1ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_accounts_manage_accounts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manage-accounts/manage-accounts.page */ "./src/app/manage-accounts/manage-accounts.page.ts");
/* harmony import */ var _transfer_modal_sheet_transfer_modal_sheet_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transfer-modal-sheet/transfer-modal-sheet.page */ "./src/app/transfer-modal-sheet/transfer-modal-sheet.page.ts");





var TransferPage = /** @class */ (function () {
    function TransferPage(modalController, navCtrl, menuCtrl) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    TransferPage.prototype.ngOnInit = function () {
    };
    TransferPage.prototype.openActionmodalsheet = function () {
        this.openModel();
    };
    TransferPage.prototype.openModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myModel;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _transfer_modal_sheet_transfer_modal_sheet_page__WEBPACK_IMPORTED_MODULE_4__["TransferModalSheetPage"],
                            cssClass: 'transfer-modal-css'
                        })];
                    case 1:
                        myModel = _a.sent();
                        return [4 /*yield*/, myModel.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransferPage.prototype.openManageAccounts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myModel;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _manage_accounts_manage_accounts_page__WEBPACK_IMPORTED_MODULE_3__["ManageAccountsPage"],
                            cssClass: 'manage-account-modal-css'
                        })];
                    case 1:
                        myModel = _a.sent();
                        return [4 /*yield*/, myModel.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransferPage.prototype.goToDashboard = function () {
        this.navCtrl.navigateBack("dashboard");
    };
    TransferPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    TransferPage.prototype.goBack = function () {
        this.navCtrl.navigateBack('dashboard');
    };
    TransferPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
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
    return TransferPage;
}());



/***/ })

}]);
//# sourceMappingURL=transfer-transfer-module-es5.js.map