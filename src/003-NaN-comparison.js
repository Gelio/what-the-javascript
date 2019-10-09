console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

console.log(isNaN(NaN)); // true
console.log(isNaN({})); // true

// isNaN(x) = Number.isNaN(Number(x))
console.log(Number.isNaN({})); // false
