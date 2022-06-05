// YOUR CODE BELOW
function zeroDarkThirty(num) {
  if (num === 0) {
    return NaN;
  }
  debugger;

  let finalstring = "";
  let stringnum = String(num);
  for (let i = 0; i < stringnum.length; i++) {
    if (stringnum[i] !== "0") {
      finalstring += stringnum[i];
    }
  }
  return Number(finalstring);
}
console.log(zeroDarkThirty(1000));
