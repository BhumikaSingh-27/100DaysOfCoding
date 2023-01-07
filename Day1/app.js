//DAY1
//Rest and spread Operator
//Rest
//==========================definition=====================
// Rest parameter synax allows a function to take infinite number of arguments as an array. Provides a way to represent variadic function( Function that takes infinite arity - variable  no of arguments) in JS.

//Rest example

function getSum(num1, num2, num3, ...rest) {
  console.log(rest); //[8,9]
  let sum = 0;
  for (let i of rest) {
    sum = sum + i;
  }
  return sum + num1 + num2 + num3;
}

const sum = getSum(2, 3, 4, 8, 9);
console.log(sum); //2+3+4+8+9=26

//ES5 - old way
// function getSum(num1, num2, num3, ...rest) {
//     console.log(arguments) //[2, 3, 4, 8, 9] gives an array of all the aruments passed. ES6 - we can segregate the parameters (the other extra argumets passed).
// }

//Spread
//======================definition========================
// Spread syntax allows an iterable(array or object) to be expanded in places where 0 or more arguments(function call) and elements(array literal) are expected
//Spread example

var names = ["Bhumika", "Shashank", "Astha", "Savita"];

function getNames(name1, name2, name3, name4) {
  console.log(name1, name2, name3, name4);
}

getNames(...names); //each element in array is passed as argument using spread operator
// getNames(names[0], names[1], names[2]);
//getNames(names); //array is passed as a single argument  so num1= ["Bhumika", "Shashank", "Astha", "Savita"] array and other values undefined.

console.log("====object example======\n");
//Object examples using res and spread

var student = {
  name: "Bhumika",
  age: 25,
  hobbies: ["dancing", "travelling"],
};

// const age = student.age;
// const { age, name } = student; //array destructuring  - ES6
const { age, ...rest } = student; //rest var will contain remaining values combined in an array, since age is explicitly destructed, rest doesn't contain age.
console.log(age, rest);

//spread
const newStudent = {
  ...student, //copying value of one object to another
  age: 29, //overwriting the age
};

console.log(newStudent);
