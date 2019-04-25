var byName = {};
var ancestry = JSON.parse(require("../data/ancestry.js"));
ancestry.forEach(function(person) {
	byName[person.name] = person;
});

function reduceAncestors(person, defaultValue, f) {
  function valueFor(person) {
    if (person == null)
      return defaultValue
    else
      return f(person, valueFor(byName[person.mother]),
	      valueFor(byName[person.father]));
  }
	return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
	if (person.name == "Pauwels van Haverbeke")
		return 1;
	else
		return (fromMother + fromFather) / 2;
}

console.log(reduceAncestors(byName["Philibert Haverbeke"], 0, sharedDNA) / 4);
