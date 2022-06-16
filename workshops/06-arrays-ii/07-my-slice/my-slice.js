// YOUR CODE BELOW
// mySlice([1, 2, 3], 1) // => [2, 3]
// mySlice([1, 2, 3], 1, 2) // => [2]
// ([1, 2, 3]) // => [1, 2, 3]
function mySlice(array, startIdx = 0, EndIdx = array.length) {
  let result = [];
  if (startIdx < 0) {
    startIdx = startIdx + array.length;
  }
  if (EndIdx < 0) {
    EndIdx = EndIdx + array.length;
  }
  for (let i = startIdx; i < EndIdx; i++) {
    let currVal = array[i];

    result.push(currVal);
  }

  return result;
}
