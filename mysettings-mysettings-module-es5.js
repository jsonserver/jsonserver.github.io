(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mysettings-mysettings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mysettings/mysettings.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mysettings/mysettings.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"ms-toolbar-color\" >\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"pull-left\">\r\n          <ion-icon color=\"light\" name=\"arrow-back\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <div>\r\n        <ion-title color=\"light\" class=\"ms-text-size-12\">My Settings</ion-title>\r\n      </div>\r\n    </ion-toolbar>\r\n \r\n   </ion-header>\r\n \r\n\r\n<ion-content>\r\n    <div class=\"ms-mysetting-background\">\r\n        <ion-list class=\"ms-padding-right-20\">\r\n            <ion-item color= \"transparent\" ><ion-label></ion-label></ion-item>\r\n           <ion-item  color= \"transparent\" >\r\n                  <ion-label text-wrap class=\" ms-text-size-12 ms-text-align-start\" color=\"light\" >My Profile</ion-label>\r\n                  <ion-label (click)=\"navigateToMyProfile()\" text-wrap class=\" ms-text-size-12 ms-text-align-end\"color=\"primary\"> Manage ></ion-label>\r\n           </ion-item>\r\n           <ion-item color= \"transparent\">\r\n                <ion-label color=\"light\" text-wrap class=\" ms-text-size-12 ms-text-align-start\">Alerts</ion-label>\r\n                <ion-label color=\"primary\"  text-wrap class=\" ms-text-size-12 ms-text-align-end\"> Manage ></ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n      <div text-center class=\"col-md-12\">\r\n        <ion-button fill=\"outline\">Sign out</ion-button>\r\n      </div> \r\n      \r\n      </div>\r\n\r\n</ion-content>\r\n"

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

module.exports = ".ms-mysetting-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.ms-toolbar-color {\n  --background:#001e65 0% !important;\n}\n\n.ms-bg-transparent {\n  background: transparent;\n  color: #001e65;\n}\n\n.ms-text-size-10 {\n  font-size: 10px;\n}\n\n.ms-text-size-12 {\n  font-size: 12px;\n}\n\n.ms-text-align-end {\n  text-align: end;\n}\n\n.ms-text-align-start {\n  text-align: start;\n}\n\n.ms-padding-right-20 {\n  padding-right: 20px;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\nion-button {\n  --border-width: 1px!important;\n  font-size: 0.7em;\n  --border-radius:0px;\n  width: 88%;\n  text-transform: capitalize;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlzZXR0aW5ncy9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxcbXlzZXR0aW5nc1xcbXlzZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL215c2V0dGluZ3MvbXlzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwSkFBQTtFQUFBLHNHQUFBO0VBS0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtBO0VBQ0ksa0NBQUE7QUNGSjs7QURJQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSx3Q0FBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBREZBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL215c2V0dGluZ3MvbXlzZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXMtbXlzZXR0aW5nLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kIDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMzAsMTAxKSAwJSxyZ2JhKDU3LDEyNiwxNDkpIDEwMCUsXHJcbiAgICBcclxuICAgIHJnYmEoMjksMjksMjksMSkgMzMuMzMlLFxyXG4gICAgXHJcbiAgICByZ2JhKDAsMTExLDE0NykgMTAwJSkhaW1wb3J0YW50OyAgXHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4ubXMtdG9vbGJhci1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDojMDAxZTY1IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1zLWJnLXRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICMwMDFlNjU7XHJcbiAgfVxyXG4ubXMtdGV4dC1zaXplLTEwe1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5tcy10ZXh0LXNpemUtMTJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1zLXRleHQtYWxpZ24tZW5ke1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG5cclxufVxyXG4ubXMtdGV4dC1hbGlnbi1zdGFydHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cclxufVxyXG4ubXMtcGFkZGluZy1yaWdodC0yMHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcclxufVxyXG5pb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICBjb2xvcjpncmF5O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4IWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MHB4O1xyXG4gICAgd2lkdGg6ODglO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG59IiwiLm1zLW15c2V0dGluZy1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMWU2NSAwJSwgIzM5N2U5NSAxMDAlLCAjMWQxZDFkIDMzLjMzJSwgIzAwNmY5MyAxMDAlKSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubXMtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDAxZTY1IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tcy1iZy10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwMWU2NTtcbn1cblxuLm1zLXRleHQtc2l6ZS0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm1zLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1zLXRleHQtYWxpZ24tZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ubXMtdGV4dC1hbGlnbi1zdGFydCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4ubXMtcGFkZGluZy1yaWdodC0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuN2VtO1xuICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICB3aWR0aDogODglO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNSU7XG59Il19 */"

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