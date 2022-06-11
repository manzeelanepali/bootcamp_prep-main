//
// myLastIndexOf(["the", "girls", "bring", "the", "boys", "out"], "the", 2); // => 0 YOUR CODE BELOW
// myLastIndexOf(["gee", "gee", "gee", "gee", "baby", "baby"], "gee"); // => 3
function myLastIndexOf(array, searchValue, startIdx = array.length - 1) {
  let result = -1;
  for (let i = 0; i <= startIdx; i++) {
    let currValue = array[i];
    if (currValue === searchValue) {
      result = i;
    }
  }
  return result;
}
