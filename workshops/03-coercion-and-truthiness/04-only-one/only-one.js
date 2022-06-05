// YOUR CODE BELOW
function onlyOne(x, y, z) {
  if ((x && !y && !z) || (!x && !y && z) || (!x && y && !z)) {
    return true;
  } else {
    return false;
  }
}
