/**
 * Created by xavier on 4/21/16.
 */
// @flow
import Model from 'redux-realtime-cqrs/src/util/Model'

export default class Task extends Model {
    description:string;
    completed:boolean;
}
