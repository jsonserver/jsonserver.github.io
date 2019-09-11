(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-management-debit-card-management-debit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/card-management-debit/card-management-debit.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-management-debit/card-management-debit.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"cm-toolbar-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button>\r\n        <ion-icon color=\"light\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div text-center>\r\n      <ion-label color=\"light\" class=\"cm-text-size-12\">Debit Card</ion-label>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"cm-card-background\">\r\n    <div class=\"cm-padding\">\r\n      <ion-img class=\"ion-padding \" src=\"assets/visa_card.png\"></ion-img>\r\n      <ion-text class=\"ion-text-center\" color=\"light\">\r\n        <p class=\"cm-text-size-12\"> Your Card is Active</p>\r\n      </ion-text>\r\n     \r\n<ion-list>\r\n   \r\n    <ion-item color= \"transparent\"  ><ion-label></ion-label></ion-item>\r\n    <ion-item  color= \"transparent\"   class=\"cm-text-size-12\"><ion-label >Change Your Pin ></ion-label></ion-item>\r\n    <ion-item color= \"transparent\"   class=\"cm-text-size-12\"><ion-label >Replace Your Card ></ion-label></ion-item>\r\n   \r\n    \r\n  </ion-list>\r\n\r\n    </div>\r\n    <p class=\"ion-text-center cm-align-bottom cm-text-size-10\">\r\n      <ion-text color=\"light\"> Need help? </ion-text>\r\n      <ion-text color=\"primary\">Contact Velo</ion-text>\r\n    </p>\r\n  </div>\r\n\r\n</ion-content>"

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

module.exports = ".cm-card-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.cm-padding {\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 25px;\n}\n\n.cm-toolbar-color {\n  --background:#001e65 0% !important;\n}\n\n.cm-bg-transparent {\n  background: transparent;\n  color: #001e65;\n}\n\n.cm-align-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 25px;\n  right: 0;\n}\n\n.cm-text-size-10 {\n  font-size: 10px;\n}\n\n.cm-text-size-12 {\n  font-size: 12px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\nion-label {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1tYW5hZ2VtZW50LWRlYml0L0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxjYXJkLW1hbmFnZW1lbnQtZGViaXRcXGNhcmQtbWFuYWdlbWVudC1kZWJpdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhcmQtbWFuYWdlbWVudC1kZWJpdC9jYXJkLW1hbmFnZW1lbnQtZGViaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEpBQUE7RUFBQSxzR0FBQTtFQUtBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURLQTtFQUNJLGtCQUFBO0VBQ0MsbUJBQUE7RUFDRCxpQkFBQTtBQ0ZKOztBRElBO0VBQ0ksa0NBQUE7QUNESjs7QURHQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksd0NBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURIQTtFQUNJLHNCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9jYXJkLW1hbmFnZW1lbnQtZGViaXQvY2FyZC1tYW5hZ2VtZW50LWRlYml0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbS1jYXJkLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kIDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMzAsMTAxKSAwJSxyZ2JhKDU3LDEyNiwxNDkpIDEwMCUsXHJcbiAgICBcclxuICAgIHJnYmEoMjksMjksMjksMSkgMzMuMzMlLFxyXG4gICAgXHJcbiAgICByZ2JhKDAsMTExLDE0NykgMTAwJSkhaW1wb3J0YW50OyAgXHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uY20tcGFkZGluZ3tcclxuICAgIHBhZGRpbmctbGVmdDoyNXB4O1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6MjVweDtcclxuICAgIHBhZGRpbmctdG9wOjI1cHg7XHJcbn1cclxuLmNtLXRvb2xiYXItY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwMWU2NSAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5jbS1iZy10cmFuc3BhcmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMDAxZTY1O1xyXG4gIH1cclxuLmNtLWFsaWduLWJvdHRvbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuLmNtLXRleHQtc2l6ZS0xMHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uY20tdGV4dC1zaXplLTEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbmlvbi1saXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIGNvbG9yOmdyYXk7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiNmZmYhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5jbS1jYXJkLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAxZTY1IDAlLCAjMzk3ZTk1IDEwMCUsICMxZDFkMWQgMzMuMzMlLCAjMDA2ZjkzIDEwMCUpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jbS1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuLmNtLXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwMWU2NSAwJSAhaW1wb3J0YW50O1xufVxuXG4uY20tYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMDFlNjU7XG59XG5cbi5jbS1hbGlnbi1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMjVweDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jbS10ZXh0LXNpemUtMTAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jbS10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn0iXX0= */"

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
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
};
CardManagementDebitPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
CardManagementDebitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-management-debit',
        template: __webpack_require__(/*! raw-loader!./card-management-debit.page.html */ "./node_modules/raw-loader/index.js!./src/app/card-management-debit/card-management-debit.page.html"),
        styles: [__webpack_require__(/*! ./card-management-debit.page.scss */ "./src/app/card-management-debit/card-management-debit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], CardManagementDebitPage);



/***/ })

}]);
//# sourceMappingURL=card-management-debit-card-management-debit-module-es2015.js.map