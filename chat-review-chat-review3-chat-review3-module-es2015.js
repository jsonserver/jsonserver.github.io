(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-review-chat-review3-chat-review3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review3/chat-review3.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-review/chat-review3/chat-review3.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n  <ion-toolbar class=\"crp-toolbar-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"pull-left\" (click)=\"goBack()\">\r\n        <ion-icon color=\"light\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div>\r\n      <ion-title color=\"light\" class=\"crp-text-size-16\">Review & Submit(3 of 3)</ion-title>\r\n    </div>\r\n\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button class=\"pull-right\">\r\n          <ion-icon color=\"light\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"crp-chat-background\">\r\n    <ion-item color=\"none\">\r\n      <ion-checkbox item-left mode=\"md\" color=\"secondary\"></ion-checkbox>\r\n      <ion-label class=\"ion-margin crp-text-size-12 unwrap-label\" color=\"dark\">\r\n          Terms and Conditions Acceptance: I have opened, read and agree to the terms and conditions of the Privacy Policy, Deposit Account Agreement, Product Terms and Conditions, and Fee Schedule that govern my account relationship and use of Online Banking Services with mBank.\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item color=\"none\">\r\n        <ion-checkbox item-left mode=\"md\" color=\"secondary\"></ion-checkbox>\r\n        <ion-label class=\"ion-margin crp-text-size-12 unwrap-label\" color=\"dark\">\r\n            eStatement Acceptance: I acknowledge I have the ability to open up and view a Sample Statement and understand they will be made available in mbank’s Online and/or Mobile Banking platforms.\r\n        </ion-label>\r\n      </ion-item>\r\n    <ion-button class=\"crp-bottom-ion-button\" expand=\"full\" (click)=\"movetoAppComplete()\" color=\"primary\">\r\n      I agree >\r\n    </ion-button>\r\n    <ion-text text-center class=\"crp-text-size-12\" color=\"secondary\"> <p> <u> I do not agree </u></p></ion-text>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/chat-review/chat-review3/chat-review3.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/chat-review/chat-review3/chat-review3.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChatReview3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatReview3PageModule", function() { return ChatReview3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_review3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-review3.page */ "./src/app/chat-review/chat-review3/chat-review3.page.ts");







const routes = [
    {
        path: '',
        component: _chat_review3_page__WEBPACK_IMPORTED_MODULE_6__["ChatReview3Page"]
    }
];
let ChatReview3PageModule = class ChatReview3PageModule {
};
ChatReview3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_review3_page__WEBPACK_IMPORTED_MODULE_6__["ChatReview3Page"]]
    })
], ChatReview3PageModule);



/***/ }),

/***/ "./src/app/chat-review/chat-review3/chat-review3.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/chat-review/chat-review3/chat-review3.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crp-chat-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.crp-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.crp-text-size-10 {\n  font-size: 10px;\n}\n\n.crp-text-size-12 {\n  font-size: 12px;\n}\n\n.crp-text-size-18 {\n  font-size: 18px;\n}\n\n.crp-text-size-16 {\n  font-size: 16px;\n}\n\n.crp-padding {\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 15px;\n}\n\n.crp-bottom-ion-button {\n  margin-left: 20px;\n  -webkit-box-align: bottom;\n          align-items: bottom;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  text-transform: capitalize;\n  --background:rgb(1, 220, 243) !important;\n  --color: black;\n  font-size: 12px;\n}\n\n.crp-text-bold {\n  font-weight: bold;\n}\n\nion-item {\n  margin-right: 20px;\n  color: white;\n}\n\n.unwrap-label {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1yZXZpZXcvY2hhdC1yZXZpZXczL0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxjaGF0LXJldmlld1xcY2hhdC1yZXZpZXczXFxjaGF0LXJldmlldzMucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0LXJldmlldy9jaGF0LXJldmlldzMvY2hhdC1yZXZpZXczLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0NBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUkE7RUFDSSxtQkFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1yZXZpZXcvY2hhdC1yZXZpZXczL2NoYXQtcmV2aWV3My5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JwLWNoYXQtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7ICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5jcnAtdG9vbGJhci1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNycC10ZXh0LXNpemUtMTB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmNycC10ZXh0LXNpemUtMTJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNycC10ZXh0LXNpemUtMTh7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmNycC10ZXh0LXNpemUtMTZ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNycC1wYWRkaW5ne1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxufVxyXG4uY3JwLWJvdHRvbS1pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGJvdHRvbTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6cmdiKDEsIDIyMCwgMjQzKSAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNycC10ZXh0LWJvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5pb24taXRlbXtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcbi51bndyYXAtbGFiZWx7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59IiwiLmNycC1jaGF0LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY3JwLXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xufVxuXG4uY3JwLXRleHQtc2l6ZS0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNycC10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jcnAtdGV4dC1zaXplLTE4IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY3JwLXRleHQtc2l6ZS0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNycC1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY3JwLWJvdHRvbS1pb24tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBib3R0b207XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDpyZ2IoMSwgMjIwLCAyNDMpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jcnAtdGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51bndyYXAtbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-review/chat-review3/chat-review3.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/chat-review/chat-review3/chat-review3.page.ts ***!
  \***************************************************************/
/*! exports provided: ChatReview3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatReview3Page", function() { return ChatReview3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ChatReview3Page = class ChatReview3Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    movetoAppComplete() {
        this.navCtrl.navigateForward("app-complete");
    }
    goBack() {
        this.navCtrl.navigateForward("chat-review2");
    }
};
ChatReview3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ChatReview3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-review3',
        template: __webpack_require__(/*! raw-loader!./chat-review3.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review3/chat-review3.page.html"),
        styles: [__webpack_require__(/*! ./chat-review3.page.scss */ "./src/app/chat-review/chat-review3/chat-review3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ChatReview3Page);



/***/ })

}]);
//# sourceMappingURL=chat-review-chat-review3-chat-review3-module-es2015.js.map