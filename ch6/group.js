class Group {

  constructor() {
    this._group = [];
  }

  add(x) {
    this._group.push(x);
  }

  delete(x) {
    let index = this._group.indexOf(x);
    if (index > -1)
      this._group.splice(index, 1);
  }

  has(x) {
    return this._group.indexOf(x) > -1;
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }

  next() {
    if (this.index >= this.group._group.length)
      return {done: true}
    else
      return {value: this.group._group[this.index++], done: false};
  }

}


let group = new Group();
group.add(3);
group.add(4);
group.add(5);
console.log(group.has(5));
group.delete(5);
console.log(group.has(5));

let groupIter = new GroupIterator(group);
console.log(groupIter.next());
console.log(groupIter.next());
