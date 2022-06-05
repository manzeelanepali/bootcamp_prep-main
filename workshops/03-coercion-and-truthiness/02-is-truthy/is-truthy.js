// YOUR CODE BELOW
function isTruthy(x) {
  if (x === "") {
    return "The empty string is falsey (the only falsey string)";
  }
  if (x === 0) {
    return "The number 0 is falsey (the only falsey number)";
  }
  if (x === undefined) {
    return "undefined is falsey";
  }
  if (x === null) {
    return "The null value is falsey";
  }
  if (x === false) {
    return "The boolean value false is falsey";
  } else {
    return true;
  }
}
