// YOUR CODE BELOW
function unShift(array, value) {
  let finalVal = [value];
  for (let i = 0; i < array.length; i++) {
    finalVal.unshift(array[i]);
  }

  return finalval;
}
console.log(unshift([a, b, c], r));
