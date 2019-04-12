function reduce(arr, combine, start) {
  var ret = start;
  arr.forEach(function(e) {
    ret = combine(ret, e);
  });
    return ret;
}



var ANCESTRY_FILE = require("./../data/ancestry.js");
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(reduce(ancestry
  .filter(function(p) {
  return p.name[0] == "C";
})
  .map(function(p) {
    return p.name;
  }),
  function(e1, e2) {
    if (e1 !== "")
      return e1 + "*" + e2;
    else
      return e2;},
  ""));
