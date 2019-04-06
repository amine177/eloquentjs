function multgen(n) {
  return (x) => x * n;
}

let multBy2 = multgen(2);
let multBy3 = multgen(3);

print(multBy2(2));
print(multBy3(2));
