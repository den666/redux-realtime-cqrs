/**
 * Created by xavier on 4/21/16.
 */
// @flow
import realTimeVendorConstants from "redux-realtime-cqrs/src/constants/realTimeVendorConstants"
import configConstants from "redux-realtime-cqrs/src/constants/configConstants"

let config:Array<string, string> = {
    [configConstants.REAL_TIME_VENDOR]: realTimeVendorConstants.FIREBASE
};

export default config;