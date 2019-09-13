(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-security-number-social-security-number-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/social-security-number/social-security-number.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/social-security-number/social-security-number.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"app-toolbar-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button class=\"pull-left\" (click)=\"goBack()\">\r\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <div>\r\n          <ion-title color=\"light\" class=\"app-text-size-16\">Social Security Number</ion-title>\r\n        </div>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button class=\"pull-right\">\r\n              <ion-icon color=\"light\" ></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"app-background\">\r\n\r\n        <ion-col class=\"ion-margin-top\"></ion-col>\r\n        <ion-text color=\"dark\">\r\n         <p class=\"ion-text-center app-text-size-16 app-margin-left app-margin-right\">Do you have a U.S. Social Security Number (SSN) ?</p>\r\n        </ion-text>\r\n\r\n        <div class=\"screenPhoto\">\r\n            <img src='/assets/unlock.svg' width=\"100\" height=\"100\">\r\n          </div>\r\n\r\n        <ion-list class=\"bg-transparent app-margin-left app-margin-right\">\r\n            <ion-radio-group>\r\n\r\n                <ion-item color=\"none\" >\r\n                   \r\n                  </ion-item>\r\n              \r\n              <ion-item color=\"none\" >\r\n                <ion-radio color=\"secondary\" value=\"Yes\" ></ion-radio>\r\n                <ion-label color=\"dark\" class=\"ion-margin\">Yes</ion-label>\r\n              </ion-item>\r\n          \r\n              <ion-item color=\"none\" >\r\n                  <ion-radio color=\"secondary\" value=\"No\"></ion-radio>\r\n                  <ion-label class=\"ion-margin\" color=\"dark\"> No</ion-label>\r\n                </ion-item>\r\n            \r\n          \r\n\r\n            </ion-radio-group>\r\n          </ion-list>\r\n\r\n          <ion-col class=\"ion-margin-top\"></ion-col>\r\n\r\n          <ion-text color=\"secondary\" (click)=\"presentAlert()\">\r\n              <p class=\"ion-text-center app-text-size-12\">What is SSN? ></p>\r\n          </ion-text>\r\n\r\n          <ion-col class=\"ion-margin-top\"></ion-col>\r\n\r\n          <ion-button color=\"primary\" expand=\"full\" class=\"app-margin-left app-margin-right app-text-size-12\" (click)=\"goToCountryOfCitizenship()\" > Continue ></ion-button>\r\n\r\n    </div>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _social_security_number_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./social-security-number.page */ "./src/app/social-security-number/social-security-number.page.ts");







const routes = [
    {
        path: '',
        component: _social_security_number_page__WEBPACK_IMPORTED_MODULE_6__["SocialSecurityNumberPage"]
    }
];
let SocialSecurityNumberPageModule = class SocialSecurityNumberPageModule {
};
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



/***/ }),

/***/ "./src/app/social-security-number/social-security-number.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/social-security-number/social-security-number.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.bg-transparent {\n  background: transparent;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.app-term-condition-margin {\n  margin-top: 270px;\n}\n\n.screenPhoto img {\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsLXNlY3VyaXR5LW51bWJlci9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxcc29jaWFsLXNlY3VyaXR5LW51bWJlclxcc29jaWFsLXNlY3VyaXR5LW51bWJlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3NvY2lhbC1zZWN1cml0eS1udW1iZXIvc29jaWFsLXNlY3VyaXR5LW51bWJlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREVJO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC1zZWN1cml0eS1udW1iZXIvc29jaWFsLXNlY3VyaXR5LW51bWJlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5hcHAtdGV4dC1zaXplLTEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYXBwLXRleHQtc2l6ZS0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmFwcC10b29sYmFyLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLXRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbi5hcHAtbWFyZ2luLWxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uYXBwLW1hcmdpbi1yaWdodHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAyNzBweDtcclxufVxyXG5cclxuLnNjcmVlblBob3RvIHtcclxuICAgIGltZyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4iLCIuYXBwLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFwcC10ZXh0LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hcHAtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYXBwLW1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5hcHAtbWFyZ2luLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYXBwLXRlcm0tY29uZGl0aW9uLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDI3MHB4O1xufVxuXG4uc2NyZWVuUGhvdG8gaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SocialSecurityNumberPage = class SocialSecurityNumberPage {
    constructor(router, navCtrl, alertController, activatedRoute) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe((res) => {
            this.myObject = (JSON.stringify(res));
        });
    }
    ngOnInit() {
    }
    goToCountryOfCitizenship() {
        if (this.myObject.includes("1")) {
            this.router.navigate(['/premier-checking'], {
                queryParams: JSON.parse(this.myObject),
            });
        }
        else
            this.navCtrl.navigateForward("country-of-citizenship");
    }
    goBack() {
        this.navCtrl.navigateForward("residency-status");
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'What is SSN?',
                cssClass: 'alertCustomDesign',
                message: 'A Social Security Number (SSN) is a ninedigit number issued to U.S. Citizens, permanent residents and certain temporary residents by the U.S. government for the primary purpose of the tracking individuals for Social Security and tax purposes.',
                buttons: [{ text: 'Back',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
SocialSecurityNumberPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SocialSecurityNumberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social-security-number',
        template: __webpack_require__(/*! raw-loader!./social-security-number.page.html */ "./node_modules/raw-loader/index.js!./src/app/social-security-number/social-security-number.page.html"),
        styles: [__webpack_require__(/*! ./social-security-number.page.scss */ "./src/app/social-security-number/social-security-number.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SocialSecurityNumberPage);



/***/ })

}]);
//# sourceMappingURL=social-security-number-social-security-number-module-es2015.js.map