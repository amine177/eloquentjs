class PGroup {
  constructor(init) {
    this._group = init;
    this.index = 0;
  }

  delete(x) {
    if (!this.has(x)) return this;
    return new PGroup(this._group.filter(e => e != x));
  }

  add(x) {
    if (this.has(x))
      return this;
    return new PGroup(this._group.concat(x));
  }

  has(x) {
    return this._group.filter(e=>x==e).length != 0;
  }

  [Symbol.iterator]() {
    return new PGroupIterator(this);
  }
}

class PGroupIterator {

  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index >= this.group._group.length)
      return {done: true};
    return {value: this.group._group[this.index++],
      done: false};
  }
}

PGroup.empty = function() {
  return new PGroup([]);
}


let g1 = PGroup.empty();
let g2 = g1.add(1);
let g3 = g2.add(5);
let g4 = g3.delete(1);

console.log("g1 has? 1");
console.log(g1.has(1));
console.log("g2 has? 1");
console.log(g2.has(1));
console.log("g3 has? 5");
console.log(g3.has(5));
console.log(g4.has(1));
console.log("iterating through g3");
for (let x of g3) {
  console.log(x);
}
