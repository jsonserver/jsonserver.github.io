(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\r\n    <ion-toolbar class=\"ms-toolbar-color\" >\r\n      <div>\r\n        <ion-title color=\"light\" class=\"ms-text-size-16\">Dashboard</ion-title>\r\n      </div>\r\n    </ion-toolbar>\r\n \r\n   </ion-header>\r\n\r\n<ion-content >\r\n\r\n  <div class=\"hv-background\">\r\n\r\n    <ion-text class=\"ion-margin\" text-center color=\"dark\">\r\n     <div  class=\"text-font-size-16\">Good Morning</div>\r\n    </ion-text>\r\n    <ion-text class=\"textCenter\" color=\"dark\">\r\n        <div  class=\"text-font-size-16\">Ian Golmez</div>\r\n    </ion-text>\r\n\r\n    <ion-grid>\r\n      <ion-col>\r\n        <ion-row class=\"transparent\">\r\n\r\n\r\n          <ion-slides pager style=\"border-radius: 10px;\" class=\"div.swiper-pagination\">\r\n            <ion-slide style=\"border-radius: 10px;width:100%; \">\r\n              <ion-list style=\"width:100%; height: 100%; \" expand=\"block\" (click)=\"goToTransactionHistoryChecking()\">\r\n\r\n                <ion-card color=\"dark\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\">CHECKING ...8596</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"amount\">$10,674.00 > </ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\">Available balance</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\">Other Debit - $1,000 Aug 22</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\">Other Credit + $3,456 July 31</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\">Other Credit + $3,660 June 30</ion-label>\r\n                </ion-item>\r\n               </ion-card>\r\n              </ion-list>\r\n            </ion-slide>\r\n            <ion-slide style=\"border-radius: 10px;width:100%; \">\r\n              <ion-list style=\"width:100%; height: 100%; \">\r\n\r\n              <ion-card color=\"dark\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\"> CHECKING ...2282</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"amount\">$10,674.00 > </ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\">Available balance</ion-label>\r\n                </ion-item>\r\n                <ion-button text-center style=\"color: white;\">Add Funds</ion-button>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label color=\"primary\" text-center expand=\"block\" (click)=\"goToTransactionHistoryChecking()\">\r\n                    more > </ion-label>\r\n                </ion-item>\r\n                </ion-card>\r\n              </ion-list>\r\n            </ion-slide>\r\n            <ion-slide style=\"border-radius: 10px;width:100%; \">\r\n              <ion-list style=\"width:100%; height: 100%; \">\r\n\r\n                  <ion-card color=\"dark\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\"> CD ...2282</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"amount\"> $1,983.00 > </ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\"> Available balance</ion-label>\r\n                </ion-item>\r\n                <ion-item color= \"light\" class=\"item-line\" ></ion-item>\r\n                <ion-item lines=\"none\" class=\"whiteColor\">\r\n                  <ion-label text-start> Term </ion-label>\r\n                  <ion-label text-end> 32 days</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" class=\"whiteColor\">\r\n                  <ion-label text-start> Interest Rate </ion-label>\r\n                  <ion-label text-end> 0.295%</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" class=\"whiteColor\">\r\n                  <ion-label text-start> Maturity Date </ion-label>\r\n                  <ion-label color=\"primary\" text-end > Show</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label  color=\"primary\"  text-center expand=\"block\" (click)=\"goToTransactionHistoryCD()\"> more >\r\n                  </ion-label>\r\n                </ion-item>\r\n                </ion-card>\r\n              </ion-list>\r\n            </ion-slide>\r\n            <ion-slide style=\"border-radius: 10px;width:100%; \">\r\n              <ion-list style=\"width:100%; height: 100%\">\r\n\r\n                  <ion-card color=\"dark\">\r\n                <ion-item styles=\"background:6ea8fe\" lines=\"none\">\r\n                  <ion-label text-center class=\"whiteColor\"> mBank CD</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\" text-center class=\"center-image\">\r\n                   \r\n                        <img src='/assets/time.svg' width=\"20\" height=\"20\">\r\n                   \r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label text-wrap text-center class=\"whiteColor\">Lock in a great rate and maximise your savings\r\n                    with our fixed interest time\r\n                    deposits.</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label color=\"primary\" text-center expand=\"block\" (click)=\"goToVeloCD()\"> more ></ion-label>\r\n                </ion-item>\r\n                </ion-card>\r\n              </ion-list>\r\n            </ion-slide>\r\n          </ion-slides>\r\n\r\n          \r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-grid>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footerbg\">\r\n\r\n  <ion-toolbar class=\"db-footer-toolbar\">\r\n    <ion-tabs >\r\n      <ion-tab-bar slot=\"bottom\" class=\"footerbg db-footer-tabbar\">\r\n        <ion-tab-button class=\"footerbg\" tab=\"concierge\" expand=\"block\" (click)=\"openModel()\">\r\n          <ion-icon src=\"/assets/concierge_icon.svg\"></ion-icon>\r\n          <ion-label class=\"whiteColor\">Concierge</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button class=\"footerbg\" tab=\"transfers\">\r\n          <ion-icon src=\"/assets/transfer_icon.svg\"></ion-icon>\r\n          <ion-label class=\"whiteColor\">Transfer</ion-label>\r\n        </ion-tab-button>\r\n\r\n          <ion-tab-button class=\"footerbg\" tab=\"mybrillio\" (click)=\"toggleDrawer()\">\r\n              <ion-icon src=\"/assets/account_icon.svg\"></ion-icon>\r\n              <ion-label class=\"whiteColor\">My Brillio</ion-label>\r\n          </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n  </ion-toolbar>\r\n\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bottom-sheet/bottom-sheet.page */ "./src/app/bottom-sheet/bottom-sheet.page.ts");








const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], _bottom_sheet_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__["BottomSheetPage"]],
        entryComponents: [_bottom_sheet_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__["BottomSheetPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hv-background {\n  background: -webkit-gradient(linear, left top, right bottom, from(gray), to(#e5f1ee));\n  background: linear-gradient(to bottom right, gray, #e5f1ee);\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.ms-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.nf-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#91aef1), to(#6c6c6c)) !important;\n  background: linear-gradient(180deg, #91aef1 0%, #6c6c6c 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n  background-image: url(\"/assets/wave_front.svg\");\n}\n\n.footerbg {\n  background-color: #007856;\n}\n\nion-slides {\n  --bullet-background: rgb(118, 110, 236);\n  --bullet-background-active: rgb(243, 243, 241);\n}\n\n.bottomBar {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n}\n\n.hv-toolbar-color {\n  --background:#001e65 0% !important;\n}\n\n.transparent {\n  --ion-background-color: transparent ;\n}\n\n.textCenter {\n  text-align: center;\n}\n\n.rowMain {\n  height: 70%;\n}\n\n.rowBottom {\n  height: 30%;\n}\n\n#myFixZone {\n  height: 200px;\n}\n\n.container {\n  width: 80%;\n  background-color: bisque;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.container ::-webkit-scrollbar {\n  display: none;\n}\n\n.container .scroll {\n  overflow: auto;\n}\n\n.amount {\n  color: #007856;\n  font-size: 2em;\n}\n\n.whiteColor {\n  color: white;\n}\n\n.col {\n  border: 0.25px solid white;\n}\n\n.text-font-size-12 {\n  font-size: 12px;\n}\n\n.text-font-size-14 {\n  font-size: 14px;\n}\n\n.text-font-size-16 {\n  font-size: 20px;\n}\n\n.item-line {\n  height: 1px;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.db-footer-toolbar {\n  padding: 12px 0px;\n}\n\n.db-footer-tabbar {\n  border: none;\n}\n\n.center-image {\n  margin: 0 auto;\n  max-width: 100px !important;\n  max-height: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUZBQUE7RUFBQSwyREFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrR0FBQTtFQUFBLHdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLCtDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUNBQUE7RUFDQSw4Q0FBQTtBQ0FGOztBREdBO0VBQ0UsMEpBQUE7RUFBQSxzR0FBQTtBQ0FGOztBREtBO0VBQ0Usa0NBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0FDRkY7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtBQ0ZKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREVJO0VBQ0UsYUFBQTtBQ0FOOztBREVJO0VBQ0UsY0FBQTtBQ0FOOztBRElFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7QUNESjs7QURJRTtFQUNFLDBCQUFBO0FDREo7O0FER0M7RUFDRSxlQUFBO0FDQUg7O0FERUM7RUFDQyxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7QUNLRjs7QURGQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5odi1iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgZ3JheSwgI2U1ZjFlZSk7OyAgXHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIFxyXG59XHJcbi5tcy10b29sYmFyLWNvbG9ye1xyXG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZi1iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDE0NSwgMTc0LCAyNDEpIDAlLHJnYigxMDgsMTA4LDEwOCkgMTAwJSkhaW1wb3J0YW50OyAgXHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvd2F2ZV9mcm9udC5zdmcnKTtcclxufVxyXG5cclxuLmZvb3RlcmJnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDc4NTY7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHJnYigxMTgsIDExMCwgMjM2KTtcclxuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogcmdiKDI0MywgMjQzLCAyNDEpO1xyXG59XHJcblxyXG4uYm90dG9tQmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMzAsMTAxKSAwJSxyZ2JhKDU3LDEyNiwxNDkpIDEwMCUsXHJcbiAgcmdiYSgyOSwyOSwyOSwxKSAzMy4zMyUsXHJcbiAgcmdiYSgwLDExMSwxNDcpIDEwMCUpIWltcG9ydGFudDtcclxufVxyXG5cclxuLmh2LXRvb2xiYXItY29sb3J7XHJcbiAgLS1iYWNrZ3JvdW5kOiMwMDFlNjUgMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4udGV4dENlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLnJvd01haW4ge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbn1cclxuLnJvd0JvdHRvbSB7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuI215Rml4Wm9uZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zY3JvbGwge1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbW91bnQge1xyXG4gICAgY29sb3I6ICMwMDc4NTY7XHJcbiAgICBmb250LXNpemU6IDJlbVxyXG4gIH1cclxuXHJcbiAgLndoaXRlQ29sb3Ige1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbiAgfVxyXG5cclxuICAuY29se1xyXG4gICAgYm9yZGVyOiAwLjI1cHggc29saWQgd2hpdGU7XHJcbiB9XHJcbiAudGV4dC1mb250LXNpemUtMTJ7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuIC50ZXh0LWZvbnQtc2l6ZS0xNHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnRleHQtZm9udC1zaXplLTE2e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uaXRlbS1saW5le1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG4uZGItZm9vdGVyLXRvb2xiYXJ7XHJcbiAgcGFkZGluZzogMTJweCAwcHg7XHJcbn1cclxuLmRiLWZvb3Rlci10YWJiYXJ7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbi5jZW50ZXItaW1hZ2V7XHJcbiAgbWFyZ2luOjAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIuaHYtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIGdyYXksICNlNWYxZWUpO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubXMtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5uZi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzkxYWVmMSAwJSwgIzZjNmM2YyAxMDAlKSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3dhdmVfZnJvbnQuc3ZnXCIpO1xufVxuXG4uZm9vdGVyYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ODU2O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogcmdiKDExOCwgMTEwLCAyMzYpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogcmdiKDI0MywgMjQzLCAyNDEpO1xufVxuXG4uYm90dG9tQmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMWU2NSAwJSwgIzM5N2U5NSAxMDAlLCAjMWQxZDFkIDMzLjMzJSwgIzAwNmY5MyAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4uaHYtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDAxZTY1IDAlICFpbXBvcnRhbnQ7XG59XG5cbi50cmFuc3BhcmVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcbn1cblxuLnRleHRDZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3dNYWluIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbi5yb3dCb3R0b20ge1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuI215Rml4Wm9uZSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY29udGFpbmVyIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lciAuc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5hbW91bnQge1xuICBjb2xvcjogIzAwNzg1NjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi53aGl0ZUNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29sIHtcbiAgYm9yZGVyOiAwLjI1cHggc29saWQgd2hpdGU7XG59XG5cbi50ZXh0LWZvbnQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtZm9udC1zaXplLTE0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGV4dC1mb250LXNpemUtMTYge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pdGVtLWxpbmUge1xuICBoZWlnaHQ6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uZGItZm9vdGVyLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMnB4IDBweDtcbn1cblxuLmRiLWZvb3Rlci10YWJiYXIge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jZW50ZXItaW1hZ2Uge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.page.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottom_sheet_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bottom-sheet/bottom-sheet.page */ "./src/app/bottom-sheet/bottom-sheet.page.ts");




let DashboardPage = class DashboardPage {
    constructor(navCtrl, model, menuCtrl) {
        this.navCtrl = navCtrl;
        this.model = model;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    goToTransactionHistoryChecking() {
        this.navCtrl.navigateForward("transaction-history-checking");
    }
    goToTransactionHistoryCD() {
        this.navCtrl.navigateForward("transaction-history-cd");
    }
    goToVeloCD() {
        this.navCtrl.navigateForward("history-velo-cd");
    }
    goToMyVelo() {
        this.navCtrl.navigateForward("history-velo-cd");
    }
    openModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const myModel = yield this.model.create({
                component: _bottom_sheet_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_3__["BottomSheetPage"],
                cssClass: 'my-custom-modal-css'
            });
            yield myModel.present();
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }
    toggleDrawer() {
        this.menuCtrl.toggle();
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html"),
        styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/dashboard/dashboard.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map