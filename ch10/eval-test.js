let y = 2;
function evaluateCode(codestring) {
  eval(codestring);
  return y;
}

// assigning to the y already existing in the upper scope
console.log(evaluateCode("y = 3"));
// y is created in the function scope
console.log(evaluateCode("var y = 5"));
console.log(y);
