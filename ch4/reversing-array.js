function reverseArray(arr) {
  var ret = [];
  for (var i = 0; i < arr.length; i++)
    ret.unshift(arr[i]);
  return ret;
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tmp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = tmp;
  }
  return arr;
}


console.log(reverseArray([1, 2, 3]));
a = [1, 2, 3];
a = reverseArrayInPlace([1, 2, 3]);
console.log(a);
