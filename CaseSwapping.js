// Task: Given a string, swap the case for each of the letters.

// Examples: ""           -->   ""
//           "CodeWars"   -->   "cODEwARS"
//           "abc"        -->   "ABC"
//           "ABC"        -->   "abc"
//           "123235"     -->   "123235"

function swap(str) {
  const uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (uppercase.includes(str[i])) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}

console.log(swap("GrAcE fAz"));
// Should print "gRaCe FaZ"
