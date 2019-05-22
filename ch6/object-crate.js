let protoRabbit = {
  speak : function(line) {
    console.log(`The ${this.type} rabbits says '${line}'`);
  }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEE!");
