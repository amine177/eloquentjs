const toStringSymbol = Symbol("toString");
let stringObject = {
  [toStringSymbol]() {
    return "a random ret value";
  }
};

console.log(stringObject[toStringSymbol]());
