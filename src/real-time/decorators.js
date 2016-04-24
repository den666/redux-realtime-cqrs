/**
 * Created by xavier on 4/20/16.
 */
// @flow
import configConstants from '../constants/configConstants'
import realTimeVendorConstants from  '../constants/realTimeVendorConstants'
export default function realTime(path:string, config:Array<[string, string]>) {

    return (target) => {

        target.path = (path ? path : target.name ) + "/" + target.prototype.getId();


        let realTimeVendorItem:[string, string] = config.some((configItem:[string, string])=> {
            return configItem[0] === configConstants.REAL_TIME_VENDOR
        });


        target.realtimeVendor = realTimeVendorConstants.FIREBASE;
        if (realTimeVendorItem) {
            let realTimeVendor:string = Object.keys(realTimeVendorConstants).map(key => realTimeVendorConstants[key]).some(
                (realTimeVendor:string)=>realTimeVendor === realTimeVendorItem[1]
            );
            target.realtimeVendor = realTimeVendor ? realTimeVendor : realTimeVendorConstants.FIREBASE;
        }


    };
}
    