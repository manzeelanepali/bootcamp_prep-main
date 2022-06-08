// YOUR CODE BELOW

function myReverse(array) {
  let FinalArray = [];

  for (let i = 0; i < array.length; i++) {
    FinalArray.unshift(array[i]);
  }
  return FinalArray;
}
console.log(myReverse([1, 2, 3]));
