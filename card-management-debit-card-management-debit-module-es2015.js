(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-management-debit-card-management-debit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/card-management-debit/card-management-debit.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-management-debit/card-management-debit.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"cm-toolbar-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div text-center>\r\n      <ion-text color=\"light\" class=\"cm-text-size-16\">Debit Card</ion-text>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"cm-card-background\">\r\n    <div class=\"cm-padding\">\r\n      <ion-img class=\"ion-padding \" src=\"assets/visa_card.png\"></ion-img>\r\n      <ion-text class=\"ion-text-center\" color=\"dark\">\r\n        <p class=\"cm-text-size-12\"> Your Card is Active</p>\r\n      </ion-text>\r\n     \r\n<ion-list>\r\n   \r\n    <ion-item color= \"transparent\"  ><ion-label></ion-label></ion-item>\r\n    <ion-item  color= \"transparent\"   class=\"cm-text-size-12\"><ion-label>Change Your Pin ></ion-label></ion-item>\r\n    <ion-item color= \"transparent\"   class=\"cm-text-size-12\"><ion-label>Replace Your Card ></ion-label></ion-item>\r\n   \r\n    \r\n  </ion-list>\r\n\r\n    </div>\r\n    <p class=\"ion-text-center cm-align-bottom cm-text-size-10\">\r\n      <ion-text color=\"dark\" > Need help? </ion-text>\r\n      <ion-text color=\"secondary\">Contact mBank</ion-text>\r\n    </p>\r\n  </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/card-management-debit/card-management-debit.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/card-management-debit/card-management-debit.module.ts ***!
  \***********************************************************************/
/*! exports provided: CardManagementDebitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardManagementDebitPageModule", function() { return CardManagementDebitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_management_debit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-management-debit.page */ "./src/app/card-management-debit/card-management-debit.page.ts");







const routes = [
    {
        path: '',
        component: _card_management_debit_page__WEBPACK_IMPORTED_MODULE_6__["CardManagementDebitPage"]
    }
];
let CardManagementDebitPageModule = class CardManagementDebitPageModule {
};
CardManagementDebitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_card_management_debit_page__WEBPACK_IMPORTED_MODULE_6__["CardManagementDebitPage"]]
    })
], CardManagementDebitPageModule);



/***/ }),

/***/ "./src/app/card-management-debit/card-management-debit.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/card-management-debit/card-management-debit.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cm-card-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.cm-padding {\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 25px;\n}\n\n.cm-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.cm-bg-transparent {\n  background: transparent;\n  color: #001e65;\n}\n\n.cm-align-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 25px;\n  right: 0;\n}\n\n.cm-text-size-10 {\n  font-size: 10px;\n}\n\n.cm-text-size-12 {\n  font-size: 12px;\n}\n\n.cm-text-size-16 {\n  font-size: 16px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\nion-label {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1tYW5hZ2VtZW50LWRlYml0L0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxjYXJkLW1hbmFnZW1lbnQtZGViaXRcXGNhcmQtbWFuYWdlbWVudC1kZWJpdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhcmQtbWFuYWdlbWVudC1kZWJpdC9jYXJkLW1hbmFnZW1lbnQtZGViaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNDLG1CQUFBO0VBQ0QsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGtDQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7QUNRSjs7QUROQTtFQUNJLHdDQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0FDVUo7O0FEUkE7RUFDSSx1QkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1tYW5hZ2VtZW50LWRlYml0L2NhcmQtbWFuYWdlbWVudC1kZWJpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY20tY2FyZC1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5jbS1wYWRkaW5ne1xyXG4gICAgcGFkZGluZy1sZWZ0OjI1cHg7XHJcbiAgICAgcGFkZGluZy1yaWdodDoyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6MjVweDtcclxufVxyXG4uY20tdG9vbGJhci1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNtLWJnLXRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMwMDFlNjU7XHJcbiAgfVxyXG4uY20tYWxpZ24tYm90dG9tIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4uY20tdGV4dC1zaXplLTEwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5jbS10ZXh0LXNpemUtMTJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNtLXRleHQtc2l6ZS0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICBjb2xvcjpncmF5O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG59XHJcbiIsIi5jbS1jYXJkLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY20tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5jbS10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmNtLWJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMDAxZTY1O1xufVxuXG4uY20tYWxpZ24tYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY20tdGV4dC1zaXplLTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY20tdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY20tdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/card-management-debit/card-management-debit.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/card-management-debit/card-management-debit.page.ts ***!
  \*********************************************************************/
/*! exports provided: CardManagementDebitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardManagementDebitPage", function() { return CardManagementDebitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let CardManagementDebitPage = class CardManagementDebitPage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    goBack() {
        this.navCtrl.navigateBack("dashboard");
    }
};
CardManagementDebitPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
CardManagementDebitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-management-debit',
        template: __webpack_require__(/*! raw-loader!./card-management-debit.page.html */ "./node_modules/raw-loader/index.js!./src/app/card-management-debit/card-management-debit.page.html"),
        styles: [__webpack_require__(/*! ./card-management-debit.page.scss */ "./src/app/card-management-debit/card-management-debit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], CardManagementDebitPage);



/***/ })

}]);
//# sourceMappingURL=card-management-debit-card-management-debit-module-es2015.js.map