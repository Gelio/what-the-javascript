// valueOf
const foo = {
  counter: 0,
  valueOf: function() {
    return ++this.counter;
  }
};

console.log(foo == 1, foo == 2, foo == 3, Number(foo), Number(foo));

// toString
const bar = {
  value: '',
  toString: function() {
    this.value += 'a';
    return this.value;
  }
};

console.log(bar == 'a', bar == 'aa', bar == 'aaa', String(bar), String(bar));
