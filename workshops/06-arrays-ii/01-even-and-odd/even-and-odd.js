// YOUR CODE BELOW
// evenAndOdd([1, 2, [3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
function evenAndOdd(Array) {
  let evenresult = [];
  let oddresult = [];
  for (let i = 0; i < Array.length; i++) {
    let currValue = Array[i];
    if (currValue % 2 === 1) {
      evenresult.push(currValue);
    }
    if (currValue % 2 === 0) {
      oddresult.push(currValue);
    }
  }
  return [oddresult, evenresult];
}
