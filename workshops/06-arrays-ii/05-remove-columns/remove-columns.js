// YOUR CODE BELOW
function removeColumns(originalGrid, numColums) {
  let result = [];

  for (let i = 0; i < originalGrid.length; i++) {
    let currValue = originalGrid[i];
    let innerColoumn = [];

    for (let j = 0; j < currValue.length - numColums; j++) {
      innerColoumn.push(currValue[j]);
    }
    result.push(innerColoumn);
  }
  return result;
}
