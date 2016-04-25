/**
 * Created by xavier on 4/22/16.
 */
// @flow
import Model from  '../util/Model'


export default class Action {
    type:string;
    mutability:string;
    payload:Model;

    constructor(type:string, mutability:string, payload:Model) {
        this.type = type;
        this.mutability = mutability;
        this.payload = payload;
    }


}
