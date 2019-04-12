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
console.log(arrayToList([1, 2, 3]));
printList(arrayToList([1, 2, 3]));
