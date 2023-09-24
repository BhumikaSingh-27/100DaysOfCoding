//reverse a string

let name = "Bhumika";
const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

const reverString = (str) => {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }
  return temp;
};

const reversedString = reverseStr(name);
console.log(reversedString);
console.log(reverString(name));

//check if the string is pangram or not
const alphabets = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

const checkPangram = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    console.log(Object.hasOwnProperty(JSON.stringify(str[i])));
    if (Object.hasOwnProperty(str[i])) {
      alphabets[str[i]] += 1;
      console.log(alphabets[str[i]]);
    }
    // console.log(alphabets)
  }
};
checkPangram("acvbs");
// console.log()
