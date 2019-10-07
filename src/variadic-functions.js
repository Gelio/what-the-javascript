function es5Sum() {
  const result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

// arguments is not a valid array. Array.from(arguments) is
// arguments.callee

// the rest syntax`
function es6Sum(...args) {
  // args is a valid array
  return args.reduce((sum, x) => sum + x, 0);
}
