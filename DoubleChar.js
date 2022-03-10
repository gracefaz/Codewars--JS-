// Task: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Example: "String" returns "SSttrriinngg".

function doubleChar(str) {
  newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
}

console.log(doubleChar("Grace"));
// Prints "GGrraaccee"

console.log(doubleChar("123456"));
// Prints "112233445566"
