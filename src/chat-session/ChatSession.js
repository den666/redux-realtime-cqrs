// @flow
import realTime from '../real-time/realTime'
import Model from '../util/Model'

@realTime("/chat-sessions")
class ChatSession extends Model{
    y: number;
}