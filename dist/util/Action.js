'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _Model = require('../util/Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by xavier on 4/22/16.
                                                                                                                                                           */


var Action = function Action(type, mutability, payload) {
    _classCallCheck(this, Action);

    this.type = type;
    this.mutability = mutability;
    this.payload = payload;
};

exports.default = Action;