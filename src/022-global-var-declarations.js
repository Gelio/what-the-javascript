var foo = 1;

console.log(window.foo); // 1

//

// IIFE - Immediately Invoked Function Expression
(function() {
  var bar = 1;

  console.log(window.bar); // undefined
})();

//

// let or const declarations
const baz = 1;
let abc = 2;

console.log(window.baz); // undefined
console.log(window.abc); // undefined
