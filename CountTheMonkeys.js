// Task: You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// Examples: monkeyCount(10) --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function monkeyCount(n) {
  newArr = [];
  for (let count = 1; count < n + 1; count++) {
    newArr.push(count);
  }
  return newArr;
}

console.log(monkeyCount(15));
