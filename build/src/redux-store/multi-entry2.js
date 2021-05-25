'use strict';

var redux = require('redux');
var combineReducer = require('./multi-entry3.js');

var initialState = {};
var configureStore = (function () {
    var store = redux.createStore(combineReducer.reducers(), initialState);
    return store;
});

module.exports = configureStore;
//# sourceMappingURL=multi-entry2.js.map
