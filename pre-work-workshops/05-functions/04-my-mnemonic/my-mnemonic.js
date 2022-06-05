function myMnemonic(string1, string2, string3, string4) {
  let finalstring = "";
  if (string1) {
    finalstring = string1[0];
  }
  if (string2) {
    finalstring = finalstring + string2[0];
  }
  if (string3) {
    finalstring = finalstring + string3[0];
  }
  if (string4) {
    finalstring = finalstring + string4[0];
  }
  return finalstring;
}
