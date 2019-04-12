var list = {
  value: 1,
  rest: {
    value: 2,
    rest : {
      value: 3,
      rest: null
    }
  }
};

function printList(l) {
  var head = l;
  while (head !== null) {
    process.stdout.write('' + head.value);
    if (head.rest !== null)
      process.stdout.write("--->");
    head = head.rest;
  }
}

function arrayToList(arr) {
  var list = {};
  list.value = arr[0];
  list.rest = null;
  var ptr = list;
  for (var i = 1; i < arr.length; i++) {
    var iterator = {};
    iterator.value = arr[i];
    iterator.rest = null;
    ptr.rest = iterator;
    ptr = iterator;
  }
  return list;
}

function arrayToList_better(arr) {
  var list = null;
  for (var i = arr.length - 1; i > -1; i--)
    list = {value: arr[i], rest: list};
    return list;
}

function nth(list, n) {
  if (n === 1)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([1, 2, 3]), 2));
console.log(arrayToList_better([1, 2, 3]));
printList(arrayToList([1, 2, 3]));
