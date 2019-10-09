es5Sum(1, 2); // 3
es5Sum(1, 2, 3, 4, 5, 6, 7); // 28

function es5Sum() {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

// arguments is not a valid array. Array.from(arguments) is

function invalidUse() {
  arguments.forEach(x => {
    // TypeError: arguments.forEach is not a function
  });
}

function validUse() {
  Array.from(arguments).forEach(x => {
    // ...
  });
}

//

// arguments.callee

// the rest syntax`
function es6Sum(...args) {
  // args is a valid array
  return args.reduce((sum, x) => sum + x, 0);
}
