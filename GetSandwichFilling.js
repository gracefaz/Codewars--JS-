function getSandwichFilling(sandwich) {
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
  sandwich.shift();
  sandwich.pop();
  return sandwich;
}

console.log(getSandwichFilling([1, 2, 3, 4]));
