console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

console.log(isNaN(NaN)); // true

// isNaN(x) = Number.isNaN(Number(x))
console.log(isNaN({})); // true
console.log(Number.isNaN({})); // false
