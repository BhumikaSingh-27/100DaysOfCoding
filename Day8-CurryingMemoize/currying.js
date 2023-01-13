//curring in JS
//is an advanced technique of working with functions. It transforms the function with multiple arguments to a function with several single arguments.
//it takes single argument and return another function.

// function add(a,b,c)
// {
//     return a+b+c
// }

// console.log(add(2,3,4))

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
// console.log(showData(userData)("name"))
