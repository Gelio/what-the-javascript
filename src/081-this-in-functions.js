function foo() {
  console.log(this);

  this.a = 10;
  delete this.a;
}

counterState(); // logs: window

//

(function() {
  'use strict'; // applies only for functions **defined** in strict-mode

  counterState(); // logs: window

  function bar() {
    console.log(this);
  }

  bar(); // logs: undefined
})();
