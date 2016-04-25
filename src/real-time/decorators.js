/**
 * Created by xavier on 4/20/16.
 */
// @flow
import configConstants from '../constants/configConstants'
import realTimeVendorConstants from  '../constants/realTimeVendorConstants'
export default function realTime(path:string/*, config:Array<[string, string]>*/) {

    return (target) => {

        target.prototype.getRealTimeURI = ()=>(path ? path : target.name );
        target.prototype.getModelType = ()=>target.name;
        target.prototype.isRealTime = ()=>true;

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
