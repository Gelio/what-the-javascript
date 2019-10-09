console.log(void 0, void true, void undefined, void 'anything');

//

class Foo {
  counter = 0;

  setCounter = x => (this.counter = x);

  safeSetCounter = x => {
    this.counter = x;
  };

  safeSetCounter2 = x => void (this.counter = x);
}

const foo = new Foo();
console.log('setCounter', foo.setCounter(50));
console.log('safeSetCounter', foo.safeSetCounter(50));
console.log('safeSetCounter2', foo.safeSetCounter2(50));
