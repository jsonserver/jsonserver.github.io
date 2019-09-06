(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["velo-products-velo-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/velo-products/velo-products.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/velo-products/velo-products.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar class=\"app-toolbar-color\">\n      <ion-buttons slot=\"start\">\n          <ion-button class=\"pull-left\" (click)=\"goToGetStarted()\">\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <div>\n          <ion-title color=\"light\" class=\"app-text-size-12\">Products</ion-title>\n        </div>\n\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"pull-right\">\n              <ion-icon color=\"light\" ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <div class=\"app-background\">\n      <ion-col class=\"ion-margin-top\"></ion-col>\n     <ion-text color=\"dark\">\n      <p class=\"ion-text-center app-text-size-16\">Select your Product</p>\n     </ion-text>\n\n     <div class=\"screenPhoto\">\n        <img src='/assets/menu.svg' width=\"100\" height=\"100\">\n    </div>\n\n    <ion-col class=\"ion-margin-top\"></ion-col>\n\n    <ion-button color=\"primary\" expand=\"full\" class=\"app-margin-left app-margin-right app-text-size-12\" (click)=\"goToResidencyStatus()\" > Premier Checking account ></ion-button>\n\n    <ion-text color=\"dark\">\n        <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">You are an individual who would like to open a U.S. bank account </p>\n    </ion-text>\n\n    <ion-text color=\"secondary\">\n        <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">Learn More</p>\n    </ion-text>\n\n\n    <ion-text color=\"secondary\">\n        <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right app-term-condition-margin\">Privicy & Security | Term & Conditions</p>\n    </ion-text>\n    <ion-text color=\"dark\">\n        <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">Member FDIC. Equal Housing Lender</p>\n    </ion-text>\n\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/velo-products/velo-products.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/velo-products/velo-products.module.ts ***!
  \*******************************************************/
/*! exports provided: VeloProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeloProductsPageModule", function() { return VeloProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _velo_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./velo-products.page */ "./src/app/velo-products/velo-products.page.ts");







var routes = [
    {
        path: '',
        component: _velo_products_page__WEBPACK_IMPORTED_MODULE_6__["VeloProductsPage"]
    }
];
var VeloProductsPageModule = /** @class */ (function () {
    function VeloProductsPageModule() {
    }
    VeloProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_velo_products_page__WEBPACK_IMPORTED_MODULE_6__["VeloProductsPage"]]
        })
    ], VeloProductsPageModule);
    return VeloProductsPageModule;
}());



/***/ }),

/***/ "./src/app/velo-products/velo-products.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/velo-products/velo-products.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.app-term-condition-margin {\n  margin-top: 270px;\n}\n\n.screenPhoto img {\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL29uYm9hcmQvb25Cb2FyZGluZ0FwcGxpY2F0aW9uL3NyYy9hcHAvdmVsby1wcm9kdWN0cy92ZWxvLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVsby1wcm9kdWN0cy92ZWxvLXByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURFSTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92ZWxvLXByb2R1Y3RzL3ZlbG8tcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE2e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFwcC10b29sYmFyLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5hcHAtbWFyZ2luLWxlZnR7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uYXBwLW1hcmdpbi1yaWdodHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5hcHAtdGVybS1jb25kaXRpb24tbWFyZ2lue1xuICAgIG1hcmdpbi10b3A6IDI3MHB4O1xufVxuXG4uc2NyZWVuUGhvdG8ge1xuICAgIGltZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICB9XG5cbiIsIi5hcHAtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5hcHAtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFwcC10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmFwcC1tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYXBwLW1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyNzBweDtcbn1cblxuLnNjcmVlblBob3RvIGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/velo-products/velo-products.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/velo-products/velo-products.page.ts ***!
  \*****************************************************/
/*! exports provided: VeloProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VeloProductsPage", function() { return VeloProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var VeloProductsPage = /** @class */ (function () {
    function VeloProductsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VeloProductsPage.prototype.ngOnInit = function () {
    };
    VeloProductsPage.prototype.goToResidencyStatus = function () {
        this.navCtrl.navigateForward("residency-status");
    };
    VeloProductsPage.prototype.goToGetStarted = function () {
        this.navCtrl.navigateForward("get-started");
    };
    VeloProductsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    VeloProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-velo-products',
            template: __webpack_require__(/*! raw-loader!./velo-products.page.html */ "./node_modules/raw-loader/index.js!./src/app/velo-products/velo-products.page.html"),
            styles: [__webpack_require__(/*! ./velo-products.page.scss */ "./src/app/velo-products/velo-products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], VeloProductsPage);
    return VeloProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=velo-products-velo-products-module-es5.js.map