let map = {hasOwnProperty: 5};
console.log(map.hasOwnProperty);
let f = {}.hasOwnProperty;
map.f = f;
console.log(map.f("f"));
