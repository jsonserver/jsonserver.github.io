(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-accounts-manage-account-details-manage-account-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/manage-accounts/manage-account-details/manage-account-details.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manage-accounts/manage-account-details/manage-account-details.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"light\">\n        <ion-buttons slot=\"start\">\n          <ion-button  class=\"pull-left\" (click)=\"goBack()\">\n            <ion-icon color=\"dark\" name=\"ios-arrow-back\" ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <div>\n          <ion-title color=\"dark\"  text-center class=\"mad-text-size-12\">Manage Account</ion-title>\n        </div>\n  </ion-toolbar>\n  \n    \n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\"  lines=\"none\">\n     <ion-grid fixed>\n        <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"1.5\">\n               <ion-img  src=\"{{item.image}}\"></ion-img>\n            </ion-col>\n            <ion-col size=\"10.5\">\n               <ion-label class=\"mad-text-size-12\">{{item.name}}</ion-label>\n               <ion-label class=\"mad-text-size-8\">{{item.account}}</ion-label>\n            </ion-col>\n          </ion-row>\n     </ion-grid>\n     \n    </ion-item>  \n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/manage-accounts/manage-account-details/manage-account-details.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/manage-accounts/manage-account-details/manage-account-details.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ManageAccountDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAccountDetailsPageModule", function() { return ManageAccountDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_account_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-account-details.page */ "./src/app/manage-accounts/manage-account-details/manage-account-details.page.ts");







const routes = [
    {
        path: '',
        component: _manage_account_details_page__WEBPACK_IMPORTED_MODULE_6__["ManageAccountDetailsPage"]
    }
];
let ManageAccountDetailsPageModule = class ManageAccountDetailsPageModule {
};
ManageAccountDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_manage_account_details_page__WEBPACK_IMPORTED_MODULE_6__["ManageAccountDetailsPage"]]
    })
], ManageAccountDetailsPageModule);



/***/ }),

/***/ "./src/app/manage-accounts/manage-account-details/manage-account-details.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/manage-accounts/manage-account-details/manage-account-details.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  margin-left: 5px;\n}\n\n.mad-text-size-8 {\n  font-size: 8px;\n}\n\n.mad-text-size-12 {\n  font-size: 12px;\n}\n\nion-list {\n  margin-top: 5px;\n}\n\nion-title {\n  color: black;\n}\n\nion-icon {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvbWFuYWdlLWFjY291bnRzL21hbmFnZS1hY2NvdW50LWRldGFpbHMvbWFuYWdlLWFjY291bnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL21hbmFnZS1hY2NvdW50cy9tYW5hZ2UtYWNjb3VudC1kZXRhaWxzL21hbmFnZS1hY2NvdW50LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hY2NvdW50cy9tYW5hZ2UtYWNjb3VudC1kZXRhaWxzL21hbmFnZS1hY2NvdW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59IFxuLm1hZC10ZXh0LXNpemUtOHtcbiAgICBmb250LXNpemU6IDhweDtcbn1cbi5tYWQtdGV4dC1zaXplLTEye1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1saXN0e1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbmlvbi10aXRsZXtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5pb24taWNvbntcbiAgICBjb2xvcjogZ3JheTtcbn0iLCJpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWFkLXRleHQtc2l6ZS04IHtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5tYWQtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiBncmF5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/manage-accounts/manage-account-details/manage-account-details.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/manage-accounts/manage-account-details/manage-account-details.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ManageAccountDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAccountDetailsPage", function() { return ManageAccountDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ManageAccountDetailsPage = class ManageAccountDetailsPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            { name: 'Abby Lilliac', image: '/assets/explore_products.svg', account: 'Velo(...7345)' },
            { name: 'Rajat Kumar', image: '/assets/explore_products.svg', account: 'Velo(...6346)' },
            { name: 'Ashley Johnson', image: '/assets/explore_products.svg', account: 'Velo(...8845)' },
            { name: 'Scarlet Johnson', image: '/assets/explore_products.svg', account: 'Velo(...2245)' },
            { name: 'Buck Charles', image: '/assets/explore_products.svg', account: 'Velo(...8335)' },
            { name: 'Junior Downy', image: '/assets/explore_products.svg', account: 'Velo(...8265)' },
            { name: 'Tushar Wankhade', image: '/assets/explore_products.svg', account: 'Velo(...8185)' },
            { name: 'Brijesh Pathak', image: '/assets/explore_products.svg', account: 'Velo(...8800)' },
            { name: 'Gourav Saxena', image: '/assets/explore_products.svg', account: 'Velo(...8885)' },
            { name: 'Chris Ccandlestree', image: '/assets/explore_products.svg', account: 'Velo(...0045)' },
            { name: 'John Southwood', image: '/assets/explore_products.svg', account: 'Velo(...8771)' },
            { name: 'San John', image: '/assets/explore_products.svg', account: 'Velo(...2346)' },
            { name: 'Jacky Chen', image: '/assets/explore_products.svg', account: 'Velo(..1195)' },
            { name: 'Aashish Kukreti', image: '/assets/explore_products.svg', account: 'Velo(...2465)' },
            { name: 'Raashi Khanna', image: '/assets/explore_products.svg', account: 'Velo(...2945)' },
            { name: 'Twinkle Verma', image: '/assets/explore_products.svg', account: 'Velo(...2841)' },
            { name: 'Jasmine Sandals', image: '/assets/explore_products.svg', account: 'Velo(...9045)' },
        ];
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.navigateBack('transfer');
    }
};
ManageAccountDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ManageAccountDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-account-details',
        template: __webpack_require__(/*! raw-loader!./manage-account-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/manage-accounts/manage-account-details/manage-account-details.page.html"),
        styles: [__webpack_require__(/*! ./manage-account-details.page.scss */ "./src/app/manage-accounts/manage-account-details/manage-account-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ManageAccountDetailsPage);



/***/ })

}]);
//# sourceMappingURL=manage-accounts-manage-account-details-manage-account-details-module-es2015.js.map