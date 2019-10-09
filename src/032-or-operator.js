console.log(false || true);
// Operands do not have to be boolean
console.log(false || 5);
console.log(5 || false);

// Operands are evaluated lazily
function getValue() {
  console.log('This will not run, because 5 is truthy');
  return 10;
}
console.log(5 || getValue());

//

function foo(arg) {
  arg = arg || 10;

  console.log(arg);
}

foo(1); // 1
foo(5); // 5
foo(); // 10
foo(0); // 10 (?)

// falsy values

Boolean(0); // false
Boolean(''); // false
Boolean(undefined); // false
Boolean(null); // false
Boolean(NaN); // false

//

// Default argument
function safeFoo(arg = 10) {
  console.log(arg);
}

safeFoo(0); // 0

// Nullish coalescing operator
// https://github.com/tc39/proposal-nullish-coalescing

function safeFoo2(arg) {
  arg = arg ?? 10;

  console.log(0);
}

safeFoo2(0);
