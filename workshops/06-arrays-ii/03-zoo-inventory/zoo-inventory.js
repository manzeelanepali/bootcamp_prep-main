// YOUR CODE BELOW

function zooInventory(array) {
  result = [];

  for (let i = 0; i < array.length; i++) {
    let currValue = array[i];
    let name = currValue[0];
    let type = currValue[1][0];
    let age = currValue[1][1];
    sentence = `${name} the ${type} is ${age}.`;

    result.push(sentence);
  }

  return result;
}
