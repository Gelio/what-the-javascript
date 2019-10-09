const obj = {
  a: 1,
  b: 2,
  c: 3,
  toJSON: function() {
    return 'definitely not an object';
  }
};

console.log(JSON.stringify(obj)); // definitely not an object
