// YOUR CODE BELOW

function lastFridayNight(transactions) {
  let totalSum = 0; //returns the total sum
  for (let i = 0; i < transactions.length; i++) {
    let currentAmount = transactions[i].amount;
    totalSum += currentAmount;
  }
  return totalSum;
}
