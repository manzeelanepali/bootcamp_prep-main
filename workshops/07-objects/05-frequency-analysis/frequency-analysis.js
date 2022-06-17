// YOUR CODE BELOW
function frequencyAnalysis(string) {
  result = {};

  for (let i = 0; i < string.length; i++) {
    let currValue = string[i].toLowerCase();
    if (currValue in result) {
      result[currValue]++;
    } else {
      result[currValue] = 1;
    }
  }

  return result;
}
