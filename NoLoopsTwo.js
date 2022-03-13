// Task: You will be given an array and a value. All you need to do is check whether the provided array contains the value, without using a loop.
//       Arrays can contain numbers or strings. Val can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

function check(arr, val) {
  if (arr.includes(val)) {
    return true;
  }
  return false;
}

console.log(check(["x", "and", "y"], "x"));
// Should print true
