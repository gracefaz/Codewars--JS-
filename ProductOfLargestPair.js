// Task: Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.

function maxProduct(arr) {
  let max = Math.max(...arr);
  arr.splice(arr.indexOf(max), 1);
  let secondMax = Math.max(...arr);
  return max * secondMax;
}

console.log(maxProduct([5, 7, 8, 3, 0, 2]));
