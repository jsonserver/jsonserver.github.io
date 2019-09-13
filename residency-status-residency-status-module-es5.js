(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["residency-status-residency-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/residency-status/residency-status.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/residency-status/residency-status.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"app-toolbar-color\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-button class=\"pull-left\" (click)=\"goToProduct()\">\r\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <div>\r\n          <ion-title color=\"light\" class=\"app-text-size-16\">Residency Status</ion-title>\r\n        </div>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button class=\"pull-right\">\r\n              <ion-icon color=\"light\"  ></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"app-background\">\r\n\r\n        <ion-col class=\"ion-margin-top\"></ion-col>\r\n        <ion-text color=\"dark\">\r\n         <p class=\"ion-text-center app-text-size-16\">What is your legal U.S. residency status ?</p>\r\n        </ion-text>\r\n\r\n        <div class=\"screenPhoto\">\r\n          <img src='/assets/bank.svg' width=\"100\" height=\"100\">\r\n        </div>\r\n\r\n        <ion-list class=\"bg-transparent app-margin-left app-margin-right\" >\r\n            <ion-radio-group>\r\n\r\n                <ion-item color=\"none\" >\r\n                    \r\n                  </ion-item>\r\n\r\n              <ion-item color=\"none\" >\r\n                <ion-radio color=\"secondary\" value=\"U.S. Citizen\"  (ionSelect)=\"mcqAnswer(1)\" ></ion-radio>\r\n                <ion-label color=\"dark\" class=\"ion-margin\"> U.S. Citizen</ion-label>\r\n\r\n              </ion-item>\r\n          \r\n              <ion-item color=\"none\" >\r\n                <ion-radio color=\"secondary\" value=\"Permanent Resident\" (ionSelect)=\"mcqAnswer(2)\"></ion-radio>\r\n                <ion-label color=\"dark\" class=\"ion-margin\">Permanent Resident</ion-label>\r\n\r\n              </ion-item>\r\n          \r\n              <ion-item color=\"none\" >\r\n                <ion-radio  color=\"secondary\" value=\"Temporary Resident\" (ionSelect)=\"mcqAnswer(3)\"></ion-radio>\r\n                <ion-label color=\"dark\" class=\"ion-margin\">Temporary Resident</ion-label>\r\n\r\n              </ion-item>\r\n\r\n              <ion-item color=\"none\" >\r\n                  <ion-radio color=\"secondary\" value=\"Non-Resident\" (ionSelect)=\"mcqAnswer(4)\"></ion-radio>\r\n                  <ion-label color=\"dark\" class=\"ion-margin\"> Non-Resident</ion-label>\r\n\r\n              </ion-item>\r\n\r\n             \r\n            </ion-radio-group>\r\n          </ion-list>\r\n\r\n          <ion-col class=\"ion-margin-top\"></ion-col>\r\n\r\n          <ion-text color=\"secondary\" (click)=\"presentAlert()\">\r\n              <p class=\"ion-text-center app-text-size-12\">Help me find out ></p>\r\n          </ion-text>\r\n\r\n          <ion-col class=\"ion-margin-top\"></ion-col>\r\n\r\n          <ion-button color=\"primary\" expand=\"full\" class=\"app-margin-left app-margin-right app-text-size-12\" (click)=\"goToSocialSecurityNumber()\" > Continue ></ion-button>\r\n\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/residency-status/residency-status.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/residency-status/residency-status.module.ts ***!
  \*************************************************************/
/*! exports provided: ResidencyStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidencyStatusPageModule", function() { return ResidencyStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _residency_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./residency-status.page */ "./src/app/residency-status/residency-status.page.ts");







var routes = [
    {
        path: '',
        component: _residency_status_page__WEBPACK_IMPORTED_MODULE_6__["ResidencyStatusPage"]
    }
];
var ResidencyStatusPageModule = /** @class */ (function () {
    function ResidencyStatusPageModule() {
    }
    ResidencyStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_residency_status_page__WEBPACK_IMPORTED_MODULE_6__["ResidencyStatusPage"]]
        })
    ], ResidencyStatusPageModule);
    return ResidencyStatusPageModule;
}());



/***/ }),

/***/ "./src/app/residency-status/residency-status.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/residency-status/residency-status.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.bg-transparent {\n  background: transparent;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.app-term-condition-margin {\n  margin-top: 270px;\n}\n\n.screenPhoto img {\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzaWRlbmN5LXN0YXR1cy9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxccmVzaWRlbmN5LXN0YXR1c1xccmVzaWRlbmN5LXN0YXR1cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jlc2lkZW5jeS1zdGF0dXMvcmVzaWRlbmN5LXN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREVJO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Jlc2lkZW5jeS1zdGF0dXMvcmVzaWRlbmN5LXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5hcHAtdGV4dC1zaXplLTEye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYXBwLXRleHQtc2l6ZS0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmFwcC10b29sYmFyLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLXRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbi5hcHAtbWFyZ2luLWxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uYXBwLW1hcmdpbi1yaWdodHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAyNzBweDtcclxufVxyXG5cclxuLnNjcmVlblBob3RvIHtcclxuICAgIGltZyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiIsIi5hcHAtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5hcHAtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFwcC10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLmJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5hcHAtbWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmFwcC1tYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5hcHAtdGVybS1jb25kaXRpb24tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMjcwcHg7XG59XG5cbi5zY3JlZW5QaG90byBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/residency-status/residency-status.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/residency-status/residency-status.page.ts ***!
  \***********************************************************/
/*! exports provided: ResidencyStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidencyStatusPage", function() { return ResidencyStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ResidencyStatusPage = /** @class */ (function () {
    function ResidencyStatusPage(navCtrl, alertController, router) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
    }
    ResidencyStatusPage.prototype.ngOnInit = function () {
    };
    ResidencyStatusPage.prototype.goToSocialSecurityNumber = function () {
        if (this.value == 1) {
            var json = "{\"val\": " + this.value + "}";
            this.router.navigate(['/social-security-number'], {
                queryParams: JSON.parse(json),
            });
        }
        else {
            this.navCtrl.navigateForward("social-security-number");
        }
    };
    ResidencyStatusPage.prototype.goToProduct = function () {
        this.navCtrl.navigateForward("velo-products");
    };
    ResidencyStatusPage.prototype.mcqAnswer = function (_answer) {
        this.value = _answer;
        console.log(this.value);
    };
    ResidencyStatusPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'WHAT IS YOUR U.S. RESIDENCY STATUS',
                            cssClass: 'alertCustomDesign',
                            message: '<h6>U.S. Citizen</h6></br>An individual who was born in the U.S. or its territoties (including Puerto Pico, Guam and the virgin Islands) or gained U.S. citizenship via a parent; or who is now a naturalized U.S. Citizen.</br> </br> <h6>Permanent Resident</h6> </br> An individual who is a lawful permanent resident of the U.S. and has been issued an alien registration card, form I-551(also known as a "green card").',
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
    ResidencyStatusPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ResidencyStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-residency-status',
            template: __webpack_require__(/*! raw-loader!./residency-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/residency-status/residency-status.page.html"),
            styles: [__webpack_require__(/*! ./residency-status.page.scss */ "./src/app/residency-status/residency-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResidencyStatusPage);
    return ResidencyStatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=residency-status-residency-status-module-es5.js.map