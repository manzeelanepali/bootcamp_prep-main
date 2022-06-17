let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW

function attendanceCheck(Day) {
  debugger;
  let result = [];

  for (let i = 0; i < classRoom.length; i++) {
    let currValue = classRoom[i];

    let person = "";
    let attendance = [];
    for (let key in currValue) {
      person = key;
      attendance = currValue[key];
    }
    for (let j = 0; j < attendance.length; j++) {
      let currDay = attendance[j];
      if (currDay[Day]) {
        result.push(person);
      }
    }
  }
  return result;
}
attendanceCheck("Monday"); // => ['Marnie', 'Shoshanna']
