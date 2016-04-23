/**
 * Created by xavier on 4/22/16.
 */
// @flow

export default class ActionModel {
    constructor(name:string) {
        super();
        this.name = name
    }

    name:string;
    tasks:Array<Task>;
}
