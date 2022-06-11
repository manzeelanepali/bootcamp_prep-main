// YOUR CODE BELOW
// let result=oddCouple([1,2,3,4,5]) ==> returns an array[ 1,3]
// function oddCouple(array) {

function oddCouple(array) {
  let finalValue = [];
  debugger;
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (currentValue % 2 === 1) {
      finalValue.push(currentValue);
    }
    if (finalValue.length === 2) {
      break;
    }
  }
  return finalValue;
}

let value = oddCouple([1, 2, 3, 4, 5]);
console.log(value);
