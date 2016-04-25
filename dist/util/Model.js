"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by xavier on 4/20/16.
 */

var Model = function () {
    function Model(id) {
        _classCallCheck(this, Model);

        this.id = id;
    }

    _createClass(Model, [{
        key: "getRealTimePath",
        value: function getRealTimePath() {
            return this.getRealTimeURI() + "/" + this.id;
        }
    }, {
        key: "isRealTime",
        value: function isRealTime() {
            return false;
        }
    }]);

    return Model;
}();

exports.default = Model;