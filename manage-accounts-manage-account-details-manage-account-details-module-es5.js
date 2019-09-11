(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-accounts-manage-account-details-manage-account-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/manage-accounts/manage-account-details/manage-account-details.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manage-accounts/manage-account-details/manage-account-details.page.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"light\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button class=\"pull-left\">\r\n            <ion-icon name=\"arrow-back\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <div>\r\n          <ion-title text-center class=\"mad-text-size-12\">Manage Account</ion-title>\r\n        </div>\r\n  </ion-toolbar>\r\n  \r\n    \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let item of items\"  lines=\"none\">\r\n     <ion-grid fixed>\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"1.5\">\r\n               <ion-img  src=\"{{item.image}}\"></ion-img>\r\n            </ion-col>\r\n            <ion-col size=\"10.5\">\r\n               <ion-label class=\"mad-text-size-12\">{{item.name}}</ion-label>\r\n               <ion-label class=\"mad-text-size-8\">{{item.account}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n     </ion-grid>\r\n     \r\n    </ion-item>  \r\n  </ion-list>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_account_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-account-details.page */ "./src/app/manage-accounts/manage-account-details/manage-account-details.page.ts");







var routes = [
    {
        path: '',
        component: _manage_account_details_page__WEBPACK_IMPORTED_MODULE_6__["ManageAccountDetailsPage"]
    }
];
var ManageAccountDetailsPageModule = /** @class */ (function () {
    function ManageAccountDetailsPageModule() {
    }
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
    return ManageAccountDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/manage-accounts/manage-account-details/manage-account-details.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/manage-accounts/manage-account-details/manage-account-details.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-label {\n  margin-left: 5px;\n}\n\n.mad-text-size-8 {\n  font-size: 8px;\n}\n\n.mad-text-size-12 {\n  font-size: 12px;\n}\n\nion-list {\n  margin-top: 5px;\n}\n\nion-title {\n  color: gray;\n}\n\nion-icon {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLWFjY291bnRzL21hbmFnZS1hY2NvdW50LWRldGFpbHMvQzpcXFVzZXJzXFxzaHdldGEua1xcSW9uaWNQcm9qZWN0c1xcbWJhbmsvc3JjXFxhcHBcXG1hbmFnZS1hY2NvdW50c1xcbWFuYWdlLWFjY291bnQtZGV0YWlsc1xcbWFuYWdlLWFjY291bnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL21hbmFnZS1hY2NvdW50cy9tYW5hZ2UtYWNjb3VudC1kZXRhaWxzL21hbmFnZS1hY2NvdW50LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hY2NvdW50cy9tYW5hZ2UtYWNjb3VudC1kZXRhaWxzL21hbmFnZS1hY2NvdW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufSBcclxuLm1hZC10ZXh0LXNpemUtOHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcbi5tYWQtdGV4dC1zaXplLTEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbmlvbi1saXN0e1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn0iLCJpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWFkLXRleHQtc2l6ZS04IHtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5tYWQtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManageAccountDetailsPage = /** @class */ (function () {
    function ManageAccountDetailsPage() {
        this.items = [
            { name: 'Abby Lilliac', image: '/assets/bank.svg', account: 'Velo(...7345)' },
            { name: 'Rajat Kumar', image: '/assets/bank.svg', account: 'Velo(...6346)' },
            { name: 'Ashley Johnson', image: '/assets/bank.svg', account: 'Velo(...8845)' },
            { name: 'Scarlet Johnson', image: '/assets/bank.svg', account: 'Velo(...2245)' },
            { name: 'Buck Charles', image: '/assets/bank.svg', account: 'Velo(...8335)' },
            { name: 'Junior Downy', image: '/assets/bank.svg', account: 'Velo(...8265)' },
            { name: 'Tushar Wankhade', image: '/assets/bank.svg', account: 'Velo(...8185)' },
            { name: 'Brijesh Pathak', image: '/assets/bank.svg', account: 'Velo(...8800)' },
            { name: 'Gourav Saxena', image: '/assets/bank.svg', account: 'Velo(...8885)' },
            { name: 'Chris Ccandlestree', image: '/assets/bank.svg', account: 'Velo(...0045)' },
            { name: 'John Southwood', image: '/assets/bank.svg', account: 'Velo(...8771)' },
            { name: 'San John', image: '/assets/bank.svg', account: 'Velo(...2346)' },
            { name: 'Jacky Chen', image: '/assets/bank.svg', account: 'Velo(..1195)' },
            { name: 'Aashish Kukreti', image: '/assets/bank.svg', account: 'Velo(...2465)' },
            { name: 'Raashi Khana', image: '/assets/bank.svg', account: 'Velo(...2945)' },
            { name: 'Twinkle Verma', image: '/assets/bank.svg', account: 'Velo(...2841)' },
            { name: 'Jasmine Sandals', image: '/assets/bank.svg', account: 'Velo(...9045)' },
        ];
    }
    ManageAccountDetailsPage.prototype.ngOnInit = function () {
    };
    ManageAccountDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-account-details',
            template: __webpack_require__(/*! raw-loader!./manage-account-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/manage-accounts/manage-account-details/manage-account-details.page.html"),
            styles: [__webpack_require__(/*! ./manage-account-details.page.scss */ "./src/app/manage-accounts/manage-account-details/manage-account-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageAccountDetailsPage);
    return ManageAccountDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=manage-accounts-manage-account-details-manage-account-details-module-es5.js.map