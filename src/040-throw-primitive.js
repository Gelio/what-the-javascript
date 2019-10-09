function thrower(valueToThrow) {
  throw valueToThrow;
}

function foo(valueToBeThrown) {
  try {
    thrower(valueToBeThrown);
  } catch (error) {
    console.log('Error caught', error);
  }
}

foo(new Error('example error'));
foo('abc');
foo(Symbol());
foo(1);
foo(undefined);
