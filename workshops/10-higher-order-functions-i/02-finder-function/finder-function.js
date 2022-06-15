// YOUR CODE BELOW
function finderFunction(array, callback) {
  result = -1;
  for (let i = 0; i < array.length; i++) {
    currValue = array[i];
    let val = callback(currValue);
    if (val) {
      return i;
    }
  }
  return result;
}
