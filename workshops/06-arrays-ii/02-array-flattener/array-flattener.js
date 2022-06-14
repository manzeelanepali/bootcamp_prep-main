// YOUR CODE BELOW
// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]

function arrayFlattener(array) {
  let finalResult = [];
  for (let i = 0; i < array.length; i++) {
    currvalue = array[i];

    if (Array.isArray(currvalue)) {
      for (let j = 0; j < currvalue.length; j++) {
        finalResult.push(currvalue[j]);
      }
    } else {
      finalResult.push(array[i]);
    }
  }
  return finalResult;
}
