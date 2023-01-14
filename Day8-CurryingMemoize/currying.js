//curring in JS
//is an advanced technique of working with functions. It transforms the function with multiple arguments to a function with several single arguments.
//it takes single argument and return another function.
// Currying: Currying is a function that takes one argument at a time and returns a new function expecting the next argument
// Currying helps you to avoid passing the same variable again and again.
// It helps to create a higher-order function. It is extremely helpful in event handling. 

function add(a,b,c)
{
    return a+b+c
}

console.log(add(2,3,4))

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let sum = add(2)(3)(4);
console.log(sum);

//example
userData = {
  name: "Ritu",
  age: 21,
};

function showData(obj) {
  return function (userInput) {
    return obj[userInput];
  };
}

let data = showData(userData);
console.log(data("age"));
console.log(showData(userData)("name"))

//Infinite Currying in JS
function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(5)(2)(5)());

