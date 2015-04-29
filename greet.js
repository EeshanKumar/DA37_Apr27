'use strict';

module.exports = greet;

function greet(name) {
  return 'hello ' + name;
};

//If run from command line, greet user
if (process.argv[2]) {
  console.log(greet(process.argv[2]));
}
