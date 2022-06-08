// YOUR CODE BELOW
function myLastIndexOf(array, searchValue, startIdx = 0) {
  let counter = 0;

  for (let i = startIdx; i < array.length; i++) {
    if (searchValue === array[i]) {
      counter = i - startIdx;
    }
  }
  if (counter === 0) {
    return -1;
  } else {
    return counter;
  }
}

console.log(myLastIndexOf([0, 10, 20, 10, 0], 10, 2));
