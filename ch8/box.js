const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
      return this._content;
  }
};


function withBoxUnlocked(f) {
  if (box.locked)
    box.unlock();
  try {
    f();
  } finally { box.lock(); }
}


try {
withBoxUnlocked(() => {throw new Error('hhh');});
} catch (e) {
  console.log("function failed");
}
console.log(box.locked);
