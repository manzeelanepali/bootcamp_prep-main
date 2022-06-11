// YOUR CODE BELOW
// myIncludes([10, 20, 30], 20); // => true
// myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false
function myIncludes(array, searchValue) {
  let result = false;
  for (i = 0; i < array.length; i++) {
    let currValue = array[i];

    if (currValue === searchValue) {
      return true;
    }
  }
  return result;
}
