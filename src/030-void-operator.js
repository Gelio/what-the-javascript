console.log(void 0, void true, void undefined, void 'anything');
// undefined, undefined, undefined, undefined

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
console.log(foo.setCounter(50)); // 50
console.log(foo.safeSetCounter(50)); // undefined
console.log(foo.safeSetCounter2(50)); // undefined
