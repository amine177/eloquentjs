s = "i am humbled to quote 'here i am' that it can't work unless we say" +
    " ' we are, and we won't ' we won't be it.";

regExp = /(^|[^\w])'|'([^\w] |$)/g;
console.log(s.replace(regExp, '$1"$2'));

