function range(start, end) {
  var ret = [];
  for (var i = start; i <= end; ++i)
    ret.push(i);
  return ret;
}

console.log(range(3, 7));
