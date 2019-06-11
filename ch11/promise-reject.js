new Promise(
  (_dummy, rejectCallback) => rejectCallback(new Error("Async job failed")))
  .then(value => console.log("First handler", value))
  .catch(reason => {
    console.log("Failure because : " + reason);
    return -1;
  })
  .then(value => console.log("Second handler", value));
