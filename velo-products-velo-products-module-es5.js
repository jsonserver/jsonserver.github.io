(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["velo-products-velo-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/velo-products/velo-products.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/velo-products/velo-products.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"app-toolbar-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button class=\"pull-left\" (click)=\"goToGetStarted()\">\r\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <div>\r\n          <ion-title color=\"light\" class=\"app-text-size-16\">mBank Products</ion-title>\r\n        </div>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button class=\"pull-right\">\r\n              <ion-icon color=\"light\" ></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"app-background\">\r\n      <ion-col class=\"ion-margin-top\"></ion-col>\r\n     <ion-text color=\"dark\">\r\n      <p class=\"ion-text-center app-text-size-16\">Select your Product</p>\r\n     </ion-text>\r\n\r\n     <div class=\"screenPhoto\">\r\n        <img src='/assets/menu.svg' width=\"100\" height=\"100\">\r\n    </div>\r\n\r\n    <ion-col class=\"ion-margin-top\"></ion-col>\r\n\r\n    <ion-button color=\"primary\" expand=\"full\" class=\"app-margin-left app-margin-right app-text-size-12\" (click)=\"goToResidencyStatus()\" > Premier Checking account ></ion-button>\r\n\r\n    <ion-text color=\"dark\">\r\n        <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">You are an individual who would like to open a U.S. bank account </p>\r\n    </ion-text>\r\n\r\n    <ion-text color=\"secondary\">\r\n        <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">Learn More</p>\r\n    </ion-text>\r\n\r\n\r\n    <ion-text color=\"secondary\">\r\n        <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right app-term-condition-margin\">Privicy & Security | Term & Conditions</p>\r\n    </ion-text>\r\n    <ion-text color=\"dark\">\r\n        <p class=\"ion-text-center app-text-size-12 app-margin-left app-margin-right\">Member FDIC. Equal Housing Lender</p>\r\n    </ion-text>\r\n\r\n    </div>\r\n</ion-content>\r\n"

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

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.app-term-condition-margin {\n  margin-top: 270px;\n}\n\n.screenPhoto img {\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVsby1wcm9kdWN0cy9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxcdmVsby1wcm9kdWN0c1xcdmVsby1wcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlbG8tcHJvZHVjdHMvdmVsby1wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FERUk7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmVsby1wcm9kdWN0cy92ZWxvLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmFwcC10ZXh0LXNpemUtMTJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5hcHAtdGV4dC1zaXplLTE2e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYXBwLXRvb2xiYXItY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXBwLW1hcmdpbi1sZWZ0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLmFwcC1tYXJnaW4tcmlnaHR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5hcHAtdGVybS1jb25kaXRpb24tbWFyZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogMjcwcHg7XHJcbn1cclxuXHJcbi5zY3JlZW5QaG90byB7XHJcbiAgICBpbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4iLCIuYXBwLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFwcC10ZXh0LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hcHAtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5hcHAtbWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmFwcC1tYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5hcHAtdGVybS1jb25kaXRpb24tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMjcwcHg7XG59XG5cbi5zY3JlZW5QaG90byBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

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