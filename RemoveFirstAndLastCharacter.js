// Task: Create a function that removes the first and last character of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
  if (str.length < 2) {
    return str;
  } else {
    return str.substr(1, str.length - 2);
  }
}

let myString = "My dream job is an astronaut";

console.log(removeChar(myString));
