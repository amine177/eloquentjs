function unless(test, then) {
  if (!test) then();
}

function callOnRange(start, end, body) {
  for (var i = start; i <= end; i++)
    body(i);
}


callOnRange(0, 3, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even");
  });
});
