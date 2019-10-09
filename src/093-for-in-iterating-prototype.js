const baseCounter = {
  increment: function() {
    this.value++;
  }
};

const counter = Object.create(baseCounter);
counter.value = 0;

function getAllObjectKeys(obj) {
  const keys = [];

  for (let propertyName in obj) {
    keys.push(propertyName);
  }

  return keys;
}

console.log(getAllObjectKeys(counter)); // ['value', 'increment']
// but expected: ['value']

console.log(Object.keys(counter)); // ['value']

// or use Object.prototype.hasOwnProperty.call(obj, propertyName)
// Bonus question: why `Object.prototype.hasOwnProperty.call` instead of `obj.hasOwnProperty(...)`
