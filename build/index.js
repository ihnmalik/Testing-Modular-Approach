'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var redux = require('redux');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "";
styleInject(css_248z$1);

var Bottombar = function (_a) {
    var children = _a.children;
    return (React__default['default'].createElement("div", null, children));
};

var css_248z = "";
styleInject(css_248z);

var Menubar = function () { return (React__default['default'].createElement("div", null, "Menubar")); };

var index$1 = { Bottombar: Bottombar, Menubar: Menubar };

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Types;
(function (Types) {
    Types["INC_COUNT"] = "INC_COUNT";
    Types["DEC_COUNT"] = "DEC_COUNT";
    Types["RESET_COUNT"] = "RESET_COUNT";
})(Types || (Types = {}));

var initialState$1 = {
    count: 0
};
var counterReducer = (function (state, action) {
    if (state === void 0) { state = initialState$1; }
    switch (action.type) {
        case Types.INC_COUNT:
            return __assign(__assign({}, state), { count: state.count + 1 });
        case Types.DEC_COUNT:
            return __assign(__assign({}, state), { count: state.count - 1 });
        case Types.RESET_COUNT:
            return __assign(__assign({}, state), { count: 0 });
        default:
            return state;
    }
});

var reducers = function () { return redux.combineReducers({
    counter: counterReducer
}); };

var initialState = {};
var configureStore = (function () {
    var store = redux.createStore(reducers(), initialState);
    return store;
});

var incCounter = function () { return ({
    type: Types.INC_COUNT
}); };
var decCounter = function () { return ({
    type: Types.DEC_COUNT
}); };
var resetCount = function () { return ({
    type: Types.RESET_COUNT
}); };
var counterActions = {
    incCounter: incCounter,
    decCounter: decCounter,
    resetCount: resetCount
};

var index = {
    counter: {
        actions: counterActions,
        types: Types
    }
};

exports.components = index$1;
exports.configureStore = configureStore;
exports.store = index;
//# sourceMappingURL=index.js.map
