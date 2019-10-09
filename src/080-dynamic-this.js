function Foo() {
  this.counter = 0;
}

Foo.prototype.method = function method() {
  console.log(this);
  this.counter++;
  console.log(this.counter);
};

const fooInstance = new Foo();
fooInstance.method();

//

function fetchAndCall(callback) {
  // Simulate fetching data from the network
  setTimeout(callback, 2000);
}

const fooMethod = fooInstance.method;
fooMethod();
fetchAndCall(fooMethod);
