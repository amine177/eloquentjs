function exponent(a) {
  return (b) => Math.pow(b , a);
}


let square = exponent(2);
let cube = exponent(3);

print(square(3));
print(cube(3));
