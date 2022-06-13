// YOUR CODE BELOW
function veryOddMutant(array) {
  let countValue = 0;
  for (let i = 0; i < array.length; i++) {
    currValue = array[i];
    if (currValue % 2 === 0) {
      countValue++;
      array[i] = "normie";
    }
  }
  return countValue;
}
