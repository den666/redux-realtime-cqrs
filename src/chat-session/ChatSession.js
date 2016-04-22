// @flow
import realTime from '../util/realTime'
import Model from '../util/Model'

@realTime("/chat-sessions")
class ChatSession extends Model{
    y: number;
}