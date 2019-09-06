(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-review-chat-review-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-review/chat-review.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n  <ion-toolbar class=\"crp-toolbar-color\">\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"pull-left\" (click)=\"goBack()\">\n        <ion-icon color=\"light\" name=\"ios-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div>\n      <ion-title color=\"light\" class=\"crp-text-size-12\">Review & Submit(1 of 3)</ion-title>\n    </div>\n    <ion-buttons slot=\"end\">\n        <ion-button class=\"pull-right\">\n          <ion-icon color=\"light\" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class=\"crp-chat-background\">\n    <ion-label class=\"ion-margin\" text-center color=\"dark\">\n      <p class=\"crp-text-size-18\"> Please review and confirm the information </p>\n    </ion-label>\n    <div class=\"ion-margin\">\n      <ion-row>\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Product</ion-label>\n      </ion-row>\n      <ion-row>\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">Saving Account</ion-label>\n      </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n      <ion-row>\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Email address</ion-label>\n      </ion-row>\n      <ion-row>\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">rajat.kumar@brillio.com</ion-label>\n      </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n      <ion-row>\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Phone number</ion-label>\n      </ion-row>\n      <ion-row>\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">+91 8095178767</ion-label>\n      </ion-row>\n    </div>\n    <ion-item class=\"crp-ion-item\">\n      <ion-label color=\"dark\" text-center>\n        <p class=\"crp-text-size-14\"> PERSONAL INFORMATION </p>\n      </ion-label>\n    </ion-item>\n    <div class=\"ion-margin\">\n      <ion-row>\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Name</ion-label>\n      </ion-row>\n      <ion-row>\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">Rajat Kumar</ion-label>\n      </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n      <ion-row>\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Sex</ion-label>\n      </ion-row>\n      <ion-row>\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">Male</ion-label>\n      </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n      <ion-row>\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Date of Birth</ion-label>\n      </ion-row>\n      <ion-row>\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">08-12-1990</ion-label>\n      </ion-row>\n    </div>\n    <div class=\"crp-div-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">National Id Number</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">9894875412548907</ion-label>\n          \n        </ion-row>\n    </div>\n    <ion-item no-margin class=\"crp-ion-item\" ></ion-item>\n    <ion-item class=\"crp-ion-item\">\n        <ion-label color=\"dark\" text-center>\n          <p class=\"crp-text-size-14\"> ADDRESS</p>\n        </ion-label>\n    </ion-item>\n    <div class=\"ion-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Current Residential Address</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">Ludhiana</ion-label>          \n        </ion-row>\n    </div>\n    <div class=\"crp-div-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Mailing Address</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">J.P.Nagar,Banagalore</ion-label>          \n        </ion-row>\n    </div>\n    <ion-item no-margin class=\"crp-ion-item\" ></ion-item>\n    <ion-item class=\"crp-ion-item\">\n        <ion-label color=\"dark\" text-center>\n          <p class=\"crp-text-size-14\"> BACKGROUND INFORMATION</p>\n        </ion-label>\n    </ion-item>\n    <div class=\"ion-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Occupation</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">Teacher</ion-label>          \n        </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Are you a PEP?</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">No</ion-label>          \n        </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Account Purpose</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">General Savings</ion-label>          \n        </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Source of Income</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">Social Security</ion-label>          \n        </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Name of Employer</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">Brillio Technologies</ion-label>          \n        </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Name of years with this employer</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">12 years</ion-label>          \n        </ion-row>\n    </div>\n    <div class=\"ion-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Income Wire Amount</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\"><p> $3000 </p> </ion-label>          \n        </ion-row>\n    </div>\n    <div class=\"crp-div-margin\">\n        <ion-row>\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Out Wire Amount</ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-label class=\"crp-text-size-12\" color=\"dark\"><p> $10,000 -$25,000</p> </ion-label>          \n        </ion-row>\n    </div>\n    <ion-item no-margin class=\"crp-ion-item\" ></ion-item>\n\n    <ion-button class=\"bottom-ion-button\" expand=\"full\" (click)=\"presentAlert()\" color=\"primary\"> \n        Confirm \n      </ion-button>\n      <ion-text  text-center class=\"crp-text-size-10\"  color=\"secondary\">\n        <p><u>Go back and edit information</u></p>\n      </ion-text>\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/chat-review/chat-review.module.ts":
/*!***************************************************!*\
  !*** ./src/app/chat-review/chat-review.module.ts ***!
  \***************************************************/
/*! exports provided: ChatReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatReviewPageModule", function() { return ChatReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-review.page */ "./src/app/chat-review/chat-review.page.ts");







var routes = [
    {
        path: '',
        component: _chat_review_page__WEBPACK_IMPORTED_MODULE_6__["ChatReviewPage"]
    }
];
var ChatReviewPageModule = /** @class */ (function () {
    function ChatReviewPageModule() {
    }
    ChatReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_review_page__WEBPACK_IMPORTED_MODULE_6__["ChatReviewPage"]]
        })
    ], ChatReviewPageModule);
    return ChatReviewPageModule;
}());



/***/ }),

/***/ "./src/app/chat-review/chat-review.page.scss":
/*!***************************************************!*\
  !*** ./src/app/chat-review/chat-review.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crp-chat-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.crp-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.crp-text-size-10 {\n  font-size: 10px;\n}\n\n.crp-text-size-12 {\n  font-size: 12px;\n}\n\n.crp-text-size-18 {\n  font-size: 18px;\n}\n\n.bottom-ion-button {\n  margin-left: 20px;\n  -webkit-box-align: bottom;\n          align-items: bottom;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  text-transform: capitalize;\n  --background:rgb(1, 220, 243) !important;\n  --color: black;\n  font-size: 12px;\n}\n\n.crp-ion-item {\n  --background: transparent;\n  margin-right: 20px;\n}\n\n.crp-div-margin {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvY2hhdC1yZXZpZXcvY2hhdC1yZXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0LXJldmlldy9jaGF0LXJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtDQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FESEE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNNSjs7QURKQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1yZXZpZXcvY2hhdC1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNycC1jaGF0LWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY3JwLXRvb2xiYXItY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cbi5jcnAtdGV4dC1zaXplLTEwe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jcnAtdGV4dC1zaXplLTEye1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jcnAtdGV4dC1zaXplLTE4e1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5ib3R0b20taW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGJvdHRvbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC0tYmFja2dyb3VuZDpyZ2IoMSwgMjIwLCAyNDMpICFpbXBvcnRhbnQ7XG4gICAgLS1jb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNycC1pb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5jcnAtZGl2LW1hcmdpbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweFxufSIsIi5jcnAtY2hhdC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNycC10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmNycC10ZXh0LXNpemUtMTAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jcnAtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY3JwLXRleHQtc2l6ZS0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJvdHRvbS1pb24tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBib3R0b207XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDpyZ2IoMSwgMjIwLCAyNDMpICFpbXBvcnRhbnQ7XG4gIC0tY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jcnAtaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jcnAtZGl2LW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/chat-review/chat-review.page.ts":
/*!*************************************************!*\
  !*** ./src/app/chat-review/chat-review.page.ts ***!
  \*************************************************/
/*! exports provided: ChatReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatReviewPage", function() { return ChatReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ChatReviewPage = /** @class */ (function () {
    function ChatReviewPage(alertController, navCtrl) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
    }
    ChatReviewPage.prototype.ngOnInit = function () {
    };
    ChatReviewPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Important Reminder',
                            cssClass: 'alertCustomCss',
                            message: '1. Fund your account within 90 days of account opening to avoid automatic closure </br> </br> 2.Fund your account within 90 days of account opening to avoid automatic closure',
                            buttons: [{ text: 'OK',
                                    handler: function () {
                                        _this.moveToChatReview2();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatReviewPage.prototype.moveToChatReview2 = function () {
        this.navCtrl.navigateForward("chat-review2");
    };
    ChatReviewPage.prototype.goBack = function () {
        this.navCtrl.navigateForward("chat-page");
    };
    ChatReviewPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    ChatReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-review',
            template: __webpack_require__(/*! raw-loader!./chat-review.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review.page.html"),
            styles: [__webpack_require__(/*! ./chat-review.page.scss */ "./src/app/chat-review/chat-review.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ChatReviewPage);
    return ChatReviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-review-chat-review-module-es5.js.map