// Task: Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// Example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

const between = (a, b) => {
  let newArr = [];
  for (let i = a; i < b + 1; i++) {
    newArr.push(i);
  }
  return newArr;
};

console.log(between(1, 10));
