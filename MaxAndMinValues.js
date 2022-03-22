// Task: Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples: [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//           [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//           [42, 54, 65, 87, 0]             -> min = 0, max = 87
//           [5]                             -> min = 5, max = 5

const min = (arr) => {
  return Math.min(...arr);
};

const max = (arr) => {
  return Math.max(...arr);
};

console.log(min([4, 5, 3, 2, 8]));
// Should print 2
console.log(max([4, 5, 3, 2, 8]));
// Should print 8
