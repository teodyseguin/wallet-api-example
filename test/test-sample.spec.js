'use strict';

var assert = require('chai').assert;

describe('Mocha is our Test Framework for Node.js', function() {
  it('sample test: assert.equal(-1, [1, 2, 3].indexOf(5))', function() {
    assert.equal(-1, [1, 2, 3].indexOf(5));
  });
});

