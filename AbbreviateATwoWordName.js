// Task: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//       The output should be two capital letters with a dot separating them.

// Examples:

// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
  let arr = name.split(" ");
  return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
}

console.log(abbrevName("Grace Faz"));
// Should print G.F
