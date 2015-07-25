'use strict';
var assert = require('assert');
var newLineObj = require('../');
var NewLineObj = newLineObj;

describe('new-line-obj', function() {
  it('accepts either new line sequence', function() {
    new NewLineObj('\r\n');
    new NewLineObj('\n');
  });

  it('throws with a bad input', function() {
    assert.throws(function() {
      new NewLineObj('foo');
    });
  });

  it('valueOf is String', function() {
    assert.strictEqual(new NewLineObj('\r\n').valueOf(), '\r\n');
    assert.strictEqual(new NewLineObj('\n').valueOf(), '\n');
  });

  it('isWindowsNewLine', function() {
    assert.strictEqual(new NewLineObj('\n').isWindowsNewLine, false);
    assert.strictEqual(new NewLineObj('\r\n').isWindowsNewLine, true);
  });

  it('isUnixNewLine', function() {
    assert.strictEqual(new NewLineObj('\n').isUnixNewLine, true);
    assert.strictEqual(new NewLineObj('\r\n').isUnixNewLine, false);
  });

  it('can be used without new keyword', function() {
    assert.strictEqual(newLineObj('\r\n').valueOf(), '\r\n');
    assert.strictEqual(newLineObj('\n').valueOf(), '\n');
  });
});
