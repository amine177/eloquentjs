function count(c) {
  return function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++)
      if (s.charAt(i) === c)
        count++;
    return count;
  };
}

var bCounter = count("b");
print(bCounter("abcb"));

