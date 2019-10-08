function foo(arg) {
  arg = arg || 10;

  console.log(arg);
}

foo(1); // 1
foo(5); // 5
foo(); // 10
foo(0); // 10 (?)

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
