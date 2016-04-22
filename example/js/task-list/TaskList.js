/**
 * Created by xavier on 4/21/16.
 */
// @flow
import Model from 'redux-realtime-cqrs/src/util/Model'
import Task from '../task/Task'
// import realTime from 'redux-realtime-cqrs/src/util/realTime'
import config from '../config'

// @realTime("task-lists", config)
export default class TaskList extends Model {
    constructor(name:string) {
        super();
        this.name = name
    }

    name:string;
    tasks:Array<Task>;
}