function removeChar(str) {
  if (str.length <= 2) {
    return str;
  } else {
    return str.substr(1, str.length - 2);
  }
}

let myString = "My dream job is an astronaut";

console.log(removeChar(myString));
