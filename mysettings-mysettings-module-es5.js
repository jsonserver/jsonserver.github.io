(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mysettings-mysettings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mysettings/mysettings.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mysettings/mysettings.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar class=\"ms-toolbar-color\" >\n      <ion-buttons slot=\"start\">\n        <ion-button class=\"pull-left\" (click)=\"goBack()\">\n          <ion-icon color=\"light\" name=\"ios-arrow-back\"  ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <div>\n        <ion-title color=\"light\" class=\"ms-text-size-12\">My Settings</ion-title>\n      </div>\n    </ion-toolbar>\n \n   </ion-header>\n \n\n<ion-content>\n    <div class=\"ms-mysetting-background\">\n        <ion-list class=\"ms-padding-right-20\">\n            <ion-item color= \"transparent\" ><ion-label></ion-label></ion-item>\n           <ion-item  color= \"transparent\" >\n                  <ion-label text-wrap class=\" ms-text-size-12 ms-text-align-start\" color=\"dark\" >My Profile</ion-label>\n                  <ion-label (click)=\"navigateToMyProfile()\" text-wrap class=\" ms-text-size-12 ms-text-align-end\"color=\"secondary\"> Manage ></ion-label>\n           </ion-item>\n           <ion-item color= \"transparent\">\n                <ion-label color=\"dark\" text-wrap class=\" ms-text-size-12 ms-text-align-start\">Alerts</ion-label>\n                <ion-label color=\"secondary\"  text-wrap class=\" ms-text-size-12 ms-text-align-end\"> Manage ></ion-label>\n            </ion-item>\n        </ion-list>\n      <div text-center class=\"col-md-12\">\n        <ion-button (click)=\"signOut()\" color=\"primary\" fill=\"outline\">Sign out</ion-button>\n      </div> \n      \n      </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mysettings/mysettings.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mysettings/mysettings.module.ts ***!
  \*************************************************/
/*! exports provided: MysettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysettingsPageModule", function() { return MysettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mysettings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mysettings.page */ "./src/app/mysettings/mysettings.page.ts");







var routes = [
    {
        path: '',
        component: _mysettings_page__WEBPACK_IMPORTED_MODULE_6__["MysettingsPage"]
    }
];
var MysettingsPageModule = /** @class */ (function () {
    function MysettingsPageModule() {
    }
    MysettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mysettings_page__WEBPACK_IMPORTED_MODULE_6__["MysettingsPage"]]
        })
    ], MysettingsPageModule);
    return MysettingsPageModule;
}());



/***/ }),

/***/ "./src/app/mysettings/mysettings.page.scss":
/*!*************************************************!*\
  !*** ./src/app/mysettings/mysettings.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ms-mysetting-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.ms-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.ms-bg-transparent {\n  background: transparent;\n  color: #001e65;\n}\n\n.ms-text-size-10 {\n  font-size: 10px;\n}\n\n.ms-text-size-12 {\n  font-size: 12px;\n}\n\n.ms-text-align-end {\n  text-align: end;\n}\n\n.ms-text-align-start {\n  text-align: start;\n}\n\n.ms-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\nion-button {\n  --border-width: 1px!important;\n  font-size: 0.7em;\n  --border-radius:0px;\n  width: 88%;\n  text-transform: capitalize;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvbXlzZXR0aW5ncy9teXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXlzZXR0aW5ncy9teXNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0NBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtBQ01KOztBREhBO0VBQ0ksaUJBQUE7QUNNSjs7QURIQTtFQUNJLG1CQUFBO0FDTUo7O0FESkE7RUFDSSx3Q0FBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtBQ1FKOztBRE5BO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDU0o7O0FEUEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL215c2V0dGluZ3MvbXlzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXMtbXlzZXR0aW5nLWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubXMtdG9vbGJhci1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6IzAwNzg1NiAwJSAhaW1wb3J0YW50O1xufVxuLm1zLWJnLXRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzAwMWU2NTtcbiAgfVxuLm1zLXRleHQtc2l6ZS0xMHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4ubXMtdGV4dC1zaXplLTEye1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tcy10ZXh0LWFsaWduLWVuZHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG5cbn1cbi5tcy10ZXh0LWFsaWduLXN0YXJ0e1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuXG59XG4ubXMtcGFkZGluZy1yaWdodC0yMHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4XG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSB7XG4gICAgY29sb3I6Z3JheTtcbn1cbmlvbi1idXR0b257XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweCFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICAgIHdpZHRoOjg4JTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbmlvbi10aXRsZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDUlO1xufSIsIi5tcy1teXNldHRpbmctYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tcy10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLm1zLWJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMDAxZTY1O1xufVxuXG4ubXMtdGV4dC1zaXplLTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubXMtdGV4dC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubXMtdGV4dC1hbGlnbi1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5tcy10ZXh0LWFsaWduLXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5tcy1wYWRkaW5nLXJpZ2h0LTIwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItd2lkdGg6IDFweCFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIC0tYm9yZGVyLXJhZGl1czowcHg7XG4gIHdpZHRoOiA4OCU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mysettings/mysettings.page.ts":
/*!***********************************************!*\
  !*** ./src/app/mysettings/mysettings.page.ts ***!
  \***********************************************/
/*! exports provided: MysettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MysettingsPage", function() { return MysettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MysettingsPage = /** @class */ (function () {
    function MysettingsPage(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    MysettingsPage.prototype.ngOnInit = function () {
    };
    MysettingsPage.prototype.navigateToMyProfile = function () {
        this.navCtrl.navigateForward("my-profile");
    };
    MysettingsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    MysettingsPage.prototype.goBack = function () {
        this.navCtrl.navigateBack('dashboard');
    };
    MysettingsPage.prototype.signOut = function () {
        this.navCtrl.navigateRoot('get-started');
    };
    MysettingsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    MysettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mysettings',
            template: __webpack_require__(/*! raw-loader!./mysettings.page.html */ "./node_modules/raw-loader/index.js!./src/app/mysettings/mysettings.page.html"),
            styles: [__webpack_require__(/*! ./mysettings.page.scss */ "./src/app/mysettings/mysettings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], MysettingsPage);
    return MysettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=mysettings-mysettings-module-es5.js.map