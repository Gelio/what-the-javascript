function foo() {
  if (true) {
    var a = 10;
  }

  console.log(a); // 10
}

foo();

//

function foo() {
  if (true) {
    const a = 1;
    let b = 2;
  }

  console.log(a, b); // ReferenceError: a is not defined
}

foo();
