(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country-of-citizenship-country-of-citizenship-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/country-of-citizenship/country-of-citizenship.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/country-of-citizenship/country-of-citizenship.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar class=\"app-toolbar-color\">\n      <ion-buttons slot=\"start\">\n          <ion-button class=\"pull-left\" (click)=\"goBack()\">\n            <ion-icon color=\"light\" name=\"ios-arrow-back\" ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <div>\n          <ion-title color=\"light\" class=\"app-text-size-12\">Country of Citizenship</ion-title>\n        </div>\n\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"pull-right\">\n              <ion-icon color=\"light\"  ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <div class=\"app-background\">\n\n        <ion-col class=\"ion-margin-top\"></ion-col>\n        <ion-text color=\"dark\">\n         <p class=\"ion-text-center app-text-size-16 app-margin-left app-margin-right\">What is your Country of citizenship ?</p>\n        </ion-text>\n\n        <ion-list class=\"bg-transparent app-margin-left app-margin-right\">\n              <ion-item color=\"none\">\n                <ion-label color=\"dark\" class=\"ion-margin\">Select Country</ion-label>\n                <ion-buttons slot=\"end\">\n                    <ion-button class=\"pull-right\" (click)=\"openModel()\" color=\"secondary\">\n                      <ion-icon color=\"dark\" name=\"md-arrow-dropdown\" ></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n              </ion-item>\n          </ion-list>\n\n          <ion-col class=\"ion-margin-top\"></ion-col>\n\n          <ion-button color=\"primary\" expand=\"full\" class=\"app-margin-left app-margin-right app-text-size-12\" (click)=\"goToPremierChecking()\" > Continue ></ion-button>\n\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/country-of-citizenship/country-of-citizenship.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/country-of-citizenship/country-of-citizenship.module.ts ***!
  \*************************************************************************/
/*! exports provided: CountryOfCitizenshipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOfCitizenshipPageModule", function() { return CountryOfCitizenshipPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _country_of_citizenship_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country-of-citizenship.page */ "./src/app/country-of-citizenship/country-of-citizenship.page.ts");
/* harmony import */ var _list_of_country_list_of_country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../list-of-country/list-of-country.page */ "./src/app/list-of-country/list-of-country.page.ts");








var routes = [
    {
        path: '',
        component: _country_of_citizenship_page__WEBPACK_IMPORTED_MODULE_6__["CountryOfCitizenshipPage"]
    }
];
var CountryOfCitizenshipPageModule = /** @class */ (function () {
    function CountryOfCitizenshipPageModule() {
    }
    CountryOfCitizenshipPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_country_of_citizenship_page__WEBPACK_IMPORTED_MODULE_6__["CountryOfCitizenshipPage"], _list_of_country_list_of_country_page__WEBPACK_IMPORTED_MODULE_7__["ListOfCountryPage"]],
            entryComponents: [_list_of_country_list_of_country_page__WEBPACK_IMPORTED_MODULE_7__["ListOfCountryPage"]]
        })
    ], CountryOfCitizenshipPageModule);
    return CountryOfCitizenshipPageModule;
}());



/***/ }),

/***/ "./src/app/country-of-citizenship/country-of-citizenship.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/country-of-citizenship/country-of-citizenship.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.app-text-size-12 {\n  font-size: 12px;\n}\n\n.app-text-size-16 {\n  font-size: 16px;\n}\n\n.app-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.bg-transparent {\n  background: transparent;\n}\n\n.app-margin-left {\n  margin-left: 20px;\n}\n\n.app-margin-right {\n  margin-right: 20px;\n}\n\n.app-term-condition-margin {\n  margin-top: 270px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvY291bnRyeS1vZi1jaXRpemVuc2hpcC9jb3VudHJ5LW9mLWNpdGl6ZW5zaGlwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY291bnRyeS1vZi1jaXRpemVuc2hpcC9jb3VudHJ5LW9mLWNpdGl6ZW5zaGlwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb3VudHJ5LW9mLWNpdGl6ZW5zaGlwL2NvdW50cnktb2YtY2l0aXplbnNoaXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYXBwLXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE2e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmFwcC10b29sYmFyLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuLmFwcC1tYXJnaW4tbGVmdHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5hcHAtbWFyZ2luLXJpZ2h0e1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW57XG4gICAgbWFyZ2luLXRvcDogMjcwcHg7XG59XG5cblxuIiwiLmFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmFwcC10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hcHAtdGV4dC1zaXplLTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYXBwLXRvb2xiYXItY29sb3Ige1xuICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xufVxuXG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmFwcC1tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYXBwLW1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmFwcC10ZXJtLWNvbmRpdGlvbi1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAyNzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/country-of-citizenship/country-of-citizenship.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/country-of-citizenship/country-of-citizenship.page.ts ***!
  \***********************************************************************/
/*! exports provided: CountryOfCitizenshipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOfCitizenshipPage", function() { return CountryOfCitizenshipPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_of_country_list_of_country_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-of-country/list-of-country.page */ "./src/app/list-of-country/list-of-country.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var CountryOfCitizenshipPage = /** @class */ (function () {
    function CountryOfCitizenshipPage(navCtrl, model) {
        this.navCtrl = navCtrl;
        this.model = model;
    }
    CountryOfCitizenshipPage.prototype.ngOnInit = function () {
    };
    CountryOfCitizenshipPage.prototype.openModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myModel;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.create({
                            component: _list_of_country_list_of_country_page__WEBPACK_IMPORTED_MODULE_2__["ListOfCountryPage"],
                            cssClass: 'country-modal-css'
                        })];
                    case 1:
                        myModel = _a.sent();
                        return [4 /*yield*/, myModel.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CountryOfCitizenshipPage.prototype.goToPremierChecking = function () {
        this.navCtrl.navigateForward("premier-checking");
    };
    CountryOfCitizenshipPage.prototype.goBack = function () {
        this.navCtrl.navigateForward("social-security-number");
    };
    CountryOfCitizenshipPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    CountryOfCitizenshipPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country-of-citizenship',
            template: __webpack_require__(/*! raw-loader!./country-of-citizenship.page.html */ "./node_modules/raw-loader/index.js!./src/app/country-of-citizenship/country-of-citizenship.page.html"),
            styles: [__webpack_require__(/*! ./country-of-citizenship.page.scss */ "./src/app/country-of-citizenship/country-of-citizenship.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], CountryOfCitizenshipPage);
    return CountryOfCitizenshipPage;
}());



/***/ })

}]);
//# sourceMappingURL=country-of-citizenship-country-of-citizenship-module-es5.js.map