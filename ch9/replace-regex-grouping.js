console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
  .replace(/(\w+), (\w+)/g, "$2 $1"));

/* replace(, func) returns [matched, captured groups, ...]
  * thus the need for s1, s2, s3 */
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
  .replace(/(\w+), (\w+)/g, (s1, s2, s3) => `${s3} ${s2}`));

let match = /(\w+), (\w+)/g.exec(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip");
console.log(match);
// exec returns [matched, captured groups, ...]
console.log(/(\w+),/.exec("a,"));
