'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class; /**
                   * Created by xavier on 4/22/16.
                   */


var _Model2 = require('redux-realtime-cqrs/src/util/Model');

var _Model3 = _interopRequireDefault(_Model2);

var _Task = require('../task/Task');

var _Task2 = _interopRequireDefault(_Task);

var _realTime = require('redux-realtime-cqrs/src/util/realTime');

var _realTime2 = _interopRequireDefault(_realTime);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskList = (_dec = (0, _realTime2.default)("task-lists", _config2.default), _dec(_class = function (_Model) {
    _inherits(TaskList, _Model);

    function TaskList(name) {
        _classCallCheck(this, TaskList);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TaskList).call(this));

        _this.name = name;
        return _this;
    }

    return TaskList;
}(_Model3.default)) || _class);
exports.default = TaskList;