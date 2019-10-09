// valueOf
const counterState = {
  counter: 0,
  valueOf: function() {
    return ++this.counter;
  }
};

console.log(counterState == 1); // true
console.log(counterState == 2); // true
console.log(counterState == 3); // true
console.log(Number(counterState)); // 4
console.log(Number(counterState)); // 5

// toString
const bar = {
  value: '',
  toString: function() {
    this.value += 'a';
    return this.value;
  }
};

console.log(bar == 'a'); // true
console.log(bar == 'aa'); // true
console.log(bar == 'aaa'); // true
console.log(String(bar)); // aaaa
console.log(String(bar)); // aaaaa
