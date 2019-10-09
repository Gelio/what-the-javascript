function foo() {
  console.log(a); // undefined

  var a = 0;

  console.log(a); // 0
}

foo();

//

function foo() {
  var a;

  console.log(a); // undefined

  a = 0;

  console.log(a); // 0
}

foo();

//

function foo() {
  a = 1;
  console.log(a); // 1

  var a = 0;

  console.log(a); // 9
}

foo();
