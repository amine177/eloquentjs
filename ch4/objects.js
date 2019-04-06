var day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running",
		"television"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
console.log(day1.__proto__);
console.log(day1.__proto__ == Object.__proto__);
