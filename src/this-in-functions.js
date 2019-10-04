function foo() {
  console.log(this);

  this.a = 10;
  delete this.a;
}

foo(); // logs: window

//

(function() {
  'use strict'; // applies only for functions **defined** in strict-mode

  foo();

  function bar() {
    console.log(this);
  }

  bar();
})();
