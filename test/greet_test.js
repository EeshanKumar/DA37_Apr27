'use strict';

var expect = require('chai').expect;
var greet = require('../greet');

describe('greet.js', function() {
  it('should greet someone', function() {
    expect(greet('Kumar')).to.eql('hello Kumar');
  });

  var cachedArgv;

  before(function() {
    cachedArgv = process.argv;
    process.argv = ['', '', 'somename'];
  });

  after(function() {
    process.argv = cachedArgv;
  });

  it('should process command line arguments', function() {
    expect(greet()).to.eql('hello somename');
  });
});



