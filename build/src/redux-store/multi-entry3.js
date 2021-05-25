'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var redux = require('redux');
var reducer = require('./counter/multi-entry.js');

var reducers = function () { return redux.combineReducers({
    counter: reducer
}); };

exports.reducers = reducers;
//# sourceMappingURL=multi-entry3.js.map
