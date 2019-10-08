function foo(a, b, c) {
  console.log(a, b, c);
}

foo(); // undefined, undefined, undefined
foo(1, 2, 3, 4, 5, 6); // 1, 2, 3 (and no error thrown)
