// Task: You are given a string containing a sequence of character sequences separated by commas.
//       Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
//       If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples: "1,2,3"      =>  "2"
//           "1,2,3,4"    =>  "2 3"
//           "1,2,3,4,5"  =>  "2 3 4"

//                 ""     =>  NULL
//                 "1"    =>  NULL
//                 "1,2"  =>  NULL

function array(str) {
  if (str.length <= 2 || str === "") {
    return null;
  } else {
    let arr = str.split(",");
    let newArr = [];
    for (let i = 1; i < arr.length - 1; i++) {
      newArr.push(arr[i]);
    }
    return newArr.join(" ");
  }
}

console.log(array(""));

// For some reason solution not accepted by Codewars, but correct when ran locally.
