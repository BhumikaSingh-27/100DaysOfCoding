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

// function anotherFunction(name) {
//   setTimeout(() => {
//     return `name is ${name}`;
//   }, 2000);
// }
// //this func is async, so it will go to setTimeout API, it will take time, executed at last
// // const message = anotherFunction("Bhumika is the best!")
// // console.log(message) //message is not having data, so undefined
// // console.log("end of it")

// //if we want to print the message after sync code is eecuted then we will use concept of callback
// function anotherFunctionWWithCallback(name, cb) {
//   setTimeout(() => {
//     cb(`name is ${name}`);
//   }, 2000);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`liked the ${video}`);
//   }, 2000);
// }

// anotherFunctionWWithCallback("Bhumika is the best!", (action) => {
//   console.log(action);
//   likeTheVideo("bhumika's video", (action) => {
//     console.log(action); //callback hell, if continued
//   });
// });
// console.log("end of it");

//Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("promise is resolved");
    else reject(new Error("promise is rejected"));
  }, 2000);
});

// promise.catch((err) => console.log(err)).then((res) => console.log(res));
console.log(promise)
console.log("end");