// Task: Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// Examples: (1, 0) --> 1 (1 + 0 = 1)
//           (1, 2) --> 3 (1 + 2 = 3)
//           (0, 1) --> 1 (0 + 1 = 1)
//           (1, 1) --> 1 (1 since both are same)
//           (-1, 0) --> -1 (-1 + 0 = -1)
//           (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

const getSum = (a, b) => {
  newArr = [];
  if (a < b) {
    for (i = a; i < b + 1; i++) {
      newArr.push(i);
    }
  } else {
    for (i = b; i < a + 1; i++) {
      newArr.push(i);
    }
  }
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
};

console.log(getSum(1, 2));
// Prints 3
console.log(getSum(1, 1));
// Prints 1
console.log(getSum(0, 1));
// Prints 1
console.log(getSum(1, 0));
// Should print 1
