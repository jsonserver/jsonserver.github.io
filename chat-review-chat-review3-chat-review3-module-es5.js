(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-review-chat-review3-chat-review3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review3/chat-review3.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-review/chat-review3/chat-review3.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"crp-toolbar-color\">\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"pull-left\" (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"ios-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div>\n      <ion-title color=\"light\" class=\"crp-text-size-12\">Review & Submit(3 of 3)</ion-title>\n    </div>\n\n    <ion-buttons slot=\"end\">\n        <ion-button class=\"pull-right\">\n          <ion-icon color=\"light\" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"crp-chat-background\">\n    <ion-item color=\"none\">\n      <ion-checkbox item-left mode=\"md\" color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"ion-margin crp-text-size-12 unwrap-label\" color=\"dark\">\n          Terms and Conditions Acceptance: I have opened, read and agree to the terms and conditions of the Privacy Policy, Deposit Account Agreement, Product Terms and Conditions, and Fee Schedule that govern my account relationship and use of Online Banking Services with Velo by East West Bank.\n      </ion-label>\n    </ion-item>\n    <ion-item color=\"none\">\n        <ion-checkbox item-left mode=\"md\" color=\"secondary\"></ion-checkbox>\n        <ion-label class=\"ion-margin crp-text-size-12 unwrap-label\" color=\"dark\">\n            eStatement Acceptance: I acknowledge I have the ability to open up and view a Sample Statement and understand they will be made available in Velo’s Online and/or Mobile Banking platforms.\n        </ion-label>\n      </ion-item>\n    <ion-button class=\"crp-bottom-ion-button\" expand=\"full\" (click)=\"movetoAppComplete()\" color=\"primary\">\n      I agree >\n    </ion-button>\n    <ion-text text-center class=\"crp-text-size-12\" color=\"secondary\"> <p> <u> I do not agree </u></p></ion-text>\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_review3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-review3.page */ "./src/app/chat-review/chat-review3/chat-review3.page.ts");







var routes = [
    {
        path: '',
        component: _chat_review3_page__WEBPACK_IMPORTED_MODULE_6__["ChatReview3Page"]
    }
];
var ChatReview3PageModule = /** @class */ (function () {
    function ChatReview3PageModule() {
    }
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
    return ChatReview3PageModule;
}());



/***/ }),

/***/ "./src/app/chat-review/chat-review3/chat-review3.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/chat-review/chat-review3/chat-review3.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crp-chat-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.crp-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.crp-text-size-10 {\n  font-size: 10px;\n}\n\n.crp-text-size-12 {\n  font-size: 12px;\n}\n\n.crp-text-size-18 {\n  font-size: 18px;\n}\n\n.crp-padding {\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-top: 15px;\n}\n\n.crp-bottom-ion-button {\n  margin-left: 20px;\n  -webkit-box-align: bottom;\n          align-items: bottom;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  text-transform: capitalize;\n  --background:rgb(1, 220, 243) !important;\n  --color: black;\n  font-size: 12px;\n}\n\n.crp-text-bold {\n  font-weight: bold;\n}\n\nion-item {\n  margin-right: 20px;\n  color: white;\n}\n\n.unwrap-label {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvY2hhdC1yZXZpZXcvY2hhdC1yZXZpZXczL2NoYXQtcmV2aWV3My5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtcmV2aWV3L2NoYXQtcmV2aWV3My9jaGF0LXJldmlldzMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQ0FBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNPSjs7QURMQTtFQUNJLGlCQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNTSjs7QURQQTtFQUNJLG1CQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9jaGF0LXJldmlldy9jaGF0LXJldmlldzMvY2hhdC1yZXZpZXczLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcnAtY2hhdC1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7ICBcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY3JwLXRvb2xiYXItY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cbi5jcnAtdGV4dC1zaXplLTEwe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jcnAtdGV4dC1zaXplLTEye1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jcnAtdGV4dC1zaXplLTE4e1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5jcnAtcGFkZGluZ3tcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG59XG4uY3JwLWJvdHRvbS1pb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogYm90dG9tO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLS1iYWNrZ3JvdW5kOnJnYigxLCAyMjAsIDI0MykgIWltcG9ydGFudDtcbiAgICAtLWNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uY3JwLXRleHQtYm9sZHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1pdGVte1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBjb2xvcjogd2hpdGVcbn1cbi51bndyYXAtbGFiZWx7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iLCIuY3JwLWNoYXQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jcnAtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jcnAtdGV4dC1zaXplLTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY3JwLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNycC10ZXh0LXNpemUtMTgge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jcnAtcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNycC1ib3R0b20taW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogYm90dG9tO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6cmdiKDEsIDIyMCwgMjQzKSAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY3JwLXRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udW53cmFwLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ChatReview3Page = /** @class */ (function () {
    function ChatReview3Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatReview3Page.prototype.ngOnInit = function () {
    };
    ChatReview3Page.prototype.movetoAppComplete = function () {
        this.navCtrl.navigateForward("app-complete");
    };
    ChatReview3Page.prototype.goBack = function () {
        this.navCtrl.navigateForward("chat-review2");
    };
    ChatReview3Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    ChatReview3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-review3',
            template: __webpack_require__(/*! raw-loader!./chat-review3.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review3/chat-review3.page.html"),
            styles: [__webpack_require__(/*! ./chat-review3.page.scss */ "./src/app/chat-review/chat-review3/chat-review3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ChatReview3Page);
    return ChatReview3Page;
}());



/***/ })

}]);
//# sourceMappingURL=chat-review-chat-review3-chat-review3-module-es5.js.map