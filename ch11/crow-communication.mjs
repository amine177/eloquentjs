const bigOak = require('./crow-tech').bigOak;
const defineRequestType = require('./crow-tech').defineRequestType;

defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});


bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
  () => console.log("Note delivered."));
