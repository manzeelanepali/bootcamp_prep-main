// YOUR CODE BELOW
function cloneMachine(object) {
  let finalResult = {};

  for (let key in object) {
    finalResult[key] = object[key];
  }
  finalResult.name += "Clone";
  finalResult.offspring = [];
  object.offspring.push(finalResult.name);

  return finalResult;
}
