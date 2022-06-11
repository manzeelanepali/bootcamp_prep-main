// YOUR CODE BELOW
//myReverse([1, 2, 3]);    // => [3, 2, 1]
function myReverse(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    let currValue = array[i];

    result.push(currValue);
  }
  return result;
}
