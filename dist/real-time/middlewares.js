'use strict';

var _configConstants = require('../constants/configConstants');

var _configConstants2 = _interopRequireDefault(_configConstants);

var _realTimeVendorConstants = require('../constants/realTimeVendorConstants');

var _realTimeVendorConstants2 = _interopRequireDefault(_realTimeVendorConstants);

var _mutabilityConstants = require('../constants/mutabilityConstants');

var _mutabilityConstants2 = _interopRequireDefault(_mutabilityConstants);

var _Action = require('../util/Action');

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by xavier on 4/25/16.
 */


function getRealTimeVendorFromConfigItem(realTimeVendorItem) {
    return Object.keys(_realTimeVendorConstants2.default).map(function (key) {
        return _realTimeVendorConstants2.default[key];
    }).some(function (realTimeVendor) {
        return realTimeVendor === realTimeVendorItem[1];
    });
}

function getRealTimeVendorItem(config) {
    return config.some(function (configItem) {
        return configItem[0] === _configConstants2.default.REAL_TIME_VENDOR;
    });
}

var realTimeUpdatingMiddleware = function realTimeUpdatingMiddleware(config) {
    return function (store) {
        return function (next) {
            return function (action) {

                var realTimeVendorItem = getRealTimeVendorItem(config);

                var realTimeVendor = _realTimeVendorConstants2.default.FIREBASE;
                if (realTimeVendorItem) realTimeVendor = getRealTimeVendorFromConfigItem(realTimeVendorItem) ? getRealTimeVendorFromConfigItem(realTimeVendorItem) : _realTimeVendorConstants2.default.FIREBASE;

                var result = next(action);

                if (action instanceof _Action2.default && action.payload.isRealTime()) {
                    console.log("******vaya ahi");
                    console.log(config);
                    return result;
                }

                return result;
            };
        };
    };
};