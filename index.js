'use strict';
module.exports = NewLine;

var stringish = require('stringish');
var assert = require('assert');

function NewLine(stringValue) {
  assert(/^\r?\n$/.test(stringValue), stringValue, 'should match /^\\r?\\n$/');
  if (!(this instanceof NewLine)) {
    return new NewLine(stringValue);
  }
  this._stringValue = stringValue;
  var windows = stringValue.charAt(0) === '\r';
  this.isWindowsNewLine = windows;
  this.isUnixNewLine = !windows;
}

stringish(NewLine.prototype);

NewLine.prototype.isNewLine = true;
