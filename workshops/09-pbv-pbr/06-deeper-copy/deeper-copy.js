// YOUR CODE BELOW

function deeperCopy(array) {
  result = [];

  for (let i = 0; i < array.length; i++) {
    currValue = array[i];

    if (Array.isArray(currValue)) {
      let newArray = [];
      for (j = 0; j < currValue.length; j++) {
        newArray.push(currValue[j]);
      }
      result.push(newArray);
    } else {
      result.push(currValue);
    }
  }
  return result;
}
