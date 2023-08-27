//Js executes synchronous code first and then async code later.
//JS is a single threaded language, executes one thing at a time in a specific order.

// sync code
// console.log("first");
// console.log("in between");
// console.log("end");

//async code
console.log("first");
// setTimeout(() => {
//   console.log("in between");
// }, 2000);

// console.log("end");

function anotherFunction(name) {
  setTimeout(() => {
    return `name is ${name}`;
  }, 2000);
}
//this func is async, so it will go to setTimeout API, it will take time, executed at last
// const message = anotherFunction("Bhumika is the best!")
// console.log(message) //message is not having data, so undefined
// console.log("end of it")

//if we want to print the message after sync code is eecuted then we will use concept of callback
function anotherFunctionWWithCallback(name, cb) {
  setTimeout(() => {
    cb(`name is ${name}`);
  }, 2000);
}

anotherFunctionWWithCallback(
  "Bhumika is the best!",
  (action) => {
    console.log(action);
  }
);
console.log("end of it");
