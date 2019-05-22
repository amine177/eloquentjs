class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(y, x) {
    return this.content[y * this.width + x];
  }

  set(y, x, value) {
    this.content[y * this.width + x] = value;
  }
}


class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {
      y: undefined,
      x: undefined,
      done: true};

    let value = {
      y: this.y,
      x: this.x,
      value: this.matrix.get(this.y, this.x)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      ++this.y;
    }
    return {value, done: false};
  }
}


let matrix = new Matrix(2, 2);
matrix.set(0, 0, "a")
matrix.set(0, 1, "b")
matrix.set(1, 0, "c")
matrix.set(1, 1, "d")
let matrixIterator = new MatrixIterator(matrix);
let nextVal = matrixIterator.next();
while (!nextVal.done) {
  console.log(nextVal["value"]);
  nextVal = matrixIterator.next();
}
