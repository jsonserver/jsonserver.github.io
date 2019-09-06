(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-review-chat-review2-chat-review2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review2/chat-review2.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-review/chat-review2/chat-review2.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n  <ion-toolbar class=\"crp-toolbar-color\">\n    <ion-buttons slot=\"start\" >\n      <ion-button class=\"pull-left\" (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"ios-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div>\n      <ion-title color=\"light\" class=\"crp-text-size-12\">Review & Submit(2 of 3)</ion-title>\n    </div>\n\n    <ion-buttons slot=\"end\">\n        <ion-button class=\"pull-right\">\n          <ion-icon color=\"light\" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"crp-chat-background\">\n    <ion-label class=\"ion-margin\" text-center color=\"dark\">\n      <p class=\"crp-text-size-18\">Please agree to W-8BEN form </p>\n    </ion-label>\n    <ion-label color=\"dark\">\n      <p class=\" crp-text-bold crp-padding\">Electronic W-8BEN Certification<br>\n        Name (Line 1): Joe Customer <br>\n        Country of Residency (Line9): China<br>\n        U.S Taxpayer #: None<br>\n        Foreign Tax Identifying #: 1234567788 <br>\n      </p>\n      <p class=\"crp-padding crp-text-size-12\">\n        Form W8-BEN is a form used to document your status as a non-U.S. person for tax purposes.\n      </p>\n      <p class=\"crp-padding crp-text-size-12\">\n        Your tax reporting status is an important part of your account information, which is why we need you to confirm\n        that the following statements are true.\n      </p>\n      <p class=\"crp-padding crp-text-size-12\">\n        Under penalties of perjury, I declare that I have examined the information on this form and to the best of my\n        knowledge and belief it is true, correct, and complete. I further certify under penalties of perjury that:\n      </p>\n\n      <p class=\"crp-padding crp-text-size-12\">\n        1. I am the individual that is the beneficial owner (or am authorized to sign for the individual that is the\n        beneficial owner) of all the income to which this form relates or am using this form to document myself for\n        chapter 4 purposes;\n      </p>\n      <p class=\"crp-padding crp-text-size-12\">\n        2. The person named on line 1 of this form is not a U.S. person;\n      </p>\n      <p class=\"crp-padding crp-text-size-12\">\n        3. The income to which this form relates is:\n        (a) not effectively connected with the conduct of a trade or business in the United States,\n        (b) effectively connected but is not subject to tax under an applicable income tax treaty, or\n        (c) the partner's share of a partnership's effectively connected income,\n      </p>\n      <p class=\"crp-padding crp-text-size-12\">\n        4. The person named on line 1 of this form is a resident of the treaty country listed on line 9 of the form (if\n        any) within the meaning of the income tax treaty between the United States and that country, and\n      </p>\n\n      <p class=\"crp-padding crp-text-size-12\">\n        5. For broker transactions or barter exchanges, the beneficial owner is an exempt foreign person as defined in\n        the instructions.\n      </p>\n\n\n      <p class=\"crp-padding crp-text-size-12\">\n        Furthermore, I authorize this form to be provided to any withholding agent that has control, receipt, or custody\n        of the income of which I am the beneficial owner or any withholding agent that can disburse or make payments of\n        the income of which I am the beneficial owner. I agree that I will submit a new form within 30 days if any\n        certification made on this form becomes incorrect.\n      </p>\n      <p class=\"crp-padding crp-text-size-12\">\n        Your agreement to this certification acknowledges your intent to electronically sign form W8-BEN\n      </p>\n    </ion-label>\n    <ion-button class=\"crp-bottom-ion-button\" expand=\"full\" (click)=\"moveToChatReview3()\" color=\"primary\">\n      I agree >\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/chat-review/chat-review2/chat-review2.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/chat-review/chat-review2/chat-review2.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChatReview2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatReview2PageModule", function() { return ChatReview2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_review2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-review2.page */ "./src/app/chat-review/chat-review2/chat-review2.page.ts");







const routes = [
    {
        path: '',
        component: _chat_review2_page__WEBPACK_IMPORTED_MODULE_6__["ChatReview2Page"]
    }
];
let ChatReview2PageModule = class ChatReview2PageModule {
};
ChatReview2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_review2_page__WEBPACK_IMPORTED_MODULE_6__["ChatReview2Page"]]
    })
], ChatReview2PageModule);



/***/ }),

/***/ "./src/app/chat-review/chat-review2/chat-review2.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/chat-review/chat-review2/chat-review2.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crp-chat-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.crp-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.crp-text-size-10 {\n  font-size: 10px;\n}\n\n.crp-text-size-12 {\n  font-size: 12px;\n}\n\n.crp-text-size-18 {\n  font-size: 18px;\n}\n\n.crp-padding {\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 15px;\n}\n\n.crp-bottom-ion-button {\n  margin-left: 20px;\n  -webkit-box-align: bottom;\n          align-items: bottom;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  text-transform: capitalize;\n  --background:rgb(1, 220, 243) !important;\n  --color: black;\n  font-size: 12px;\n}\n\n.crp-text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL29uYm9hcmQvb25Cb2FyZGluZ0FwcGxpY2F0aW9uL3NyYy9hcHAvY2hhdC1yZXZpZXcvY2hhdC1yZXZpZXcyL2NoYXQtcmV2aWV3Mi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtcmV2aWV3L2NoYXQtcmV2aWV3Mi9jaGF0LXJldmlldzIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNPSjs7QURMQTtFQUNJLGlCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9jaGF0LXJldmlldy9jaGF0LXJldmlldzIvY2hhdC1yZXZpZXcyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcnAtY2hhdC1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmNycC10b29sYmFyLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG4uY3JwLXRleHQtc2l6ZS0xMHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uY3JwLXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uY3JwLXRleHQtc2l6ZS0xOHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uY3JwLXBhZGRpbmd7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xufVxuLmNycC1ib3R0b20taW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGJvdHRvbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYmFja2dyb3VuZDpyZ2IoMSwgMjIwLCAyNDMpICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNycC10ZXh0LWJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLmNycC1jaGF0LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY3JwLXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xufVxuXG4uY3JwLXRleHQtc2l6ZS0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNycC10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jcnAtdGV4dC1zaXplLTE4IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY3JwLXBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jcnAtYm90dG9tLWlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGJvdHRvbTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOnJnYigxLCAyMjAsIDI0MykgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNycC10ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat-review/chat-review2/chat-review2.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/chat-review/chat-review2/chat-review2.page.ts ***!
  \***************************************************************/
/*! exports provided: ChatReview2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatReview2Page", function() { return ChatReview2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ChatReview2Page = class ChatReview2Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    moveToChatReview3() {
        this.navCtrl.navigateForward("chat-review3");
    }
    goBack() {
        this.navCtrl.navigateForward("chat-review");
    }
};
ChatReview2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ChatReview2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-review2',
        template: __webpack_require__(/*! raw-loader!./chat-review2.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review2/chat-review2.page.html"),
        styles: [__webpack_require__(/*! ./chat-review2.page.scss */ "./src/app/chat-review/chat-review2/chat-review2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ChatReview2Page);



/***/ })

}]);
//# sourceMappingURL=chat-review-chat-review2-chat-review2-module-es2015.js.map