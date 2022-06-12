// YOUR CODE BELOW
// evenAndOdd([1, 2, [3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
function evenAndOdd(Array) {
  let result = [];
  for (let i = 0; i < Array.length; i++) {
    let currValue = Array[i];
    if (currValue % 2 === 1) {
      result.push(currValue);
    }
  }
  return result;
}
