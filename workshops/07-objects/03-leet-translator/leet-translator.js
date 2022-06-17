let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW

function leetTranslator(str) {
  let result = "";
  let leetCodex = {};
  console.log(letters.length);

  for (let i = 0; i < letters.length; i++) {
    let currValue = letters[i];
    let leetcode = leetChars[i];
    leetcode[currValue] = leetcode;
  }
  for (let i = 0; i < str.length; i++) {
    let currletters = str[i].toLowerCase();
    let currentVal = leetCodex[currletters];
    result += currentVal;
  }
  return result;
}
console.log(leetTranslator("fullstack"));
