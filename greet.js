'use strict';

module.exports = greet;

function greet(nameArg) {
  var name = nameArg || process.argv[2];
  return 'hello ' + name;
}

//If run from command line, greet user
console.log(greet());
