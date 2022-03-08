// Task: Given an array of numbers, return the sum of all the positive numbers.

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let myArr = [3, -2, 9, 4, -1, 8];
console.log(positiveSum(myArr));

let anotherArr = [5.6, 6, -4, 2, 1.1, -9.6];
console.log(positiveSum(anotherArr));
