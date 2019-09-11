(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-review-chat-review2-chat-review2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review2/chat-review2.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-review/chat-review2/chat-review2.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n  <ion-toolbar class=\"crp-toolbar-color\">\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-button class=\"pull-left\" (click)=\"goBack()\">\r\n        <ion-icon color=\"light\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div>\r\n      <ion-title color=\"light\" class=\"crp-text-size-16\">Review & Submit(2 of 3)</ion-title>\r\n    </div>\r\n\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button class=\"pull-right\">\r\n          <ion-icon color=\"light\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"crp-chat-background\">\r\n    <ion-label class=\"ion-margin\" text-center color=\"dark\">\r\n      <p class=\"crp-text-size-18\">Please agree to W-8BEN form </p>\r\n    </ion-label>\r\n    <ion-label color=\"dark\">\r\n      <p class=\" crp-text-bold crp-padding\">Electronic W-8BEN Certification<br>\r\n        Name (Line 1): Joe Customer <br>\r\n        Country of Residency (Line9): China<br>\r\n        U.S Taxpayer #: None<br>\r\n        Foreign Tax Identifying #: 1234567788 <br>\r\n      </p>\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        Form W8-BEN is a form used to document your status as a non-U.S. person for tax purposes.\r\n      </p>\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        Your tax reporting status is an important part of your account information, which is why we need you to confirm\r\n        that the following statements are true.\r\n      </p>\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        Under penalties of perjury, I declare that I have examined the information on this form and to the best of my\r\n        knowledge and belief it is true, correct, and complete. I further certify under penalties of perjury that:\r\n      </p>\r\n\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        1. I am the individual that is the beneficial owner (or am authorized to sign for the individual that is the\r\n        beneficial owner) of all the income to which this form relates or am using this form to document myself for\r\n        chapter 4 purposes;\r\n      </p>\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        2. The person named on line 1 of this form is not a U.S. person;\r\n      </p>\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        3. The income to which this form relates is:\r\n        (a) not effectively connected with the conduct of a trade or business in the United States,\r\n        (b) effectively connected but is not subject to tax under an applicable income tax treaty, or\r\n        (c) the partner's share of a partnership's effectively connected income,\r\n      </p>\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        4. The person named on line 1 of this form is a resident of the treaty country listed on line 9 of the form (if\r\n        any) within the meaning of the income tax treaty between the United States and that country, and\r\n      </p>\r\n\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        5. For broker transactions or barter exchanges, the beneficial owner is an exempt foreign person as defined in\r\n        the instructions.\r\n      </p>\r\n\r\n\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        Furthermore, I authorize this form to be provided to any withholding agent that has control, receipt, or custody\r\n        of the income of which I am the beneficial owner or any withholding agent that can disburse or make payments of\r\n        the income of which I am the beneficial owner. I agree that I will submit a new form within 30 days if any\r\n        certification made on this form becomes incorrect.\r\n      </p>\r\n      <p class=\"crp-padding crp-text-size-12\">\r\n        Your agreement to this certification acknowledges your intent to electronically sign form W8-BEN\r\n      </p>\r\n    </ion-label>\r\n    <ion-button class=\"crp-bottom-ion-button\" expand=\"full\" (click)=\"moveToChatReview3()\" color=\"primary\">\r\n      I agree >\r\n    </ion-button>\r\n  </div>\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_review2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-review2.page */ "./src/app/chat-review/chat-review2/chat-review2.page.ts");







var routes = [
    {
        path: '',
        component: _chat_review2_page__WEBPACK_IMPORTED_MODULE_6__["ChatReview2Page"]
    }
];
var ChatReview2PageModule = /** @class */ (function () {
    function ChatReview2PageModule() {
    }
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
    return ChatReview2PageModule;
}());



/***/ }),

/***/ "./src/app/chat-review/chat-review2/chat-review2.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/chat-review/chat-review2/chat-review2.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crp-chat-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.crp-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.crp-text-size-10 {\n  font-size: 10px;\n}\n\n.crp-text-size-12 {\n  font-size: 12px;\n}\n\n.crp-text-size-18 {\n  font-size: 18px;\n}\n\n.crp-text-size-16 {\n  font-size: 16px;\n}\n\n.crp-padding {\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 15px;\n}\n\n.crp-bottom-ion-button {\n  margin-left: 20px;\n  -webkit-box-align: bottom;\n          align-items: bottom;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  text-transform: capitalize;\n  --background:rgb(1, 220, 243) !important;\n  --color: black;\n  font-size: 12px;\n}\n\n.crp-text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1yZXZpZXcvY2hhdC1yZXZpZXcyL0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxjaGF0LXJldmlld1xcY2hhdC1yZXZpZXcyXFxjaGF0LXJldmlldzIucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0LXJldmlldy9jaGF0LXJldmlldzIvY2hhdC1yZXZpZXcyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0NBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1yZXZpZXcvY2hhdC1yZXZpZXcyL2NoYXQtcmV2aWV3Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JwLWNoYXQtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uY3JwLXRvb2xiYXItY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5jcnAtdGV4dC1zaXplLTEwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5jcnAtdGV4dC1zaXplLTEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jcnAtdGV4dC1zaXplLTE4e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5jcnAtdGV4dC1zaXplLTE2e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5jcnAtcGFkZGluZ3tcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuLmNycC1ib3R0b20taW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBib3R0b207XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgLS1iYWNrZ3JvdW5kOnJnYigxLCAyMjAsIDI0MykgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jcnAtdGV4dC1ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iLCIuY3JwLWNoYXQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jcnAtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jcnAtdGV4dC1zaXplLTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY3JwLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNycC10ZXh0LXNpemUtMTgge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jcnAtdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY3JwLXBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jcnAtYm90dG9tLWlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGJvdHRvbTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOnJnYigxLCAyMjAsIDI0MykgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNycC10ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ChatReview2Page = /** @class */ (function () {
    function ChatReview2Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatReview2Page.prototype.ngOnInit = function () {
    };
    ChatReview2Page.prototype.moveToChatReview3 = function () {
        this.navCtrl.navigateForward("chat-review3");
    };
    ChatReview2Page.prototype.goBack = function () {
        this.navCtrl.navigateForward("chat-review");
    };
    ChatReview2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    ChatReview2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-review2',
            template: __webpack_require__(/*! raw-loader!./chat-review2.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review2/chat-review2.page.html"),
            styles: [__webpack_require__(/*! ./chat-review2.page.scss */ "./src/app/chat-review/chat-review2/chat-review2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ChatReview2Page);
    return ChatReview2Page;
}());



/***/ })

}]);
//# sourceMappingURL=chat-review-chat-review2-chat-review2-module-es5.js.map