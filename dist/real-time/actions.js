'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscriptionCreated = subscriptionCreated;
/**
 * Created by xavier on 4/22/16.
 */

var SUBSCRIPTION_CREATED = 'SUBSCRIPTION_CREATED';

function subscriptionCreated(category, id) {
    return {
        type: SUBSCRIPTION_CREATED,
        category: category,
        id: id
    };
}