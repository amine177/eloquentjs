function range(start, end, step=1) {
  var ret = [];
  if (step >= 0)
    for (let i = start; i <= end; i += step)
      ret.push(i);
  else
    for (let i = start; i >= end; i += step)
      ret.push(i);
  return ret;
}

console.log(range(3, 7));
console.log(range(7, 3, -1));
