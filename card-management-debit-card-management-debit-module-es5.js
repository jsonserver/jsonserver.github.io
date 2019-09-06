(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-management-debit-card-management-debit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/card-management-debit/card-management-debit.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-management-debit/card-management-debit.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"cm-toolbar-color\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div text-center>\n      <ion-text color=\"light\" class=\"cm-text-size-12\">Debit Card</ion-text>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"cm-card-background\">\n    <div class=\"cm-padding\">\n      <ion-img class=\"ion-padding \" src=\"assets/visa_card.png\"></ion-img>\n      <ion-text class=\"ion-text-center\" color=\"dark\">\n        <p class=\"cm-text-size-12\"> Your Card is Active</p>\n      </ion-text>\n     \n<ion-list>\n   \n    <ion-item color= \"transparent\"  ><ion-label></ion-label></ion-item>\n    <ion-item  color= \"transparent\"   class=\"cm-text-size-12\"><ion-label>Change Your Pin ></ion-label></ion-item>\n    <ion-item color= \"transparent\"   class=\"cm-text-size-12\"><ion-label>Replace Your Card ></ion-label></ion-item>\n   \n    \n  </ion-list>\n\n    </div>\n    <p class=\"ion-text-center cm-align-bottom cm-text-size-10\">\n      <ion-text color=\"dark\" > Need help? </ion-text>\n      <ion-text color=\"secondary\">Contact Velo</ion-text>\n    </p>\n  </div>\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_management_debit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-management-debit.page */ "./src/app/card-management-debit/card-management-debit.page.ts");







var routes = [
    {
        path: '',
        component: _card_management_debit_page__WEBPACK_IMPORTED_MODULE_6__["CardManagementDebitPage"]
    }
];
var CardManagementDebitPageModule = /** @class */ (function () {
    function CardManagementDebitPageModule() {
    }
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
    return CardManagementDebitPageModule;
}());



/***/ }),

/***/ "./src/app/card-management-debit/card-management-debit.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/card-management-debit/card-management-debit.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cm-card-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.cm-padding {\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 25px;\n}\n\n.cm-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.cm-bg-transparent {\n  background: transparent;\n  color: #001e65;\n}\n\n.cm-align-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 25px;\n  right: 0;\n}\n\n.cm-text-size-10 {\n  font-size: 10px;\n}\n\n.cm-text-size-12 {\n  font-size: 12px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\nion-label {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvY2FyZC1tYW5hZ2VtZW50LWRlYml0L2NhcmQtbWFuYWdlbWVudC1kZWJpdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhcmQtbWFuYWdlbWVudC1kZWJpdC9jYXJkLW1hbmFnZW1lbnQtZGViaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNDLG1CQUFBO0VBQ0QsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGtDQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7QUNPSjs7QURMQTtFQUNJLHdDQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0FDU0o7O0FEUEE7RUFDSSx1QkFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1tYW5hZ2VtZW50LWRlYml0L2NhcmQtbWFuYWdlbWVudC1kZWJpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY20tY2FyZC1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmNtLXBhZGRpbmd7XG4gICAgcGFkZGluZy1sZWZ0OjI1cHg7XG4gICAgIHBhZGRpbmctcmlnaHQ6MjVweDtcbiAgICBwYWRkaW5nLXRvcDoyNXB4O1xufVxuLmNtLXRvb2xiYXItY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cbi5jbS1iZy10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICMwMDFlNjU7XG4gIH1cbi5jbS1hbGlnbi1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICByaWdodDogMDtcbn1cbi5jbS10ZXh0LXNpemUtMTB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNtLXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSB7XG4gICAgY29sb3I6Z3JheTtcbn1cbmlvbi1sYWJlbCB7XG4gICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcbn1cbiIsIi5jbS1jYXJkLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY20tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5jbS10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmNtLWJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMDAxZTY1O1xufVxuXG4uY20tYWxpZ24tYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY20tdGV4dC1zaXplLTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY20tdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var CardManagementDebitPage = /** @class */ (function () {
    function CardManagementDebitPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    CardManagementDebitPage.prototype.ngOnInit = function () {
    };
    CardManagementDebitPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    CardManagementDebitPage.prototype.goBack = function () {
        this.navCtrl.navigateBack("dashboard");
    };
    CardManagementDebitPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    CardManagementDebitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-management-debit',
            template: __webpack_require__(/*! raw-loader!./card-management-debit.page.html */ "./node_modules/raw-loader/index.js!./src/app/card-management-debit/card-management-debit.page.html"),
            styles: [__webpack_require__(/*! ./card-management-debit.page.scss */ "./src/app/card-management-debit/card-management-debit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], CardManagementDebitPage);
    return CardManagementDebitPage;
}());



/***/ })

}]);
//# sourceMappingURL=card-management-debit-card-management-debit-module-es5.js.map