(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-page-chat-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-page/chat-page.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-page/chat-page.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n  <ion-toolbar class=\"cp-toolbar-color\">\r\n    <ion-title>\r\n    <div>\r\n      <ion-title color=\"light\" class=\"app-text-size-18\">mBank</ion-title>\r\n    </div>\r\n      </ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n    <ion-content>\r\n        <div class=\"cp-chat-background\">\r\n          <ion-list *ngFor=\"let chat of chatList\" >\r\n            <ion-card *ngIf=\"!chat.reply\" class=\"ion-card-dark\" >\r\n              <ion-card-content text-wrap>\r\n                {{chat.description}}\r\n              </ion-card-content>\r\n            </ion-card>\r\n      \r\n            <ion-card *ngIf=\"chat.reply\" class=\"ion-card-light\" >\r\n              <ion-card-content *ngIf=\"chat.description\" text-wrap>\r\n                  {{chat.description}}\r\n              </ion-card-content>\r\n      \r\n              <ion-img *ngIf=\"chat.image\" src=\"assets/shapes.svg\"></ion-img>\r\n            </ion-card>\r\n          </ion-list>    \r\n          <ion-footer transparent>\r\n              <ion-toolbar class=\"footer-ion-toolbar\" text-center no-border transparent >\r\n                <ion-button color=\"primary\" expand=\"full\" (click)=\"moveToReviewPage()\">\r\n                  Review and submit\r\n                </ion-button>\r\n              </ion-toolbar>\r\n            </ion-footer>\r\n          </div>  \r\n      </ion-content>\r\n  \r\n"

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

module.exports = ".cp-chat-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n.cp-chat-background .ion-card-light {\n  --background: #4ca088;\n  --color:white;\n  float: right;\n  width: 65%;\n}\n.cp-chat-background .ion-card-dark {\n  --background: #003c2b;\n  --color:white;\n  float: left;\n  width: 65%;\n}\n.cp-chat-background .footer-ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n.cp-toolbar-color {\n  --background:#007856 0% !important;\n}\nion-button {\n  margin-left: 20px;\n  -webkit-box-align: bottom;\n          align-items: bottom;\n  margin-right: 20px;\n  margin-top: 30px;\n  margin-bottom: 40px;\n  text-transform: capitalize;\n  --background:rgb(1, 220, 243) !important;\n  --color: white;\n}\nion-list {\n  background: transparent;\n}\nion-card-content {\n  white-space: pre;\n}\n.app-text-size-18 {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1wYWdlL0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxjaGF0LXBhZ2VcXGNoYXQtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtcGFnZS9jaGF0LXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURBSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDRVI7QURBSTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDRVI7QURDSTtFQUNJLHlCQUFBO0VBQ0Esd0NBQUE7QUNDUjtBREVBO0VBQ0ksa0NBQUE7QUNDSjtBRENBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0ksdUJBQUE7QUNHSjtBREFBO0VBQ0ksZ0JBQUE7QUNHSjtBREFBO0VBQ0ksZUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1wYWdlL2NoYXQtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3AtY2hhdC1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLmlvbi1jYXJkLWxpZ2h0e1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzRjYTA4ODtcclxuICAgICAgICAtLWNvbG9yIDp3aGl0ZTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDY1JVxyXG4gICAgfVxyXG4gICAgLmlvbi1jYXJkLWRhcmt7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDAzYzJiO1xyXG4gICAgICAgIC0tY29sb3IgOndoaXRlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA2NSVcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvb3Rlci1pb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5jcC10b29sYmFyLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGJvdHRvbTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6cmdiKDEsIDIyMCwgMjQzKSAhaW1wb3J0YW50O1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbn1cclxuXHJcbi5hcHAtdGV4dC1zaXplLTE4e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59IiwiLmNwLWNoYXQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY3AtY2hhdC1iYWNrZ3JvdW5kIC5pb24tY2FyZC1saWdodCB7XG4gIC0tYmFja2dyb3VuZDogIzRjYTA4ODtcbiAgLS1jb2xvcjp3aGl0ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNjUlO1xufVxuLmNwLWNoYXQtYmFja2dyb3VuZCAuaW9uLWNhcmQtZGFyayB7XG4gIC0tYmFja2dyb3VuZDogIzAwM2MyYjtcbiAgLS1jb2xvcjp3aGl0ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2NSU7XG59XG4uY3AtY2hhdC1iYWNrZ3JvdW5kIC5mb290ZXItaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uY3AtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGJvdHRvbTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kOnJnYigxLCAyMjAsIDI0MykgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICB3aGl0ZS1zcGFjZTogcHJlO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xOCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"

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