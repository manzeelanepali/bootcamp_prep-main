// YOUR CODE BELOW
// dogBreeder('Sam', 12)    // => {name: 'Sam', age: 12}

// dogBreeder(15)    // => {name:'Steve', age: 15}

function dogBreeder(name = "Steve", age = 0) {
  let newDog = { name, age };
  if (typeof name === "number") {
    newDog.age = name;
    newDog.name = "Steve";
  }

  return newDog;
}
