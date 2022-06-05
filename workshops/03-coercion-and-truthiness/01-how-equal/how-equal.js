// YOUR CODE BELOW
function howEqual(x, y) {
  if (x === y) {
    return "strictly";
  } else if (x == y) {
    return "loosely";
  } else {
    return "not equal";
  }
}
