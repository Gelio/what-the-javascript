function example1(undefined) {
  undefined = true;

  if (undefined) {
    console.log('Surprised?');
  }
}

function example2(undefined) {
  const obj = {};

  console.log(
    'obj.nonExistingProperty === undefined',
    obj.nonExistingProperty === undefined
  );

  console.log('Overwriting undefined');
  undefined = true;

  console.log(
    'obj.nonExistingProperty === undefined',
    obj.nonExistingProperty === undefined
  );
}

function example3(undefined) {
  console.log('Overwriting undefined');
  undefined = true;
  console.log({ undefined }); // { undefined: true }

  console.log('Restoring undefined');
  undefined = void 0;
  console.log({ undefined }); // { undefined: undefined }
}

console.log('Example 1');
example1();

console.log('Example 2');
example2();

console.log('Example 3');
example3();
