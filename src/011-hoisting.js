function foo() {
  console.log(a);

  var a = 0;

  console.log(a);
}

foo();

//

function foo() {
  var a;

  console.log(a);

  a = 0;

  console.log(a);
}

foo();

//

function foo() {
  a = 1;
  console.log(a);

  var a = 0;

  console.log(a);
}

foo();
