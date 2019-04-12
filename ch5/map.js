function map(arr, mutate) {
  var _map = [];
  arr.forEach(function(e) {
    _map.push(mutate(e));
  });
  return _map;
}
var ancestry = JSON.parse(require("../data/ancestry.js"));
var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});
console.log(map(overNinety, function(person) {
  return person.name;
}));
