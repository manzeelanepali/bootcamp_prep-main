// YOUR CODE BELOW
function veryOdd(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let currValue = array[i];

    if (currValue % 2 === 1) {
      result.push(currValue);
    }
  }
  return result;
}
