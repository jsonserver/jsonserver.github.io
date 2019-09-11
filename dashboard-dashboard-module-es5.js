(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content fullscreen>\r\n\r\n  <div class=\"hv-background\">\r\n\r\n  <ion-text class=\"textCenter\" color=\"light\">\r\n    <h1> Good morning </h1>\r\n  </ion-text>\r\n  <ion-text class=\"textCenter\" color=\"light\">\r\n    <h1> Ian Golmez </h1>\r\n  </ion-text>\r\n\r\n  <ion-grid>\r\n\r\n    <ion-col style=\"width: 100%; height:100%\">\r\n\r\n      <ion-row class = \"transparent\">\r\n        <ion-slides pager style=\"border-radius: 10px;\">\r\n          <ion-slide style=\"border-radius: 10px;width:100%; \">\r\n            <ion-list style=\"width:100%; height: 100%; \" expand=\"block\" (click)=\"goToTransactionHistoryChecking()\">\r\n              <ion-item lines=\"none\"><ion-label text-center class=\"whiteColor\">CHECKING ...8596</ion-label> </ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-center class = \"amount\">$10,674.00 > </ion-label></ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-center class=\"whiteColor\">Available balance</ion-label></ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-center class=\"whiteColor\">Other Debit - $1,000 Aug 22</ion-label></ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-center class=\"whiteColor\">Other Credit + $3,456 July 31</ion-label></ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-center class=\"whiteColor\">Other Credit + $3,660 June 30</ion-label></ion-item>\r\n            </ion-list>\r\n          </ion-slide>\r\n          <ion-slide style=\"border-radius: 10px;width:100%; \">\r\n            <ion-list style=\"width:100%; height: 100%; \">\r\n              <ion-item lines=\"none\" ><ion-label text-center class=\"whiteColor\"> CHECKING ...2282</ion-label></ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-center class = \"amount\" >$8,243.00 > </ion-label></ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-center class=\"whiteColor\">Available balance</ion-label></ion-item>\r\n              <ion-button text-center style=\"color: black;\">Add Funds</ion-button>\r\n              <ion-item lines=\"none\"><ion-label style=\"color: aqua\" text-center expand=\"block\" (click)=\"goToTransactionHistoryChecking()\"> more > </ion-label></ion-item>\r\n            </ion-list>\r\n          </ion-slide>\r\n          <ion-slide style=\"border-radius: 10px;width:100%; \">\r\n            <ion-list style=\"width:100%; height: 100%; \">\r\n              <ion-item lines=\"none\"><ion-label text-center class=\"whiteColor\"> CD ...2282</ion-label></ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-center class = \"amount\"> $1,983.00 > </ion-label></ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-center class=\"whiteColor\"> Available balance</ion-label></ion-item>\r\n              <ion-item lines=\"none\"> \r\n                      <div class=\"col\" style=\"width:75%\">\r\n                          <div class=\"row\"></div>\r\n                      </div>   \r\n              </ion-item>\r\n              <ion-item lines=\"none\" class=\"whiteColor\">\r\n                <ion-label text-start> Term </ion-label>\r\n                <ion-label text-end>  32 days</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" class=\"whiteColor\">\r\n                <ion-label text-start> Interest Rate </ion-label>\r\n                <ion-label text-end> 0.295%</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"none\" class=\"whiteColor\">\r\n                <ion-label text-start> Maturity Date </ion-label>\r\n                <ion-label text-end style=\"color: aqua\"> Show</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"none\"><ion-label style=\"color: aqua\" text-center expand=\"block\" (click)=\"goToTransactionHistoryCD()\"> more > </ion-label></ion-item>\r\n            </ion-list>\r\n          </ion-slide>\r\n          <ion-slide style=\"border-radius: 10px;width:100%; \">\r\n            <ion-list style=\"width:100%; height: 100%\">\r\n              <ion-item styles=\"background:6ea8fe\" lines=\"none\" ><ion-label text-center class=\"whiteColor\"> BRILLIO CD</ion-label></ion-item>\r\n              <ion-item lines=\"none\"><img text-center src=\"/assets/certificate_of_deposite_icon.svg\" alt=\"\" style=\"display: block; margin:auto\" /></ion-item>\r\n              <ion-item lines=\"none\"><ion-label text-wrap text-center class=\"whiteColor\">Lock in a great rate and maximise your savings with our fixed interest time\r\n                deposits.</ion-label></ion-item>\r\n              <ion-item lines=\"none\"><ion-label style=\"color: aqua\" text-center expand=\"block\" (click)=\"goToVeloCD()\"> more ></ion-label> </ion-item>\r\n            </ion-list>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-row>\r\n\r\n      <ion-row >\r\n\r\n        <ion-slides class=\"nf-background\">\r\n          <ion-slide style=\"width: 30%\" >\r\n            <ion-list class=\"transparent\" >\r\n              <ion-item lines=\"none\" >\r\n                <ion-text style=\"color:#13727f\">Real Estate</ion-text>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-text> 房地产 房地产 房地产 vs 房地产 房地产 房地产</ion-text>\r\n                <ion-text> 中国房地产 中国房地产 中国房地产</ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-slide>\r\n\r\n          <ion-slide  style=\"width: 60%\">\r\n            <ion-list class=\"transparent\">\r\n              <ion-item lines=\"none\">\r\n                <ion-text style=\"color: #13727f\">China US Estate</ion-text>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-text> 房地产 房地产 房地产 vs 房地产 房地产 房地产</ion-text>\r\n                <ion-text> 中国房地产 中国房地产 中国房地产</ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-slide>\r\n\r\n          <ion-slide  style=\"width: 60%\">\r\n            <ion-list class=\"transparent\">\r\n              <ion-item lines=\"none\">\r\n                <ion-text style=\"color: #13727f\">Real Estate</ion-text>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-text> 房地产 房地产 房地产 vs 房地产 房地产 房地产</ion-text>\r\n                <ion-text> 中国美国房地产 中国美国房地产 中国美国房地产</ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-slide>\r\n\r\n          <ion-slide  style=\"width: 60%\">\r\n            <ion-list class=\"transparent\">\r\n              <ion-item lines=\"none\">\r\n                <ion-text style=\"color: #13727f\">China US Estate</ion-text>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-text> 房地产 房地产 房地产 vs 房地产 房地产 房地产</ion-text>\r\n                <ion-text> 中国房地产 中国房地产 中国房地产</ion-text>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-slide>\r\n\r\n        </ion-slides> \r\n        \r\n      </ion-row>\r\n\r\n      <ion-row style=\"margin-top: 5\" class = \"transparent\">\r\n\r\n        <ion-list style=\"width: 100%;\" >\r\n          <ion-item lines=\"none\" >\r\n            <ion-tabs>\r\n              <ion-tab-bar>\r\n                <ion-tab-button tab=\"concierge\" expand=\"block\" (click)=\"openModel()\">\r\n                  <ion-icon src=\"/assets/concierge_icon.svg\"></ion-icon>\r\n                  <ion-label class=\"whiteColor\">Concierge</ion-label>\r\n                </ion-tab-button>\r\n\r\n                <ion-tab-button tab=\"transfers\">\r\n                  <ion-icon src=\"/assets/transfer_icon.svg\"></ion-icon>\r\n                  <ion-label class=\"whiteColor\">Transfer</ion-label>\r\n                </ion-tab-button>\r\n            <ion-menu-toggle  auto-hide=\"false\" >\r\n                <ion-tab-button tab=\"mybrillio\" expand=\"block\">\r\n                  <ion-icon src=\"/assets/account_icon.svg\"></ion-icon>\r\n                  <ion-label class=\"whiteColor\">My Brillio</ion-label>\r\n                </ion-tab-button>\r\n                </ion-menu-toggle>\r\n              </ion-tab-bar>\r\n            </ion-tabs>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n      </ion-row>\r\n\r\n    </ion-col>\r\n\r\n  </ion-grid>\r\n\r\n  </div>\r\n\r\n</ion-content>"

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

module.exports = ".hv-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n}\n\n.nf-background {\n  background: -webkit-gradient(linear, left top, left bottom, from(#91aef1), to(#dbeaf0)) !important;\n  background: linear-gradient(180deg, #91aef1 0%, #dbeaf0 100%) !important;\n  min-height: 100%;\n  overflow-y: auto;\n  background-image: url(\"/assets/wave_front.svg\");\n}\n\nion-slides {\n  --bullet-background: rgb(118, 110, 236);\n  --bullet-background-active: rgb(243, 243, 241);\n}\n\n.bottomBar {\n  background: -webkit-gradient(linear, left top, left bottom, from(#001e65), color-stop(100%, #397e95), color-stop(33.33%, #1d1d1d), to(#006f93)) !important;\n  background: linear-gradient(180deg, #001e65 0%, #397e95 100%, #1d1d1d 33.33%, #006f93 100%) !important;\n}\n\n.hv-toolbar-color {\n  --background:#001e65 0% !important;\n}\n\n.transparent {\n  --ion-background-color: transparent ;\n}\n\n.textCenter {\n  text-align: center;\n}\n\n.rowMain {\n  height: 70%;\n}\n\n.rowBottom {\n  height: 30%;\n}\n\n#myFixZone {\n  height: 200px;\n}\n\n.container {\n  width: 80%;\n  background-color: bisque;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.container ::-webkit-scrollbar {\n  display: none;\n}\n\n.container .scroll {\n  overflow: auto;\n}\n\n.amount {\n  color: aqua;\n  font-size: 2em;\n}\n\n.whiteColor {\n  color: white;\n}\n\n.col {\n  border: 0.25px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcc2h3ZXRhLmtcXElvbmljUHJvamVjdHNcXG1iYW5rL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEpBQUE7RUFBQSxzR0FBQTtFQUtBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGtHQUFBO0VBQUEsd0VBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsK0NBQUE7QUNKRjs7QURPQTtFQUNFLHVDQUFBO0VBQ0EsOENBQUE7QUNKRjs7QURPQTtFQUNFLDBKQUFBO0VBQUEsc0dBQUE7QUNKRjs7QURTQTtFQUNFLGtDQUFBO0FDTkY7O0FEU0E7RUFDRSxvQ0FBQTtBQ05GOztBRFNBO0VBQ0ksa0JBQUE7QUNOSjs7QURTQTtFQUNJLFdBQUE7QUNOSjs7QURRQTtFQUNJLFdBQUE7QUNMSjs7QURRQTtFQUNJLGFBQUE7QUNMSjs7QURRQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURNSTtFQUNFLGFBQUE7QUNKTjs7QURNSTtFQUNFLGNBQUE7QUNKTjs7QURRRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDTEo7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSwwQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHYtYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwzMCwxMDEpIDAlLHJnYmEoNTcsMTI2LDE0OSkgMTAwJSxcclxuICBcclxuICByZ2JhKDI5LDI5LDI5LDEpIDMzLjMzJSxcclxuICBcclxuICByZ2JhKDAsMTExLDE0NykgMTAwJSkhaW1wb3J0YW50OyAgXHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubmYtYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigxNDUsIDE3NCwgMjQxKSAwJSxyZ2IoMjE5LCAyMzQsIDI0MCkgMTAwJSkhaW1wb3J0YW50OyAgXHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvd2F2ZV9mcm9udC5zdmcnKTtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogcmdiKDExOCwgMTEwLCAyMzYpO1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiByZ2IoMjQzLCAyNDMsIDI0MSk7XHJcbn1cclxuXHJcbi5ib3R0b21CYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwzMCwxMDEpIDAlLHJnYmEoNTcsMTI2LDE0OSkgMTAwJSxcclxuICByZ2JhKDI5LDI5LDI5LDEpIDMzLjMzJSxcclxuICByZ2JhKDAsMTExLDE0NykgMTAwJSkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHYtdG9vbGJhci1jb2xvcntcclxuICAtLWJhY2tncm91bmQ6IzAwMWU2NSAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi50ZXh0Q2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4ucm93TWFpbiB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxufVxyXG4ucm93Qm90dG9tIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4jbXlGaXhab25lIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNjcm9sbCB7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFtb3VudCB7XHJcbiAgICBjb2xvcjogYXF1YTtcclxuICAgIGZvbnQtc2l6ZTogMmVtXHJcbiAgfVxyXG5cclxuICAud2hpdGVDb2xvciB7XHJcbiAgICBjb2xvcjogd2hpdGVcclxuICB9XHJcblxyXG4gIC5jb2x7XHJcbiAgICBib3JkZXI6IDAuMjVweCBzb2xpZCB3aGl0ZTtcclxuIH1cclxuIiwiLmh2LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMDAxZTY1IDAlLCAjMzk3ZTk1IDEwMCUsICMxZDFkMWQgMzMuMzMlLCAjMDA2ZjkzIDEwMCUpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5uZi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzkxYWVmMSAwJSwgI2RiZWFmMCAxMDAlKSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3dhdmVfZnJvbnQuc3ZnXCIpO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogcmdiKDExOCwgMTEwLCAyMzYpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogcmdiKDI0MywgMjQzLCAyNDEpO1xufVxuXG4uYm90dG9tQmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzAwMWU2NSAwJSwgIzM5N2U5NSAxMDAlLCAjMWQxZDFkIDMzLjMzJSwgIzAwNmY5MyAxMDAlKSAhaW1wb3J0YW50O1xufVxuXG4uaHYtdG9vbGJhci1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDojMDAxZTY1IDAlICFpbXBvcnRhbnQ7XG59XG5cbi50cmFuc3BhcmVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDtcbn1cblxuLnRleHRDZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3dNYWluIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG5cbi5yb3dCb3R0b20ge1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuI215Rml4Wm9uZSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY29udGFpbmVyIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lciAuc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5hbW91bnQge1xuICBjb2xvcjogYXF1YTtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi53aGl0ZUNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29sIHtcbiAgYm9yZGVyOiAwLjI1cHggc29saWQgd2hpdGU7XG59Il19 */"

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