function forEach(arr, f) {
  for (var i = 0; i < arr.length; i++)
    f(arr[i]);
}


forEach(["Koko", "Kiki", "a"], console.log);
