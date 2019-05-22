let speak = (line) => console.log(`The ${this.type} rabbit says '${line}'`);

let hungryRabbit = {type: "hungry rabbit"};
speak.call(hungryRabbit, "Burp!");
