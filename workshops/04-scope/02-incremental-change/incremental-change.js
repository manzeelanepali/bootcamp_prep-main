let counter = 0;
function incrementalChange(number) {
  if (number > 0) {
    for (i = 0; i < number; i++) counter++;
    return counter;
  } else {
    for (i = 0; i > number; i--) counter--;
    return counter;
  }
}

// YOUR CODE BELOW
