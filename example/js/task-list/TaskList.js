/**
 * Created by xavier on 4/21/16.
 */
// @flow
import Model from 'redux-realtime-cqrs/src/util/Model'
import Task from '../task/Task'
import realTime from 'redux-realtime-cqrs/src/real-time/decorators'
import config from '../config'

@realTime("task-lists")
export default class TaskList extends Model {
    constructor(id:string, name:string) {
        super(id);
        this.name = name
    }
    
    name:string;
    tasks:Array<Task>;
}
