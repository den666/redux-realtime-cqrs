/**
 * Created by xavier on 4/20/16.
 */
// @flow
export default class Model {
    id:string;

    constructor(id:string) {
        this.id = id
    }

    getRealTimePath():string {
        return this.getRealTimeURI() + "/" + this.id;
    }

    isRealTime():boolean {
        return false;
    }

}
