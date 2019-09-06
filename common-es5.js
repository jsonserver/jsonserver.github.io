(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-90d0df24.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-90d0df24.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-4e92c885.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-4e92c885.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/helpers-c90aaa66.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/helpers-c90aaa66.js ***!
  \*******************************************************************/
/*! exports provided: a, b, c, d, e, f, h, i, n, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pointerCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return renderHiddenInput; });
var rIC = function (callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
    }
    else {
        setTimeout(callback, 32);
    }
};
var hasShadowDom = function (el) {
    return !!el.shadowRoot && !!el.attachShadow;
};
var findItemLabel = function (componentEl) {
    var itemEl = componentEl.closest('ion-item');
    if (itemEl) {
        return itemEl.querySelector('ion-label');
    }
    return null;
};
var renderHiddenInput = function (always, container, name, value, disabled) {
    if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};
var clamp = function (min, n, max) {
    return Math.max(min, Math.min(n, max));
};
var assert = function (actual, reason) {
    if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line
        throw new Error(message);
    }
};
var now = function (ev) {
    return ev.timeStamp || Date.now();
};
var pointerCoord = function (ev) {
    // get X coordinates for either a mouse click
    // or a touch depending on the given event
    if (ev) {
        var changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            var touch = changedTouches[0];
            return { x: touch.clientX, y: touch.clientY };
        }
        if (ev.pageX !== undefined) {
            return { x: ev.pageX, y: ev.pageY };
        }
    }
    return { x: 0, y: 0 };
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
var isEndSide = function (side) {
    var isRTL = document.dir === 'rtl';
    switch (side) {
        case 'start': return isRTL;
        case 'end': return !isRTL;
        default:
            throw new Error("\"" + side + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
    }
};
var debounceEvent = function (event, wait) {
    var original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    };
};
var debounce = function (func, wait) {
    if (wait === void 0) { wait = 0; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout.apply(void 0, [func, wait].concat(args));
    };
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-cae2ca23.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-cae2ca23.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var documentFragmentChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
            sanitizeElement(documentFragmentChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (element) {
    return (element.children != null) ? element.children : element.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-353a032e.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-353a032e.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var _this = undefined;

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var router;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bottom-sheet/bottom-sheet.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bottom-sheet/bottom-sheet.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n    <ion-item lines='none' class=\"hv-text-align-center\">\n        <ion-icon color=\"dark\" name=\"ios-arrow-down\" (click)=\"dismiss()\"></ion-icon>\n        <ion-label>\n        <h2 class=\"hv-text-size-20\">Concierge</h2>\n        </ion-label>\n        <ion-icon color=\"dark\" ></ion-icon>\n    </ion-item>\n\n    <ion-list class=\"hv-margin-left hv-margin-right\">\n        <ion-item >\n            <ion-text color=\"dark\" >\n                <p class=\"ion-text-center hv-text-size-16\">Hi Iam Gomez, how can we help you today?</p>\n            </ion-text>\n        </ion-item>\n\n    <ion-item auto-hide=\"false\" *ngFor=\"let dt of dataList\">\n      <ion-avatar class=\"hv-item-margin item-padding\" >\n         <img src={{dt.url}}>\n      </ion-avatar>\n      <ion-label class=\"ion-margin\">\n      <h2 class=\"hv-text-size-16 hv-padding-left-20\" style=\"color:dark;\">{{dt.title}}</h2>\n      </ion-label>\n    </ion-item>\n    </ion-list>\n\n  <ion-item lines ='none'>\n    <ion-label class=\"ion-margin\">\n      <h2 class=\"hv-text-size-16 hv-padding-left-20 hv-text-align-center\" style=\"color:green;\">Hours of Operations ></h2>\n    </ion-label>\n  </ion-item>\n\n     \n      \n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list-of-country/list-of-country.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-of-country/list-of-country.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n    <ion-item lines='none'>\n        <ion-icon color=\"dark\" name=\"ios-arrow-down\" (click)=\"dismiss()\"></ion-icon>\n        <ion-label class=\"ion-margin\">\n        <h2 class=\"hv-text-size-12 hv-text-align-center\">Select Country</h2>\n        </ion-label>\n    </ion-item>\n\n    <ion-list class=\"hv-margin-left hv-margin-right\" lines=\"none\">\n\n        <ion-item  >\n            <ion-label class=\"ion-text-center\" >China</ion-label>\n        </ion-item>\n\n        <ion-item  >\n            <ion-label class=\"ion-text-center\" >Other</ion-label>\n        </ion-item>\n\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/manage-accounts/manage-accounts.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/manage-accounts/manage-accounts.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content color=\"transparent\">\n  <div class=\"ion-align-items-end\" margin-bottom>\n      <ion-button  clear expand=\"block\" (click)=\"goToAccountDetailPage()\" >Manage Accounts</ion-button>\n      <ion-button clear expand=\"block\" (click)=\"cancelAccountPage()\" >Cancel</ion-button>    \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/transfer-modal-sheet/transfer-modal-sheet.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transfer-modal-sheet/transfer-modal-sheet.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"pull-down\">\n        <ion-icon class=\"tm-label-gray\" name=\"ios-arrow-down\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n      <ion-item  text-center lines=\"none\" class=\" toolbar-title tm-text-size-12\">\n        <p class=\"tm-p-width\" >Select Account to send  <br>\n         your transfer to</p>\n      </ion-item> \n  </ion-toolbar>\n\n  \n  <ion-content [scrollEvents]=\"true\" overflow-scroll=\"true\"\n  (ionScrollStart)=\"logScrollStart()\" >\n  <ion-grid>\n  <ion-row>\n          <ion-col   size=\"3\">\n              <ion-img src=\"/assets/add.svg\"></ion-img>\n              <p text-center style=\"font-size: 9px;\">Velo Recipient</p>\n          </ion-col >\n          <ion-col  size=\"3\">\n              <ion-img src=\"/assets/add.svg\"></ion-img>\n              <p text-center style=\"font-size: 9px;\">U.S. Personal Account </p>\n          </ion-col >\n          <ion-col  size=\"3\">\n              <ion-img src=\"/assets/add.svg\"></ion-img>\n              <p text-center style=\"font-size: 9px;\">U.S. Business or Brokerage </p>\n          </ion-col >\n          <ion-col  size=\"3\">\n              <ion-img src=\"/assets/add.svg\"></ion-img>\n              <p text-center style=\"font-size: 9px;\">International Account</p>\n          </ion-col >\n    </ion-row>\n  </ion-grid>\n    <!-- <ion-grid>\n        <ion-row align-items-center>\n              <ion-col size=\"3\" text-center>\n                  <ion-item no-lines text-center>\n                    <ion-img src=\"/assets/add.svg\"></ion-img>\n                    <ion-label class=\"tm-text-size-10\" color=\"dark\">Velo Recipient </ion-label>\n                  </ion-item>\n              </ion-col>\n\n            <ion-col size=\"3\" text-center>\n                <ion-img src=\"/assets/add.svg\"></ion-img>\n                <ion-label class=\"tm-text-size-10\" color=\"dark\">U.S. Personal Account </ion-label>\n            </ion-col>\n            <ion-col size=\"3\" text-center>\n                <ion-img src=\"/assets/add.svg\"></ion-img>\n                <ion-label class=\"tm-text-size-10\" color=\"dark\">U.S. Business or Brokerage </ion-label>\n            </ion-col>\n            <ion-col size=\"3\" text-center>\n                <ion-img src=\"/assets/add.svg\"></ion-img>\n                <ion-label class=\"tm-text-size-10\" color=\"dark\">International Account</ion-label>\n            </ion-col>\n      </ion-row>\n      </ion-grid> -->\n  </ion-content>"

/***/ }),

/***/ "./src/app/bottom-sheet/bottom-sheet.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/bottom-sheet/bottom-sheet.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hv-text-size-12 {\n  font-size: 12px;\n}\n\n.hv-text-size-16 {\n  font-size: 16px;\n}\n\n.hv-text-size-20 {\n  font-size: 20px;\n}\n\n.hv-text-align-center {\n  text-align: center;\n  align-content: center;\n}\n\n.hv-padding-left-20 {\n  padding-left: 20px;\n}\n\n.hv-padding-right-20 {\n  padding-right: 20px;\n}\n\n.hv-padding-top-20 {\n  padding-top: 20px;\n}\n\n.hv-margin-left {\n  margin-left: 20px;\n}\n\n.hv-margin-right {\n  margin-right: 20px;\n}\n\n.hv-item-margin {\n  margin-left: 30px;\n}\n\n.item-padding {\n  padding-left: 3px;\n  padding-right: 3px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvYm90dG9tLXNoZWV0L2JvdHRvbS1zaGVldC5wYWdlLnNjc3MiLCJzcmMvYXBwL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaHYtdGV4dC1zaXplLTEye1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmh2LXRleHQtc2l6ZS0xNntcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5odi10ZXh0LXNpemUtMjB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaHYtdGV4dC1hbGlnbi1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlclxufVxuXG4uaHYtcGFkZGluZy1sZWZ0LTIwe1xuICAgIHBhZGRpbmctbGVmdDogMjBweFxufVxuXG4uaHYtcGFkZGluZy1yaWdodC0yMHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4XG59XG5cbi5odi1wYWRkaW5nLXRvcC0yMHtcbiAgICBwYWRkaW5nLXRvcDogMjBweFxufVxuXG4uaHYtbWFyZ2luLWxlZnR7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHgsXG59XG5cbi5odi1tYXJnaW4tcmlnaHR7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4LFxufVxuXG4uaHYtaXRlbS1tYXJnaW57XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5pdGVtLXBhZGRpbmd7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcblxufVxuXG5cblxuXG5cbiIsIi5odi10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5odi10ZXh0LXNpemUtMjAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5odi10ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uaHYtcGFkZGluZy1sZWZ0LTIwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaHYtcGFkZGluZy1yaWdodC0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5odi1wYWRkaW5nLXRvcC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uaHYtbWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmh2LW1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmh2LWl0ZW0tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5pdGVtLXBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/bottom-sheet/bottom-sheet.page.ts":
/*!***************************************************!*\
  !*** ./src/app/bottom-sheet/bottom-sheet.page.ts ***!
  \***************************************************/
/*! exports provided: BottomSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetPage", function() { return BottomSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var BottomSheetPage = /** @class */ (function () {
    function BottomSheetPage(model) {
        this.model = model;
        this.dataList = [
            {
                title: 'Chat With Us',
                url: '/assets/chat.svg',
            },
            {
                title: 'Call Us',
                url: '/assets/call.svg',
            },
            {
                title: 'Search FAQs',
                url: '/assets/search.svg',
            }
        ];
    }
    BottomSheetPage.prototype.ngOnInit = function () {
    };
    BottomSheetPage.prototype.dismiss = function () {
        this.model.dismiss();
    };
    BottomSheetPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    BottomSheetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottom-sheet',
            template: __webpack_require__(/*! raw-loader!./bottom-sheet.page.html */ "./node_modules/raw-loader/index.js!./src/app/bottom-sheet/bottom-sheet.page.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet.page.scss */ "./src/app/bottom-sheet/bottom-sheet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], BottomSheetPage);
    return BottomSheetPage;
}());



/***/ }),

/***/ "./src/app/list-of-country/list-of-country.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/list-of-country/list-of-country.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hv-text-size-12 {\n  font-size: 12px;\n}\n\n.hv-text-size-16 {\n  font-size: 16px;\n}\n\n.hv-text-align-center {\n  text-align: center;\n  align-content: center;\n}\n\n.hv-padding-left-20 {\n  padding-left: 20px;\n}\n\n.hv-padding-right-20 {\n  padding-right: 20px;\n}\n\n.hv-padding-top-20 {\n  padding-top: 20px;\n}\n\n.hv-margin-left {\n  margin-left: 20px;\n}\n\n.hv-margin-right {\n  margin-right: 20px;\n}\n\n.hv-item-margin {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvbGlzdC1vZi1jb3VudHJ5L2xpc3Qtb2YtY291bnRyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xpc3Qtb2YtY291bnRyeS9saXN0LW9mLWNvdW50cnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbGlzdC1vZi1jb3VudHJ5L2xpc3Qtb2YtY291bnRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5odi10ZXh0LXNpemUtMTJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaHYtdGV4dC1zaXplLTE2e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmh2LXRleHQtYWxpZ24tY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXJcbn1cblxuLmh2LXBhZGRpbmctbGVmdC0yMHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHhcbn1cblxuLmh2LXBhZGRpbmctcmlnaHQtMjB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweFxufVxuXG4uaHYtcGFkZGluZy10b3AtMjB7XG4gICAgcGFkZGluZy10b3A6IDIwcHhcbn1cblxuLmh2LW1hcmdpbi1sZWZ0e1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4LFxufVxuXG4uaHYtbWFyZ2luLXJpZ2h0e1xuICAgIG1hcmdpbi1yaWdodDogMjBweCxcbn1cblxuLmh2LWl0ZW0tbWFyZ2lue1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG5cblxuXG5cbiIsIi5odi10ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5odi10ZXh0LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5odi10ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uaHYtcGFkZGluZy1sZWZ0LTIwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaHYtcGFkZGluZy1yaWdodC0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5odi1wYWRkaW5nLXRvcC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uaHYtbWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmh2LW1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmh2LWl0ZW0tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/list-of-country/list-of-country.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-of-country/list-of-country.page.ts ***!
  \*********************************************************/
/*! exports provided: ListOfCountryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfCountryPage", function() { return ListOfCountryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListOfCountryPage = /** @class */ (function () {
    function ListOfCountryPage() {
    }
    ListOfCountryPage.prototype.ngOnInit = function () {
    };
    ListOfCountryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-of-country',
            template: __webpack_require__(/*! raw-loader!./list-of-country.page.html */ "./node_modules/raw-loader/index.js!./src/app/list-of-country/list-of-country.page.html"),
            styles: [__webpack_require__(/*! ./list-of-country.page.scss */ "./src/app/list-of-country/list-of-country.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListOfCountryPage);
    return ListOfCountryPage;
}());



/***/ }),

/***/ "./src/app/manage-accounts/manage-accounts.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/manage-accounts/manage-accounts.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --color: var(--ion-color-primary);\n  --background: azure;\n  --background-hover: azure;\n  -webkit-padding-start: 10px;\n  -webkit-padding-end: 10px;\n  padding-bottom: 5px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvbWFuYWdlLWFjY291bnRzL21hbmFnZS1hY2NvdW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL21hbmFnZS1hY2NvdW50cy9tYW5hZ2UtYWNjb3VudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1hY2NvdW50cy9tYW5hZ2UtYWNjb3VudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcbiAgICAtLWNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYmFja2dyb3VuZDogYXp1cmU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBhenVyZTtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSIsImlvbi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYmFja2dyb3VuZDogYXp1cmU7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogYXp1cmU7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogMTBweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */"

/***/ }),

/***/ "./src/app/manage-accounts/manage-accounts.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/manage-accounts/manage-accounts.page.ts ***!
  \*********************************************************/
/*! exports provided: ManageAccountsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAccountsPage", function() { return ManageAccountsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ManageAccountsPage = /** @class */ (function () {
    function ManageAccountsPage(navCtrl, modalCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
    }
    ManageAccountsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
    };
    ManageAccountsPage.prototype.ngOnInit = function () {
    };
    ManageAccountsPage.prototype.goToAccountDetailPage = function () {
        this.cancelAccountPage();
        this.navCtrl.navigateForward("manage-account-details");
    };
    ManageAccountsPage.prototype.cancelAccountPage = function () {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    };
    ManageAccountsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    ManageAccountsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-accounts',
            template: __webpack_require__(/*! raw-loader!./manage-accounts.page.html */ "./node_modules/raw-loader/index.js!./src/app/manage-accounts/manage-accounts.page.html"),
            styles: [__webpack_require__(/*! ./manage-accounts.page.scss */ "./src/app/manage-accounts/manage-accounts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], ManageAccountsPage);
    return ManageAccountsPage;
}());



/***/ }),

/***/ "./src/app/transfer-modal-sheet/transfer-modal-sheet.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/transfer-modal-sheet/transfer-modal-sheet.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-title {\n  text-overflow: inherit;\n  white-space: normal;\n}\n\n.tm-text-size-10 {\n  font-size: 10px;\n}\n\n.tm-text-size-12 {\n  font-size: 12px;\n}\n\n.tm-p-width {\n  width: 80%;\n  color: gray;\n}\n\n.tm-label-gray {\n  color: gray;\n}\n\nion-img {\n  height: 35px;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wcmFzaGFudHBhdGlsL21CYW5rL3NyYy9hcHAvdHJhbnNmZXItbW9kYWwtc2hlZXQvdHJhbnNmZXItbW9kYWwtc2hlZXQucGFnZS5zY3NzIiwic3JjL2FwcC90cmFuc2Zlci1tb2RhbC1zaGVldC90cmFuc2Zlci1tb2RhbC1zaGVldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0M7RUFDRyxlQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZmVyLW1vZGFsLXNoZWV0L3RyYW5zZmVyLW1vZGFsLXNoZWV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLXRpdGxlIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gfVxuIC50bS10ZXh0LXNpemUtMTB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLnRtLXRleHQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4udG0tcC13aWR0aHtcbiAgICB3aWR0aDogODAlO1xuICAgIGNvbG9yOiBncmF5O1xufVxuLnRtLWxhYmVsLWdyYXl7XG4gICAgY29sb3I6IGdyYXlcbn1cbmlvbi1pbWd7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiBhdXRvO1xufSIsIi50b29sYmFyLXRpdGxlIHtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnRtLXRleHQtc2l6ZS0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnRtLXRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRtLXAtd2lkdGgge1xuICB3aWR0aDogODAlO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnRtLWxhYmVsLWdyYXkge1xuICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWltZyB7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/transfer-modal-sheet/transfer-modal-sheet.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/transfer-modal-sheet/transfer-modal-sheet.page.ts ***!
  \*******************************************************************/
/*! exports provided: TransferModalSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferModalSheetPage", function() { return TransferModalSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var TransferModalSheetPage = /** @class */ (function () {
    function TransferModalSheetPage(modalController, params) {
        this.modalController = modalController;
        this.params = params;
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: '/assets/brillio.png',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: '/assets/brillio.png',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: '/assets/brillio.png',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters;
    }
    TransferModalSheetPage.prototype.ngOnInit = function () {
    };
    TransferModalSheetPage.prototype.logScrollStart = function () {
        console.log("hi i m initiated");
    };
    TransferModalSheetPage.prototype.dismiss = function () {
        this.modalController.dismiss({ 'dismissed': true });
    };
    TransferModalSheetPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
    ]; };
    TransferModalSheetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transfer-modal-sheet',
            template: __webpack_require__(/*! raw-loader!./transfer-modal-sheet.page.html */ "./node_modules/raw-loader/index.js!./src/app/transfer-modal-sheet/transfer-modal-sheet.page.html"),
            styles: [__webpack_require__(/*! ./transfer-modal-sheet.page.scss */ "./src/app/transfer-modal-sheet/transfer-modal-sheet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], TransferModalSheetPage);
    return TransferModalSheetPage;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map