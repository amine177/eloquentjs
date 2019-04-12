function isEqual(o1, o2) {
  if (o1 === null && o2 !== null) {
    return false;
  }
  if (o1 !== null && o2 === null) {
    return false;
  }
  if (o1 === o2) {
    return true;
  }
  if (typeof o1 === "object" && typeof o2 === "object") {
    var o1attr = [];
    var o2attr = [];
    for (var attr1 in o1)
      o1attr.push(attr1);
    for (var attr2 in o2)
      o2attr.push(attr2);
    if (o1attr.length !== o2attr.length)
      return false;
    for (var i = 0; i < o1attr.length; i++)
      if (!isEqual(o1[o1attr[i]], o2[o2attr[i]]))
        return false;
    return true;
  }
  return false;
}

console.log(isEqual({v:1, s:2}, {v: 1}));
