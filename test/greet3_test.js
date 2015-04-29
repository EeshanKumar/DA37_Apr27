'use strict';

var expect = require('chai').expect;
var Greet = require('../greet3');

describe('Greet3', function() {
  var greet;

  before(function() {
    greet = new Greet();
  });

  it('should be able to greet someone', function() {
    expect(greet.greet('Kumar')).to.eql('hello Kumar');
  });
});
