(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-profile/my-profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"mp-toolbar-color\" >\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button class=\"pull-left\">\r\n          <ion-icon color=\"light\" name=\"arrow-back\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <div>\r\n        <ion-title color=\"light\" class=\"mp-text-size-12\">My Profile</ion-title>\r\n      </div>\r\n    </ion-toolbar>\r\n \r\n   </ion-header>\r\n \r\n\r\n<ion-content>\r\n    <div class=\"mp-myprofile-background\">\r\n        <ion-list class=\"mp-padding-right-20\">\r\n\r\n            <ion-item color= \"transparent\" >\r\n                <ion-label  class=\"mp-text-size-12 mp-text-align-center\" color=\"light\">Account Info</ion-label>\r\n            </ion-item>\r\n           <ion-item  color= \"transparent\" >\r\n                  <ion-label text-wrap class=\" mp-text-size-12 mp-text-align-start\" color=\"light\" >Name</ion-label>\r\n                  <ion-label class=\" mp-text-size-12 mp-text-align-end\"color=\"light\"> Rocky Bhai</ion-label>\r\n           </ion-item>\r\n           <ion-item color= \"transparent\">\r\n                <ion-label color=\"light\" text-wrap class=\" mp-text-size-12 mp-text-align-start\">Password</ion-label>\r\n                <ion-label color=\"primary\"  text-wrap class=\" mp-text-size-12 mp-text-align-end\"> Update ></ion-label>\r\n            </ion-item>\r\n\r\n\r\n            <ion-item color= \"transparent\" >\r\n                <ion-label text-wrap class=\"mp-padding-top-20 mp-text-size-12 mp-text-align-center\" color=\"light\" >Contact Info</ion-label>\r\n            </ion-item>\r\n           <ion-item  color= \"transparent\" >\r\n                  <ion-label text-wrap class=\" mp-text-size-12 mp-text-align-start\" color=\"light\" >Email</ion-label>\r\n                  <ion-label  class=\" mp-text-size-12 mp-text-align-end\"color=\"light\"> Rockybhai@gmail.com</ion-label>\r\n           </ion-item>\r\n           <ion-item  color= \"transparent\" >\r\n              <ion-label text-wrap class=\" mp-text-size-12 mp-text-align-start\" color=\"light\" >Phone</ion-label>\r\n              <ion-label class=\" mp-text-size-12 mp-text-align-end\"color=\"light\"> (+1)6457382901</ion-label>\r\n          </ion-item>\r\n           <ion-item color= \"transparent\">\r\n                <ion-label color=\"light\" text-wrap class=\" mp-text-size-12 mp-text-align-start\">Residential Address</ion-label>\r\n                <ion-label color=\"primary\"  text-wrap class=\" mp-text-size-12 mp-text-align-end\"> View ></ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item color= \"transparent\">\r\n                <ion-label color=\"light\" text-wrap class=\" mp-text-size-12 mp-text-align-start\">Mailing Address</ion-label>\r\n                <ion-label color=\"primary\"  text-wrap class=\" mp-text-size-12 mp-text-align-end\"> View ></ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n        \r\n        <p class=\"ion-text-center  mp-text-size-10\">\r\n            <ion-text color=\"light\"> Need help? </ion-text>\r\n            <ion-text color=\"primary\">Contact Velo</ion-text>\r\n          </p>\r\n      </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/my-profile/my-profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.module.ts ***!
  \*************************************************/
/*! exports provided: MyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/my-profile/my-profile.page.ts");







const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]
    }
];
let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]]
    })
], MyProfilePageModule);



/***/ }),

/***/ "./src/app/my-profile/my-profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mp-myprofile-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.mp-toolbar-color {\n  --background:#001e65 0% !important;\n}\n\n.mp-bg-transparent {\n  background: transparent;\n  color: #001e65;\n}\n\n.mp-text-size-10 {\n  font-size: 10px;\n}\n\n.mp-text-size-12 {\n  font-size: 12px;\n}\n\n.mp-text-align-end {\n  text-align: end;\n}\n\n.mp-text-align-start {\n  text-align: start;\n}\n\n.mp-text-align-center {\n  text-align: center;\n}\n\n.mp-padding-right-20 {\n  padding-right: 20px;\n}\n\n.mp-padding-top-20 {\n  padding-top: 20px;\n}\n\n.mp-align-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 25px;\n  right: 0;\n}\n\nion-list {\n  background-color: transparent !important;\n}\n\nion-item {\n  color: gray;\n}\n\nion-button {\n  --border-width: 1px!important;\n  font-size: 0.7em;\n  --border-radius:0px;\n  width: 88%;\n  text-transform: capitalize;\n}\n\nion-title {\n  position: relative;\n  right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZmlsZS9DOlxcVXNlcnNcXHNod2V0YS5rXFxJb25pY1Byb2plY3RzXFxtYmFuay9zcmNcXGFwcFxcbXktcHJvZmlsZVxcbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwSkFBQTtFQUFBLHNHQUFBO0VBS0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtBO0VBQ0ksa0NBQUE7QUNGSjs7QURJQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUNLSjs7QURIQTtFQUNJLHdDQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0FDT0o7O0FETEE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNRQTs7QUROQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tcC1teXByb2ZpbGUtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQgOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwzMCwxMDEpIDAlLHJnYmEoNTcsMTI2LDE0OSkgMTAwJSxcclxuICAgIFxyXG4gICAgcmdiYSgyOSwyOSwyOSwxKSAzMy4zMyUsXHJcbiAgICBcclxuICAgIHJnYmEoMCwxMTEsMTQ3KSAxMDAlKSFpbXBvcnRhbnQ7ICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5tcC10b29sYmFyLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMwMDFlNjUgMCUgIWltcG9ydGFudDtcclxufVxyXG4ubXAtYmctdHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwMWU2NTtcclxuICB9XHJcbi5tcC10ZXh0LXNpemUtMTB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLm1wLXRleHQtc2l6ZS0xMntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubXAtdGV4dC1hbGlnbi1lbmR7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcblxyXG59XHJcbi5tcC10ZXh0LWFsaWduLXN0YXJ0e1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcblxyXG59XHJcbi5tcC10ZXh0LWFsaWduLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubXAtcGFkZGluZy1yaWdodC0yMHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHhcclxufVxyXG4ubXAtcGFkZGluZy10b3AtMjB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweFxyXG59XHJcbi5tcC1hbGlnbi1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMjVweDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbmlvbi1saXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIGNvbG9yOmdyYXk7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuLS1ib3JkZXItd2lkdGg6IDFweCFpbXBvcnRhbnQ7XHJcbmZvbnQtc2l6ZTogMC43ZW07XHJcbi0tYm9yZGVyLXJhZGl1czowcHg7XHJcbndpZHRoOjg4JTtcclxudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuaW9uLXRpdGxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG59IiwiLm1wLW15cHJvZmlsZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMWU2NSAwJSwgIzM5N2U5NSAxMDAlLCAjMWQxZDFkIDMzLjMzJSwgIzAwNmY5MyAxMDAlKSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubXAtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDAxZTY1IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tcC1iZy10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwMWU2NTtcbn1cblxuLm1wLXRleHQtc2l6ZS0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm1wLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1wLXRleHQtYWxpZ24tZW5kIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ubXAtdGV4dC1hbGlnbi1zdGFydCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuXG4ubXAtdGV4dC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tcC1wYWRkaW5nLXJpZ2h0LTIwIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm1wLXBhZGRpbmctdG9wLTIwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5tcC1hbGlnbi1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMjVweDtcbiAgcmlnaHQ6IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHghaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuN2VtO1xuICAtLWJvcmRlci1yYWRpdXM6MHB4O1xuICB3aWR0aDogODglO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/my-profile/my-profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-profile/my-profile.page.ts ***!
  \***********************************************/
/*! exports provided: MyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePage", function() { return MyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let MyProfilePage = class MyProfilePage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
};
MyProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: __webpack_require__(/*! raw-loader!./my-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-profile/my-profile.page.html"),
        styles: [__webpack_require__(/*! ./my-profile.page.scss */ "./src/app/my-profile/my-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], MyProfilePage);



/***/ })

}]);
//# sourceMappingURL=my-profile-my-profile-module-es2015.js.map