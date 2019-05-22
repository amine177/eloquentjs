let sym = Symbol("name");
console.log("Checking the uniqueness of every symbol");
console.log(sym == Symbol("name"));
class Rabbit {
  constructor(type) {
    this.type = type;
  }
}

Rabbit.prototype[sym] = 55;
let blackRabit = new Rabbit("blackRabit");
console.log(`BlackRabist's symbol property ${blackRabit[sym]}`);
