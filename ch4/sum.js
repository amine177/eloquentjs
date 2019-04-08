function sum(arr) {
  var acc = 0;
  for (var i = 0; i < arr.length; i++)
    acc += arr[i];
  return acc;
}

console.log(sum([1, 2, 3]));
