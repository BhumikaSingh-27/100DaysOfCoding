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
