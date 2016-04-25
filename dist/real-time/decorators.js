'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = realTime;

var _configConstants = require('../constants/configConstants');

var _configConstants2 = _interopRequireDefault(_configConstants);

var _realTimeVendorConstants = require('../constants/realTimeVendorConstants');

var _realTimeVendorConstants2 = _interopRequireDefault(_realTimeVendorConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by xavier on 4/20/16.
 */
function realTime(path /*, config:Array<[string, string]>*/) {

    return function (target) {

        target.prototype.getRealTimeURI = function () {
            return path ? path : target.name;
        };
        target.prototype.getModelType = function () {
            return target.name;
        };
        target.prototype.isRealTime = function () {
            return true;
        };

        // let realTimeVendorItem:[string, string] = config.some((configItem:[string, string])=> {
        //     return configItem[0] === configConstants.REAL_TIME_VENDOR
        // });
        //
        // let realTimeVendor = realTimeVendorConstants.FIREBASE;
        // if (realTimeVendorItem) {
        //     let realTimeVendor:string = Object.keys(realTimeVendorConstants).map(key => realTimeVendorConstants[key]).some(
        //         (realTimeVendor:string)=>realTimeVendor === realTimeVendorItem[1]
        //     );
        //     realTimeVendor = realTimeVendor ? realTimeVendor : realTimeVendorConstants.FIREBASE;
        // }
        //
        // target.prototype.getRealTimeVendor = ()=>realTimeVendor;
    };
}