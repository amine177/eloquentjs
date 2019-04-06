function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}

print(isEven(5));
print(isEven(4));
