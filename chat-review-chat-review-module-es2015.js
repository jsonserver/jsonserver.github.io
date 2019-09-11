(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-review-chat-review-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-review/chat-review.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n  <ion-toolbar class=\"crp-toolbar-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"pull-left\" (click)=\"goBack()\">\r\n        <ion-icon color=\"light\" name=\"ios-arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div>\r\n      <ion-title color=\"light\" class=\"crp-text-size-16\">Review & Submit(1 of 3)</ion-title>\r\n    </div>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button class=\"pull-right\">\r\n          <ion-icon color=\"light\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"crp-chat-background\">\r\n    <ion-label class=\"ion-margin\" text-center color=\"dark\">\r\n      <p class=\"crp-text-size-18\"> Please review and confirm the information </p>\r\n    </ion-label>\r\n    <div class=\"ion-margin\">\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Product</ion-label>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">Saving Account</ion-label>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Email address</ion-label>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">rajat.kumar@brillio.com</ion-label>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Phone number</ion-label>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">+91 8095178767</ion-label>\r\n      </ion-row>\r\n    </div>\r\n    <ion-item class=\"crp-ion-item\">\r\n      <ion-label color=\"dark\" text-center>\r\n        <p class=\"crp-text-size-14\"> PERSONAL INFORMATION </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <div class=\"ion-margin\">\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Name</ion-label>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">Rajat Kumar</ion-label>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Sex</ion-label>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">Male</ion-label>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-10\" color=\"dark\">Date of Birth</ion-label>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-label class=\"crp-text-size-12\" color=\"dark\">08-12-1990</ion-label>\r\n      </ion-row>\r\n    </div>\r\n    <div class=\"crp-div-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">National Id Number</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">9894875412548907</ion-label>\r\n          \r\n        </ion-row>\r\n    </div>\r\n    <ion-item no-margin class=\"crp-ion-item\" ></ion-item>\r\n    <ion-item class=\"crp-ion-item\">\r\n        <ion-label color=\"dark\" text-center>\r\n          <p class=\"crp-text-size-14\"> ADDRESS</p>\r\n        </ion-label>\r\n    </ion-item>\r\n    <div class=\"ion-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Current Residential Address</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">Ludhiana</ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <div class=\"crp-div-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Mailing Address</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">J.P.Nagar,Banagalore</ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <ion-item no-margin class=\"crp-ion-item\" ></ion-item>\r\n    <ion-item class=\"crp-ion-item\">\r\n        <ion-label color=\"dark\" text-center>\r\n          <p class=\"crp-text-size-14\"> BACKGROUND INFORMATION</p>\r\n        </ion-label>\r\n    </ion-item>\r\n    <div class=\"ion-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Occupation</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">Teacher</ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Are you a PEP?</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">No</ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Account Purpose</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">General Savings</ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Source of Income</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">Social Security</ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Name of Employer</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">Brillio Technologies</ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Name of years with this employer</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\">12 years</ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <div class=\"ion-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Income Wire Amount</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\"><p> $3000 </p> </ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <div class=\"crp-div-margin\">\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-10\" color=\"dark\">Out Wire Amount</ion-label>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-label class=\"crp-text-size-12\" color=\"dark\"><p> $10,000 -$25,000</p> </ion-label>          \r\n        </ion-row>\r\n    </div>\r\n    <ion-item no-margin class=\"crp-ion-item\" ></ion-item>\r\n\r\n    <ion-button class=\"bottom-ion-button\" expand=\"full\" (click)=\"presentAlert()\" color=\"primary\"> \r\n        Confirm \r\n      </ion-button>\r\n      <ion-text  text-center class=\"crp-text-size-10\"  color=\"secondary\">\r\n        <p><u>Go back and edit information</u></p>\r\n      </ion-text>\r\n  </div>\r\n</ion-content>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-review.page */ "./src/app/chat-review/chat-review.page.ts");







const routes = [
    {
        path: '',
        component: _chat_review_page__WEBPACK_IMPORTED_MODULE_6__["ChatReviewPage"]
    }
];
let ChatReviewPageModule = class ChatReviewPageModule {
};
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



/***/ }),

/***/ "./src/app/chat-review/chat-review.page.scss":
/*!***************************************************!*\
  !*** ./src/app/chat-review/chat-review.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crp-chat-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.crp-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.crp-text-size-10 {\n  font-size: 10px;\n}\n\n.crp-text-size-12 {\n  font-size: 12px;\n}\n\n.crp-text-size-16 {\n  font-size: 16px;\n}\n\n.crp-text-size-18 {\n  font-size: 18px;\n}\n\n.bottom-ion-button {\n  margin-left: 20px;\n  -webkit-box-align: bottom;\n          align-items: bottom;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  text-transform: capitalize;\n  --background:rgb(1, 220, 243) !important;\n  --color: black;\n  font-size: 12px;\n}\n\n.crp-ion-item {\n  --background: transparent;\n  margin-right: 20px;\n}\n\n.crp-div-margin {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1yZXZpZXcvQzpcXFVzZXJzXFxzaHdldGEua1xcSW9uaWNQcm9qZWN0c1xcbWJhbmsvc3JjXFxhcHBcXGNoYXQtcmV2aWV3XFxjaGF0LXJldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtcmV2aWV3L2NoYXQtcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0NBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ01KOztBREpBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ09KOztBRExBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9jaGF0LXJldmlldy9jaGF0LXJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JwLWNoYXQtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4uY3JwLXRvb2xiYXItY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5jcnAtdGV4dC1zaXplLTEwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5jcnAtdGV4dC1zaXplLTEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY3JwLXRleHQtc2l6ZS0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY3JwLXRleHQtc2l6ZS0xOHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYm90dG9tLWlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogYm90dG9tO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC0tYmFja2dyb3VuZDpyZ2IoMSwgMjIwLCAyNDMpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY3JwLWlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4uY3JwLWRpdi1tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcclxufSIsIi5jcnAtY2hhdC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNycC10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmNycC10ZXh0LXNpemUtMTAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jcnAtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY3JwLXRleHQtc2l6ZS0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNycC10ZXh0LXNpemUtMTgge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib3R0b20taW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogYm90dG9tO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6cmdiKDEsIDIyMCwgMjQzKSAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY3JwLWlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY3JwLWRpdi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ChatReviewPage = class ChatReviewPage {
    constructor(alertController, navCtrl) {
        this.alertController = alertController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Important Reminder',
                cssClass: 'alertCustomCss',
                message: '1. Fund your account within 90 days of account opening to avoid automatic closure </br> </br> 2.Fund your account within 90 days of account opening to avoid automatic closure',
                buttons: [{ text: 'OK',
                        handler: () => {
                            this.moveToChatReview2();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    moveToChatReview2() {
        this.navCtrl.navigateForward("chat-review2");
    }
    goBack() {
        this.navCtrl.navigateForward("chat-page");
    }
};
ChatReviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
ChatReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-review',
        template: __webpack_require__(/*! raw-loader!./chat-review.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-review/chat-review.page.html"),
        styles: [__webpack_require__(/*! ./chat-review.page.scss */ "./src/app/chat-review/chat-review.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], ChatReviewPage);



/***/ })

}]);
//# sourceMappingURL=chat-review-chat-review-module-es2015.js.map