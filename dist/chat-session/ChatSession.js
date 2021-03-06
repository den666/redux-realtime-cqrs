'use strict';

var _dec, _class;

var _realTime = require('../real-time/realTime');

var _realTime2 = _interopRequireDefault(_realTime);

var _Model2 = require('../util/Model');

var _Model3 = _interopRequireDefault(_Model2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatSession = (_dec = (0, _realTime2.default)("/chat-sessions"), _dec(_class = function (_Model) {
    _inherits(ChatSession, _Model);

    function ChatSession() {
        _classCallCheck(this, ChatSession);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ChatSession).apply(this, arguments));
    }

    return ChatSession;
}(_Model3.default)) || _class);