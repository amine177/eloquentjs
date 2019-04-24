function average(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }) / arr.length;
}


function male(p) {
  return p.sex === "m";
}


function female(p) {
  return p.sex === "f";
}

function age(p) {
  return p.died - p.born;
}

var ANCESTRY_FILE = require("./../data/ancestry.js");
var ancestry = JSON.parse(ANCESTRY_FILE);

console.log("average age for females is " +
  average(ancestry.filter(female).map(age)));

console.log("average age for males is " +
  average(ancestry.filter(male).map(age)));
