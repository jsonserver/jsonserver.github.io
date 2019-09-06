(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header text-center>\n    <ion-toolbar class=\"ms-toolbar-color\" >\n      <div>\n        <ion-title color=\"light\" class=\"ms-text-size-12\">Dashboard</ion-title>\n      </div>\n    </ion-toolbar>\n \n   </ion-header>\n\n<ion-content >\n\n  <div class=\"hv-background\">\n\n    <ion-text class=\"ion-margin\" text-center color=\"dark\">\n     <div  class=\"text-font-size-16\">Good Morning</div>\n    </ion-text>\n    <ion-text class=\"textCenter\" color=\"dark\">\n        <div  class=\"text-font-size-16\">Ian Golmez</div>\n    </ion-text>\n\n    <ion-grid>\n      <ion-col>\n        <ion-row class=\"transparent\">\n\n\n          <ion-slides pager style=\"border-radius: 10px;\">\n            <ion-slide style=\"border-radius: 10px;width:100%; \">\n              <ion-list style=\"width:100%; height: 100%; \" expand=\"block\" (click)=\"goToTransactionHistoryChecking()\">\n               <ion-card color=\"dark\">\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\">CHECKING ...8596</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"amount\">$10,674.00 > </ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\">Available balance</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\">Other Debit - $1,000 Aug 22</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\">Other Credit + $3,456 July 31</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\">Other Credit + $3,660 June 30</ion-label>\n                </ion-item>\n               </ion-card>\n              </ion-list>\n            </ion-slide>\n            <ion-slide style=\"border-radius: 10px;width:100%; \">\n              <ion-list style=\"width:100%; height: 100%; \">\n              <ion-card color=\"dark\">\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\"> CHECKING ...2282</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"amount\">$8,243.00 > </ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\">Available balance</ion-label>\n                </ion-item>\n                <ion-button text-center style=\"color: white;\">Add Funds</ion-button>\n                <ion-item lines=\"none\">\n                  <ion-label color=\"primary\" text-center expand=\"block\" (click)=\"goToTransactionHistoryChecking()\">\n                    more > </ion-label>\n                </ion-item>\n                </ion-card>\n              </ion-list>\n            </ion-slide>\n            <ion-slide style=\"border-radius: 10px;width:100%; \">\n              <ion-list style=\"width:100%; height: 100%; \">\n                  <ion-card color=\"dark\">\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\"> CD ...2282</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"amount\"> $1,983.00 > </ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\"> Available balance</ion-label>\n                </ion-item>\n                <ion-item color= \"light\" class=\"item-line\" ><ion-label ></ion-label></ion-item>\n                <ion-item lines=\"none\" class=\"whiteColor\">\n                  <ion-label text-start> Term </ion-label>\n                  <ion-label text-end> 32 days</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\" class=\"whiteColor\">\n                  <ion-label text-start> Interest Rate </ion-label>\n                  <ion-label text-end> 0.295%</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\" class=\"whiteColor\">\n                  <ion-label text-start> Maturity Date </ion-label>\n                  <ion-label color=\"primary\" text-end > Show</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label  color=\"primary\" style=\"margin: 40px\" text-center expand=\"block\" (click)=\"goToTransactionHistoryCD()\"> more >\n                  </ion-label>\n                </ion-item>\n                </ion-card>\n              </ion-list>\n            </ion-slide>\n            <ion-slide style=\"border-radius: 10px;width:100%; \">\n              <ion-list style=\"width:100%; height: 100%\">\n                  <ion-card color=\"dark\">\n                <ion-item styles=\"background:6ea8fe\" lines=\"none\">\n                  <ion-label text-center class=\"whiteColor\"> BRILLIO CD</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\"><img text-center src=\"/assets/certificate_of_deposite_icon.svg\" alt=\"\"\n                    style=\"display: block; margin:auto\" /></ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label text-wrap text-center class=\"whiteColor\">Lock in a great rate and maximise your savings\n                    with our fixed interest time\n                    deposits.</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                  <ion-label color=\"primary\" text-center expand=\"block\" (click)=\"goToVeloCD()\"> more ></ion-label>\n                </ion-item>\n                </ion-card>\n              </ion-list>\n            </ion-slide>\n          </ion-slides>\n\n          \n        </ion-row>\n      </ion-col>\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"footerbg\">\n\n  <ion-toolbar class=\"db-footer-toolbar\">\n    <ion-tabs >\n      <ion-tab-bar slot=\"bottom\" class=\"footerbg db-footer-tabbar\">\n        <ion-tab-button class=\"footerbg\" tab=\"concierge\" expand=\"block\" (click)=\"openModel()\">\n          <ion-icon src=\"/assets/concierge_icon.svg\"></ion-icon>\n          <ion-label class=\"whiteColor\">Concierge</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button class=\"footerbg\" tab=\"transfers\">\n          <ion-icon src=\"/assets/transfer_icon.svg\"></ion-icon>\n          <ion-label class=\"whiteColor\">Transfer</ion-label>\n        </ion-tab-button>\n\n          <ion-tab-button class=\"footerbg\" tab=\"mybrillio\" (click)=\"toggleDrawer()\">\n              <ion-icon src=\"/assets/account_icon.svg\"></ion-icon>\n              <ion-label class=\"whiteColor\">My Brillio</ion-label>\n          </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n  </ion-toolbar>\n\n</ion-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/dashboard/dashboard.page.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bottom-sheet/bottom-sheet.page */ "./src/app/bottom-sheet/bottom-sheet.page.ts");








var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
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
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.page.scss":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hv-background {\n  background: -webkit-gradient(linear, left top, right bottom, from(gray), to(#e5f1ee));\n  background: linear-gradient(to bottom right, gray, #e5f1ee);\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.ms-toolbar-color {\n  --background:#007856 0% !important;\n}\n\n.nf-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#91aef1), to(#6c6c6c)) !important;\n  background: linear-gradient(180deg, #91aef1 0%, #6c6c6c 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n  background-image: url(\"/assets/wave_front.svg\");\n}\n\n.footerbg {\n  background-color: #007856;\n}\n\nion-slides {\n  --bullet-background: rgb(118, 110, 236);\n  --bullet-background-active: rgb(243, 243, 241);\n}\n\n.bottomBar {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n}\n\n.hv-toolbar-color {\n  --background:#001e65 0% !important;\n}\n\n.transparent {\n  --ion-background-color: transparent ;\n}\n\n.textCenter {\n  text-align: center;\n}\n\n.rowMain {\n  height: 70%;\n}\n\n.rowBottom {\n  height: 30%;\n}\n\n#myFixZone {\n  height: 200px;\n}\n\n.container {\n  width: 80%;\n  background-color: bisque;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.container ::-webkit-scrollbar {\n  display: none;\n}\n\n.container .scroll {\n  overflow: auto;\n}\n\n.amount {\n  color: #007856;\n  font-size: 2em;\n}\n\n.whiteColor {\n  color: white;\n}\n\n.col {\n  border: 0.25px solid white;\n}\n\n.text-font-size-12 {\n  font-size: 12px;\n}\n\n.text-font-size-14 {\n  font-size: 14px;\n}\n\n.text-font-size-16 {\n  font-size: 20px;\n}\n\n.item-line {\n  height: 1px;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.db-footer-toolbar {\n  padding: 12px 0px;\n}\n\n.db-footer-tabbar {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUZBQUE7RUFBQSwyREFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrR0FBQTtFQUFBLHdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLCtDQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUNBQUE7RUFDQSw4Q0FBQTtBQ0FGOztBREdBO0VBQ0UsMEpBQUE7RUFBQSxzR0FBQTtBQ0FGOztBREtBO0VBQ0Usa0NBQUE7QUNGRjs7QURLQTtFQUNFLG9DQUFBO0FDRkY7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtBQ0ZKOztBRElBO0VBQ0ksV0FBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBRElBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREVJO0VBQ0UsYUFBQTtBQ0FOOztBREVJO0VBQ0UsY0FBQTtBQ0FOOztBRElFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7QUNESjs7QURJRTtFQUNFLDBCQUFBO0FDREo7O0FER0M7RUFDRSxlQUFBO0FDQUg7O0FERUM7RUFDQyxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmh2LWJhY2tncm91bmR7XG4gIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgZ3JheSwgI2U1ZjFlZSk7OyAgXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIFxufVxuLm1zLXRvb2xiYXItY29sb3J7XG4gIC0tYmFja2dyb3VuZDojMDA3ODU2IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5uZi1iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigxNDUsIDE3NCwgMjQxKSAwJSxyZ2IoMTA4LDEwOCwxMDgpIDEwMCUpIWltcG9ydGFudDsgIFxuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy93YXZlX2Zyb250LnN2ZycpO1xufVxuXG4uZm9vdGVyYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDc4NTY7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiByZ2IoMTE4LCAxMTAsIDIzNik7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiByZ2IoMjQzLCAyNDMsIDI0MSk7XG59XG5cbi5ib3R0b21CYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMzAsMTAxKSAwJSxyZ2JhKDU3LDEyNiwxNDkpIDEwMCUsXG4gIHJnYmEoMjksMjksMjksMSkgMzMuMzMlLFxuICByZ2JhKDAsMTExLDE0NykgMTAwJSkhaW1wb3J0YW50O1xufVxuXG4uaHYtdG9vbGJhci1jb2xvcntcbiAgLS1iYWNrZ3JvdW5kOiMwMDFlNjUgMCUgIWltcG9ydGFudDtcbn1cblxuLnRyYW5zcGFyZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuLnRleHRDZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4ucm93TWFpbiB7XG4gICAgaGVpZ2h0OiA3MCU7XG59XG4ucm93Qm90dG9tIHtcbiAgICBoZWlnaHQ6IDMwJTtcbn1cblxuI215Rml4Wm9uZSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zY3JvbGwge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLmFtb3VudCB7XG4gICAgY29sb3I6ICMwMDc4NTY7XG4gICAgZm9udC1zaXplOiAyZW1cbiAgfVxuXG4gIC53aGl0ZUNvbG9yIHtcbiAgICBjb2xvcjogd2hpdGVcbiAgfVxuXG4gIC5jb2x7XG4gICAgYm9yZGVyOiAwLjI1cHggc29saWQgd2hpdGU7XG4gfVxuIC50ZXh0LWZvbnQtc2l6ZS0xMntcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiB9XG4gLnRleHQtZm9udC1zaXplLTE0e1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGV4dC1mb250LXNpemUtMTZ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5pdGVtLWxpbmV7XG4gIGhlaWdodDogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uZGItZm9vdGVyLXRvb2xiYXJ7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xufVxuLmRiLWZvb3Rlci10YWJiYXJ7XG4gIGJvcmRlcjpub25lO1xufSIsIi5odi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgZ3JheSwgI2U1ZjFlZSk7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tcy10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDc4NTYgMCUgIWltcG9ydGFudDtcbn1cblxuLm5mLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTFhZWYxIDAlLCAjNmM2YzZjIDEwMCUpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvd2F2ZV9mcm9udC5zdmdcIik7XG59XG5cbi5mb290ZXJiZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc4NTY7XG59XG5cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiByZ2IoMTE4LCAxMTAsIDIzNik7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiByZ2IoMjQzLCAyNDMsIDI0MSk7XG59XG5cbi5ib3R0b21CYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAxZTY1IDAlLCAjMzk3ZTk1IDEwMCUsICMxZDFkMWQgMzMuMzMlLCAjMDA2ZjkzIDEwMCUpICFpbXBvcnRhbnQ7XG59XG5cbi5odi10b29sYmFyLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDFlNjUgMCUgIWltcG9ydGFudDtcbn1cblxuLnRyYW5zcGFyZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgO1xufVxuXG4udGV4dENlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvd01haW4ge1xuICBoZWlnaHQ6IDcwJTtcbn1cblxuLnJvd0JvdHRvbSB7XG4gIGhlaWdodDogMzAlO1xufVxuXG4jbXlGaXhab25lIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jb250YWluZXIgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udGFpbmVyIC5zY3JvbGwge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmFtb3VudCB7XG4gIGNvbG9yOiAjMDA3ODU2O1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLndoaXRlQ29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb2wge1xuICBib3JkZXI6IDAuMjVweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnRleHQtZm9udC1zaXplLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGV4dC1mb250LXNpemUtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50ZXh0LWZvbnQtc2l6ZS0xNiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLml0ZW0tbGluZSB7XG4gIGhlaWdodDogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5kYi1mb290ZXItdG9vbGJhciB7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xufVxuXG4uZGItZm9vdGVyLXRhYmJhciB7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottom_sheet_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bottom-sheet/bottom-sheet.page */ "./src/app/bottom-sheet/bottom-sheet.page.ts");




var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, model, menuCtrl) {
        this.navCtrl = navCtrl;
        this.model = model;
        this.menuCtrl = menuCtrl;
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.goToTransactionHistoryChecking = function () {
        this.navCtrl.navigateForward("transaction-history-checking");
    };
    DashboardPage.prototype.goToTransactionHistoryCD = function () {
        this.navCtrl.navigateForward("transaction-history-cd");
    };
    DashboardPage.prototype.goToVeloCD = function () {
        this.navCtrl.navigateForward("history-velo-cd");
    };
    DashboardPage.prototype.goToMyVelo = function () {
        this.navCtrl.navigateForward("history-velo-cd");
    };
    DashboardPage.prototype.openModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myModel;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.create({
                            component: _bottom_sheet_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_3__["BottomSheetPage"],
                            cssClass: 'my-custom-modal-css'
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
    DashboardPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    DashboardPage.prototype.toggleDrawer = function () {
        this.menuCtrl.toggle();
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
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
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map