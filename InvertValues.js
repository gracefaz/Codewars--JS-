// Task: Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// Examples: invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//           invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//           invert([]) == []

function invert(array) {
  newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}

console.log(invert([1, -2, 3, -4, 5]));
// Prints [-1, 2, -3, 4, -5]
