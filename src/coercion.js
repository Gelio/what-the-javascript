console.log(1 == '1'); // true

console.log([] == ''); // true

console.log(!![]); // true
console.log(!!''); // false

console.log([] == true); // false

// https://dorey.github.io/JavaScript-Equality-Table/

/*
Coercion to:
1. Numbers (`Number`, `valueOf`)
2. Strings (`String`, `toString`)
3. Booleans
https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
*/

// Solution - use ===

console.log(1 === '1'); // false

console.log([] === ''); // false

console.log([] === true); // false
