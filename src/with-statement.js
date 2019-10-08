/*
Law of cosines:
c^2 = a^2 + b^2 - 2ab cos alpha
*/

function calculateSideLength(a, b, alpha) {
  return Math.sqrt(
    Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(alpha)
  );
}

function calculateSideLength2(a, b, alpha) {
  with (Math) {
    return sqrt(pow(a, 2) + pow(b, 2) - 2 * a * b * cos(alpha));
  }
}

//

/**
 * Extracts values on a particular index in every subarray
 * @param {any[][]} array
 * @param {number} indexOf
 */
function extractValuesFromSubarrays(array, indexOf) {
  with (array) {
    return map(subArray => subArray[indexOf]);
  }
}

const array = [[1, 2, 3], [4, 5]];

extractValuesFromSubarrays(array, 1); // [undefined, undefined]

// NOTE: `with` statement is forbidden in strict mode
