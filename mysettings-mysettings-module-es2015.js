(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mysettings-mysettings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mysettings/mysettings.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mysettings/mysettings.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"ms-toolbar-color\" >\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"pull-left\" (click)=\"goBack()\">\r\n          <ion-icon color=\"light\" name=\"ios-arrow-back\"  ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <div>\r\n        <ion-title color=\"light\" class=\"ms-text-size-16\">My Settings</ion-title>\r\n      </div>\r\n    </ion-toolbar>\r\n \r\n   </ion-header>\r\n \r\n\r\n<ion-content>\r\n    <div class=\"ms-mysetting-background\">\r\n        <ion-list class=\"ms-padding-right-20\">\r\n            <ion-item color= \"transparent\" ><ion-label></ion-label></ion-item>\r\n           <ion-item  color= \"transparent\" >\r\n                  <ion-label text-wrap class=\" ms-text-size-12 ms-text-align-start\" color=\"dark\" >My Profile</ion-label>\r\n                  <ion-label (click)=\"navigateToMyProfile()\" text-wrap class=\" ms-text-size-12 ms-text-align-end\"color=\"secondary\"> Manage ></ion-label>\r\n           </ion-item>\r\n           <ion-item color= \"transparent\">\r\n                <ion-label color=\"dark\" text-wrap class=\" ms-text-size-12 ms-text-align-start\">Alerts</ion-label>\r\n                <ion-label color=\"secondary\"  text-wrap class=\" ms-text-size-12 ms-text-align-end\"> Manage ></ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n      <div text-center class=\"col-md-12\">\r\n        <ion-button (click)=\"signOut()\" color=\"primary\" fill=\"outline\">Sign out</ion-button>\r\n      </div> \r\n      \r\n      </div>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mysettings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mysettings.page */ "./src/app/mysettings/mysettings.page.ts");







const routes = [
    {
        path: '',
        component: _mysettings_page__WEBPACK_IMPORTED_MODULE_6__["MysettingsPage"]
    }
];
let MysettingsPageModule = class MysettingsPageModule {
};
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



/***/ }),

/***/ "./src/app/mysettings/mysettings.page.scss":
/*!*************************************************!*\
  !*** ./src/app/mysettings/mysettings.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ms-mysetting-background {\n  background: #f2f2f2;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.ms-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.ms-bg-transparent {\n  background: transparent;\n  color: #001e65;\n}\n\n.ms-text-size-10 {\n  font-size: 10px;\n}\n\n.ms-text-size-12 {\n  font-size: 12px;\n}\n\n.ms-text-size-16 {\n  font-size: 16px;\n}\n\n.ms-text-align-end {\n  text-align: end;\n}\n\n.ms-text-align-start {\n  text-align: start;\n}\n\n.ms-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\nion-button {\n  --border-width: 1px!important;\n  font-size: 0.7em;\n  --border-radius:0px;\n  width: 88%;\n  text-transform: capitalize;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlzZXR0aW5ncy9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxcbXlzZXR0aW5nc1xcbXlzZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL215c2V0dGluZ3MvbXlzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGtDQUFBO0FDRUo7O0FEQUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURIQTtFQUNJLGlCQUFBO0FDTUo7O0FESEE7RUFDSSxtQkFBQTtBQ01KOztBREpBO0VBQ0ksd0NBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7QUNRSjs7QUROQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9teXNldHRpbmdzL215c2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1zLW15c2V0dGluZy1iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5tcy10b29sYmFyLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcclxufVxyXG4ubXMtYmctdHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwMWU2NTtcclxuICB9XHJcbi5tcy10ZXh0LXNpemUtMTB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLm1zLXRleHQtc2l6ZS0xMntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm1zLXRleHQtc2l6ZS0xNntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubXMtdGV4dC1hbGlnbi1lbmR7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcblxyXG59XHJcbi5tcy10ZXh0LWFsaWduLXN0YXJ0e1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcblxyXG59XHJcbi5tcy1wYWRkaW5nLXJpZ2h0LTIwe1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweFxyXG59XHJcbmlvbi1saXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIGNvbG9yOmdyYXk7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czowcHg7XHJcbiAgICB3aWR0aDo4OCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogNSU7XHJcbn0iLCIubXMtbXlzZXR0aW5nLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubXMtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tcy1iZy10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwMWU2NTtcbn1cblxuLm1zLXRleHQtc2l6ZS0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm1zLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1zLXRleHQtc2l6ZS0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1zLXRleHQtYWxpZ24tZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ubXMtdGV4dC1hbGlnbi1zdGFydCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4ubXMtcGFkZGluZy1yaWdodC0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuN2VtO1xuICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICB3aWR0aDogODglO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNSU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let MysettingsPage = class MysettingsPage {
    constructor(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    navigateToMyProfile() {
        this.navCtrl.navigateForward("my-profile");
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    goBack() {
        this.navCtrl.navigateBack('dashboard');
    }
    signOut() {
        this.navCtrl.navigateRoot('get-started');
    }
};
MysettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
MysettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mysettings',
        template: __webpack_require__(/*! raw-loader!./mysettings.page.html */ "./node_modules/raw-loader/index.js!./src/app/mysettings/mysettings.page.html"),
        styles: [__webpack_require__(/*! ./mysettings.page.scss */ "./src/app/mysettings/mysettings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], MysettingsPage);



/***/ })

}]);
//# sourceMappingURL=mysettings-mysettings-module-es2015.js.map