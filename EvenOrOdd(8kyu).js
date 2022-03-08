// Task: Create a function that takes an integer as an argument and returns 'Even' for even numbers and 'Odd' for odd numbers.

function evenOrOdd(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(7));
console.log(evenOrOdd(2));
console.log(evenOrOdd(25));
console.log(evenOrOdd(-78));
