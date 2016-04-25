/**
 * Created by xavier on 4/25/16.
 */
// @flow
import configConstants from '../constants/configConstants'
import realTimeVendorConstants from  '../constants/realTimeVendorConstants'
import mutabilityConstants from  '../constants/mutabilityConstants'
import Action from  '../util/Action'

function getRealTimeVendorFromConfigItem(realTimeVendorItem) {
    return Object.keys(realTimeVendorConstants).map(key => realTimeVendorConstants[key]).some(
        (realTimeVendor:string)=>realTimeVendor === realTimeVendorItem[1]
    );
}


function getRealTimeVendorItem(config) {
    return config.some((configItem:[string, string])=> {
        return configItem[0] === configConstants.REAL_TIME_VENDOR
    });
}

const realTimeUpdatingMiddleware = (config:Array<[string, string]>) => store => next => action => {

    let realTimeVendorItem:[string, string] = getRealTimeVendorItem(config);

    let realTimeVendor = realTimeVendorConstants.FIREBASE;
    if (realTimeVendorItem)
        realTimeVendor = getRealTimeVendorFromConfigItem(realTimeVendorItem) ?
            getRealTimeVendorFromConfigItem(realTimeVendorItem) :
            realTimeVendorConstants.FIREBASE;

    let result = next(action);

    if (action instanceof Action && action.payload.isRealTime()) {
        console.log("******vaya ahi");
        console.log(config);
        return result;
    }

    return result
};