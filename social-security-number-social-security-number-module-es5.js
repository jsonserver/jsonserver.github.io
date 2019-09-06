(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-security-number-social-security-number-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/social-security-number/social-security-number.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/social-security-number/social-security-number.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar class=\"app-toolbar-color\">\n      <ion-buttons slot=\"start\">\n          <ion-button class=\"pull-left\" (click)=\"goBack()\">\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <div>\n          <ion-title color=\"light\" class=\"app-text-size-12\">Social Security Number</ion-title>\n        </div>\n\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"pull-right\">\n              <ion-icon color=\"light\" ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <div class=\"app-background\">\n\n        <ion-col class=\"ion-margin-top\"></ion-col>\n        <ion-text color=\"dark\">\n         <p class=\"ion-text-center app-text-size-16 app-margin-left app-margin-right\">Do you have a U.S. Social Security Number (SSN) ?</p>\n        </ion-text>\n\n        <ion-list class=\"bg-transparent app-margin-left app-margin-right\">\n            <ion-radio-group>\n\n                <ion-item color=\"none\" >\n                   \n                  </ion-item>\n              \n              <ion-item color=\"none\" >\n                <ion-radio color=\"secondary\" value=\"Yes\" ></ion-radio>\n                <ion-label color=\"dark\" class=\"ion-margin\">Yes</ion-label>\n              </ion-item>\n          \n              <ion-item color=\"none\" >\n                  <ion-radio color=\"secondary\" value=\"No\"></ion-radio>\n                  <ion-label class=\"ion-margin\" color=\"dark\"> No</ion-label>\n                </ion-item>\n            \n          \n\n            </ion-radio-group>\n          </ion-list>\n\n          <ion-col class=\"ion-margin-top\"></ion-col>\n\n          <ion-text color=\"secondary\" (click)=\"presentAlert()\">\n              <p class=\"ion-text-center app-text-size-12\">What is SSN? ></p>\n          </ion-text>\n\n          <ion-col class=\"ion-margin-top\"></ion-col>\n\n          <ion-button color=\"primary\" expand=\"full\" class=\"app-margin-left app-margin-right app-text-size-12\" (click)=\"goToCountryOfCitizenship()\" > Continue ></ion-button>\n\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/social-security-number/social-security-number.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/social-security-number/social-security-number.module.ts ***!
  \*************************************************************************/
/*! exports provided: SocialSecurityNumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSecurityNumberPageModule", function() { return SocialSecurityNumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _social_security_number_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social-security-number.page */ "./src/app/social-security-number/social-security-number.page.ts");







var routes = [
    {
        path: '',
        component: _social_security_number_page__WEBPACK_IMPORTED_MODULE_6__["SocialSecurityNumberPage"]
    }
];
var SocialSecurityNumberPageModule = /** @class */ (function () {
    function SocialSecurityNumberPageModule() {
    }
    SocialSecurityNumberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_social_security_number_page__WEBPACK_IMPORTED_MODULE_6__["SocialSecurityNumberPage"]]
        })
    ], SocialSecurityNumberPageModule);
    return SocialSecurityNumberPageModule;
}());



/***/ }),

/***/ "./src/app/social-security-number/social-security-number.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/social-security-number/social-security-number.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.bg-transparent {\n  background: transparent;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.app-term-condition-margin {\n  margin-top: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL29uYm9hcmQvb25Cb2FyZGluZ0FwcGxpY2F0aW9uL3NyYy9hcHAvc29jaWFsLXNlY3VyaXR5LW51bWJlci9zb2NpYWwtc2VjdXJpdHktbnVtYmVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc29jaWFsLXNlY3VyaXR5LW51bWJlci9zb2NpYWwtc2VjdXJpdHktbnVtYmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwtc2VjdXJpdHktbnVtYmVyL3NvY2lhbC1zZWN1cml0eS1udW1iZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE2e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFwcC10b29sYmFyLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuLmFwcC1tYXJnaW4tbGVmdHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5hcHAtbWFyZ2luLXJpZ2h0e1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW57XG4gICAgbWFyZ2luLXRvcDogMjcwcHg7XG59XG5cblxuIiwiLmFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmFwcC10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYXBwLXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmFwcC1tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYXBwLW1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyNzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/social-security-number/social-security-number.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/social-security-number/social-security-number.page.ts ***!
  \***********************************************************************/
/*! exports provided: SocialSecurityNumberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialSecurityNumberPage", function() { return SocialSecurityNumberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var SocialSecurityNumberPage = /** @class */ (function () {
    function SocialSecurityNumberPage(navCtrl, alertController) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
    }
    SocialSecurityNumberPage.prototype.ngOnInit = function () {
    };
    SocialSecurityNumberPage.prototype.goToCountryOfCitizenship = function () {
        this.navCtrl.navigateForward("country-of-citizenship");
    };
    SocialSecurityNumberPage.prototype.goBack = function () {
        this.navCtrl.navigateForward("residency-status");
    };
    SocialSecurityNumberPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'What is SSN?',
                            cssClass: 'alertCustomDesign',
                            message: 'A Social Security Number (SSN) is a ninedigit number issued to U.S. Citizens, permanent residents and certain temporary residents by the U.S. government for the primary purpose of the tracking individuals for Social Security and tax purposes.',
                            buttons: [{ text: 'Back',
                                    handler: function () {
                                        console.log('Confirm Okay');
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
    SocialSecurityNumberPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    SocialSecurityNumberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social-security-number',
            template: __webpack_require__(/*! raw-loader!./social-security-number.page.html */ "./node_modules/raw-loader/index.js!./src/app/social-security-number/social-security-number.page.html"),
            styles: [__webpack_require__(/*! ./social-security-number.page.scss */ "./src/app/social-security-number/social-security-number.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SocialSecurityNumberPage);
    return SocialSecurityNumberPage;
}());



/***/ })

}]);
//# sourceMappingURL=social-security-number-social-security-number-module-es5.js.map