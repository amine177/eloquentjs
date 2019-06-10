let regExp = /^[+\-]?(\d+(\.\d*)?|(\.\d+))([eE][+\-]?\d+)?$/;

console.log(regExp.test("3434"));
console.log(regExp.test("-3434"));
console.log(regExp.test(".E"));
console.log(regExp.test("5.5E10"));
