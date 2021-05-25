'use strict';

var _tslib = require('../../../_virtual/_tslib.js');
var types = require('./multi-entry2.js');

var initialState = {
    count: 0
};
var counterReducer = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types.Types.INC_COUNT:
            return _tslib.__assign(_tslib.__assign({}, state), { count: state.count + 1 });
        case types.Types.DEC_COUNT:
            return _tslib.__assign(_tslib.__assign({}, state), { count: state.count - 1 });
        case types.Types.RESET_COUNT:
            return _tslib.__assign(_tslib.__assign({}, state), { count: 0 });
        default:
            return state;
    }
});

module.exports = counterReducer;
//# sourceMappingURL=multi-entry.js.map
