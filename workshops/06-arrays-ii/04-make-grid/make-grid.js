// YOUR CODE BELOW
//makeGrid(3,4);
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
*/

function makeGrid(columns, rows) {
  result = [];
  //   will give 4 rows
  for (let i = 0; i < rows; i++) {
    let currResult = [];

    //  will give the number of columns
    for (let j = 0; j < columns; j++) {
      currResult.push(j + 1);
    }

    result.push(currResult);
  }
  return result;
}
