// YOUR CODE BELOW

function myJoin(array, separator = ",") {
  result = "";

  for (let i = 0; i < array.length - 1; i++) {
    currValue = array[i];

    if (currValue === null || currValue === undefined) {
      currValue = "";
    }

    result = result + currValue + separator;
  }

  return result + array[array.length - 1];
}
