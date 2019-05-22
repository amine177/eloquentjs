let speak = (line) => console.log(`The ${this.type};
  rabbit say '${line}'`)
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "white", speak};

whiteRabbit.speak("i am a white rabbit");
hungryRabbit.speak("i am hungry");
