class Foo {
  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }

  delayedLog() {
    // a regular function would have to be bound
    setTimeout(() => console.log(this.counter), 500);
  }
}

const instance = new Foo();
instance.delayedLog();
instance.increment();

// mistake with arrow functions and object literals

const literalInstance = {
  counter: 0,
  increment: () => {
    this.counter++;
    // does not work - this is bound to the outer context (`window`), not `literalInstance`
  }
};

literalInstance.increment();
console.log(literalInstance.counter); // 0
console.log(window.counter); // NaN
