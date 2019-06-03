let match = /\d+/.exec("one two 100");
console.log(match);

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
