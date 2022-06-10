// YOUR CODE BELOW

function compareObjects(object1, object2) {
  let keys1 = Object.keys(object1); // object.keys converts the values in the object1 to the array value
  let keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    return true;
  }
  for (let key of keys1) {
    if (object1[key] === object2[key]) {
      return true;
    }
  }
  return true;
}
