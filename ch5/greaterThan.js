function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}


var greaterThan9 = greaterThan(9);
console.log(greaterThan9(8));
