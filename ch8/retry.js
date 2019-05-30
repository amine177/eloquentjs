function primitiveMultiply(a, b) {
  let fail = Math.random();
  if (fail > 0.2)
    throw new Error('random error');
  else {
    console.log(a);
    return a * b;
  }
}


function wrap(f) {
  console.log(arguments);
      try {
        return f(arguments[1], arguments[2]);
      } catch (e) {
        return wrap(f, arguments[1], arguments[2]);
      }
}


console.log(wrap(primitiveMultiply, 2, 3));
