class Matrix {
  constructor(width, height, element = (y, x) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(y, x);
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


class SymmetricMatrix extends Matrix {
  constructor(size, element = (y, x) => undefined) {
    super(size, size, (y, x) => {
      if (x < y) return element(y, x);
      else return element(y, x);
    });
  }

  set(y, x, value) {
    super.set(y, x, value);
  }
}


let matrix = new SymmetricMatrix(5, (y, x) => `${y}, ${x}`);
console.log(matrix.get(2, 3));
