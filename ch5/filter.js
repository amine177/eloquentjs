var ANCESTRY_FILE = require("./../data/ancestry.js");

function filter(arr, predicate) {
  var passed = [];
  arr.forEach(function(e) {
    if (predicate(e))
      passed.push(e);
  });
  return passed;
}

var ancestry = JSON.parse(ANCESTRY_FILE);

console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));
