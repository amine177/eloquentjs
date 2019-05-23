class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(v) {
    return new Vector(v.x + this.x , v.y + this.y);
  }

  minus(v) {
    return new Vector(-v.x + this.x , -v.y + this.y);
  }
}



let v1 = new Vector(1, 1);
let v2 = new Vector(1, 1);
console.log(v1.plus(v2));
console.log(v1.minus(v2));
