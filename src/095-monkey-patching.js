console.log('test before patching'); // test before patching

const originalLog = console.log;

console.log = function(...args) {
  return originalLog.call(this, 'patched log', ...args);
};

console.log('test after patching'); // patched log test after patching

// Adding functionality to existing objects

Array.prototype.flatten = function() {
  return this.reduce((arr, element) => arr.concat(element), []);
};

const flattened = [1, [2], [3]].flatten();
console.log(flattened); // [1, 2, 3]

// https://mootools.net/core/docs/1.5.2/Types/Array#Array:flatten
// https://github.com/mootools/mootools-core/blob/master/Source/Types/Array.js#L132-L140
// That's why `Array.prototype.flat` is called `flat`, not `flatten`
