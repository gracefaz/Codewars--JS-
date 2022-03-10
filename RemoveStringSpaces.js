// Task: Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  let newStr = x.split(" ").join("");
  return newStr;
}

console.log(noSpace("It is a good day to code"));
// Prints "Itisagooddaytocode"
