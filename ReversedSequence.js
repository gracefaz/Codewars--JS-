// Task: Build a function that returns an array of integers from n to 1 where n > 0.

// Example: Example : n = 5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  let countdown = n + 1;
  let newArr = [];
  while (countdown > 1) {
    countdown--;
    newArr.push(countdown);
  }
  return newArr;
};

console.log(reverseSeq(10));
