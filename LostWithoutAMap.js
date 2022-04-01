// Task: Given an array of integers, return a new array with each value doubled.

// Example: [1, 2, 3] --> [2, 4, 6].

function maps(arr) {
  let newArr = [...arr];
  let newNewArr = [];
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = 2 * newArr[i];
    newNewArr.push(newArr[i]);
  }
  return newNewArr;
}

console.log(maps([1, 2, 3, 4]));
