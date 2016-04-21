"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = realTime;
/**
 * Created by xavier on 4/20/16.
 */
function realTime() {
  console.log();
  return function (target, property, descriptor) {
    return console.log(target, property, descriptor);
  };
}