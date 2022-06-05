// YOUR CODE BELOW
function taxCalculator(item, state) {
  if (state === "NY") {
    return item + (item * 4) / 100;
  }
  if (state === "NJ") {
    return item + (item * 6.625) / 100;
  }
}
