'use strict';

var expect = require('chai').expect;
var greet = require('../greet');
var exec = require('child_process').exec;

describe('greet.js', function() {
  it('should greet someone', function() {
    expect(greet('Kumar')).to.eql('hello Kumar');
  });

  var cmdLineOutput;

  before(function(done) {
    exec('node greet.js somename', function (error, stdout, stderr) {
        cmdLineOutput = stdout;
        done();
    });
  });

  it('should process command line arguments', function() {
    expect(cmdLineOutput).to.eql('hello somename\n');
  });
});



