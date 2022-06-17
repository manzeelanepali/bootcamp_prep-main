// YOUR CODE BELOW
function callThemAll(obj, value) {
  let result = [];
  for (let key in obj) {
    let currVal = obj[key];
    if (typeof currVal === "function") {
      result.push(currVal(value));
    }
  }
  return result;
}
