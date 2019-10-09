function createGetter(initializer) {
  let value = initializer();

  return function() {
    return value;
  };
}

const getMostImportantNumber = createGetter(function() {
  return 42;
});

getMostImportantNumber(); // 42
