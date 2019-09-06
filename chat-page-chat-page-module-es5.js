(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-page-chat-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-page/chat-page.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-page/chat-page.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n  <ion-toolbar class=\"cp-toolbar-color\">\n    <ion-title>\n      <img alt=\"logo\" id=\"header_logo\" height=\"40\" float-center src=\"assets/brillio_trans.png\">\n    </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n    <ion-content>\n        <div class=\"cp-chat-background\">\n          <ion-list *ngFor=\"let chat of chatList\">\n            <ion-card *ngIf=\"!chat.reply\" class=\"ion-card-dark\" text-wrap>\n              <ion-card-content>\n                {{chat.description}}\n              </ion-card-content>\n            </ion-card>\n      \n            <ion-card *ngIf=\"chat.reply\" class=\"ion-card-light\" text-wrap>\n              <ion-card-content *ngIf=\"chat.description\">\n                  {{chat.description}}\n              </ion-card-content>\n      \n              <ion-img *ngIf=\"chat.image\" src=\"assets/shapes.svg\"></ion-img>\n            </ion-card>\n          </ion-list>    \n          <ion-footer transparent>\n              <ion-toolbar class=\"footer-ion-toolbar\" text-center no-border transparent >\n                <ion-button color=\"primary\" expand=\"full\" (click)=\"moveToReviewPage()\">\n                  Review and submit\n                </ion-button>\n              </ion-toolbar>\n            </ion-footer>\n          </div>  \n      </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/chat-page/chat-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat-page/chat-page.module.ts ***!
  \***********************************************/
/*! exports provided: ChatPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPagePageModule", function() { return ChatPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-page.page */ "./src/app/chat-page/chat-page.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page_page__WEBPACK_IMPORTED_MODULE_6__["ChatPagePage"]
    }
];
var ChatPagePageModule = /** @class */ (function () {
    function ChatPagePageModule() {
    }
    ChatPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page_page__WEBPACK_IMPORTED_MODULE_6__["ChatPagePage"]]
        })
    ], ChatPagePageModule);
    return ChatPagePageModule;
}());



/***/ }),

/***/ "./src/app/chat-page/chat-page.page.scss":
/*!***********************************************!*\
  !*** ./src/app/chat-page/chat-page.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cp-chat-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n.cp-chat-background .ion-card-light {\n  --background: #4ca088;\n  --color:white;\n  float: right;\n  width: 65%;\n}\n.cp-chat-background .ion-card-dark {\n  --background: #003c2b;\n  --color:white;\n  float: left;\n  width: 65%;\n}\n.cp-chat-background .footer-ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n.cp-toolbar-color {\n  --background:#007856 0% !important;\n}\nion-button {\n  margin-left: 20px;\n  -webkit-box-align: bottom;\n          align-items: bottom;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n  --background:rgb(1, 220, 243) !important;\n  --color: white;\n}\nion-list {\n  background: transparent;\n}\nion-card-content {\n  white-space: pre;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvY2hhdC1wYWdlL2NoYXQtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtcGFnZS9jaGF0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDRVI7QURBSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDRVI7QURDSTtFQUNJLHlCQUFBO0VBQ0Esd0NBQUE7QUNDUjtBREVBO0VBQ0ksa0NBQUE7QUNDSjtBRENBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0ksdUJBQUE7QUNHSjtBREFBO0VBQ0ksZ0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtcGFnZS9jaGF0LXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNwLWNoYXQtYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAuaW9uLWNhcmQtbGlnaHR7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzRjYTA4ODtcbiAgICAgICAgLS1jb2xvciA6d2hpdGU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDY1JVxuICAgIH1cbiAgICAuaW9uLWNhcmQtZGFya3tcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAzYzJiO1xuICAgICAgICAtLWNvbG9yIDp3aGl0ZTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiA2NSVcbiAgICB9XG4gICAgXG4gICAgLmZvb3Rlci1pb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmNwLXRvb2xiYXItY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBib3R0b207XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAtLWJhY2tncm91bmQ6cmdiKDEsIDIyMCwgMjQzKSAhaW1wb3J0YW50O1xuICAgIC0tY29sb3I6IHdoaXRlO1xufVxuaW9uLWxpc3R7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnR7XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbn0iLCIuY3AtY2hhdC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jcC1jaGF0LWJhY2tncm91bmQgLmlvbi1jYXJkLWxpZ2h0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjNGNhMDg4O1xuICAtLWNvbG9yOndoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA2NSU7XG59XG4uY3AtY2hhdC1iYWNrZ3JvdW5kIC5pb24tY2FyZC1kYXJrIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAzYzJiO1xuICAtLWNvbG9yOndoaXRlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDY1JTtcbn1cbi5jcC1jaGF0LWJhY2tncm91bmQgLmZvb3Rlci1pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jcC10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogYm90dG9tO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQ6cmdiKDEsIDIyMCwgMjQzKSAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/chat-page/chat-page.page.ts":
/*!*********************************************!*\
  !*** ./src/app/chat-page/chat-page.page.ts ***!
  \*********************************************/
/*! exports provided: ChatPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPagePage", function() { return ChatPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ChatPagePage = /** @class */ (function () {
    function ChatPagePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.chatList = [
            {
                description: "Let's continue applying for your U.S. bank account",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "To start, what's your email address",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "rajat.kumar@brillio.com",
                reply: true,
                image: false,
                editable: false
            },
            {
                description: "What's your country code",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "+91",
                reply: true,
                image: false,
                editable: false
            },
            {
                description: "What's your mobile number",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "8095178767",
                reply: true,
                image: false,
                editable: false
            },
            {
                description: "By providing your email address and mobile phone number, you agree to us using this information to contact you regarding this application and all of your accounts with us <u/>Learn more ",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "We need to verify your identity to help us protect your account. Please take  a photo of the front  of your National  ID Card . This is the side with your photo on it",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "Please enter your mailing address ?",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "",
                reply: true,
                image: true,
                editable: false
            },
            {
                description: "Current Mailing Address:\n Chandigarh \n Ludhiana \n Jalandhar",
                reply: true,
                image: false,
                editable: false
            },
            {
                description: "What is your current occupation? \n (Please select the closest macth)",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "Educator/Teacher",
                reply: true,
                image: false,
                editable: false
            },
            {
                description: "Please provide the name of your employer",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "Brillio Technologies",
                reply: true,
                image: false,
                editable: false
            },
            {
                description: "What is the primary purpose of this account",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "Saving",
                reply: true,
                image: false,
                editable: false
            },
            {
                description: "How much  do you expect to send monthly in this account via international wire transfers ?",
                reply: false,
                image: false,
                editable: false
            },
            {
                description: "$10,000 - $25,000",
                reply: true,
                image: false,
                editable: false
            },
            {
                description: "To complete your application please review and confirm  that all  your information  is correct, agree to W-8 , and agree to terms  and condition",
                reply: false,
                image: false,
                editable: false
            }
        ];
    }
    ChatPagePage.prototype.ngOnInit = function () {
    };
    ChatPagePage.prototype.moveToReviewPage = function () {
        this.navCtrl.navigateForward("chat-review");
    };
    ChatPagePage.prototype.goBack = function () {
        this.navCtrl.navigateForward("premier-checking");
    };
    ChatPagePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    ChatPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-page',
            template: __webpack_require__(/*! raw-loader!./chat-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat-page/chat-page.page.html"),
            styles: [__webpack_require__(/*! ./chat-page.page.scss */ "./src/app/chat-page/chat-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ChatPagePage);
    return ChatPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-page-chat-page-module-es5.js.map