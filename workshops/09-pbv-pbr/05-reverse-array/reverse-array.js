// YOUR CODE BELOW
// let myArray = [1, 2, 3, 4];
// reverse(myArray);
// console.log(myArray) // [4, 3, 2, 1]
function reverseArray(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    currValue = array[i];
    result.push(currValue);
  }
  for (let i = 0; result.length > i; i++) {
    array[i] = result[i];
  }

  return array;
}
