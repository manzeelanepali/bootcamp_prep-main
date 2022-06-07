// YOUR CODE BELOW

function oddCouple(Array) {
  let finalArray = [];
  for (let i = 0; i < Array.length; i++) {
    currentvalue = Array[i]; // to excess each element of an array

    if (currentvalue % 2 === 1) {
      // checking current value if it is odd or even & if odd run the block of code
      finalArray.push(currentvalue); // push the current odd value to the final array
      if (finalArray.length === 2) {
        //if the lenght of final array is 2 break
        break;
      }
    }
  }
  return finalArray; // returns the final array
}
