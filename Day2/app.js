//DAY2 - Async JS prograamming
//Callbacks, promises, async await

//==================Callback==============
// callback is a function that is passed as an argument to another function. Since calling back this function depends on the function its passed to, hence, named callback.

//simple example
// function callMyName(name){
//     console.log(name)
// }

// function myNames(name, callback){
//     callback(name)
// }

// myNames("bhumi",callMyName)


const data = [
  { name: "Ajay", professsion: "Software Engineer" },
  { name: "Anuj", professsion: "Software Engineer" },
];

function getData() {
  let output = "";
  setTimeout(() => {
    data.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
      document.body.innerHTML = output;

      //   console.log(data.name, index); //doubt how index is automatically taken?
    });
  }, 1000); //if 1000, output will not have new inserted data
}

// function createData(newData, callback) {
//   setTimeout(() => {
//     data.push(newData);
//     callback(); //called after data is inserted.
//   }, 2000);
// }

// getData();
// createData({ name: "Bhumika", professsion: "Software Engineer" }, getData);

//===================Promises===================
//object represents eventual completion of asynchronous operatioon. We use promise to avoid callbackhell. Promise helps in asynschronous execution of code in JS.
//3 states-
// pending: initial state, neither fulfilled nor rejected. on hold.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//Simple example
// var Promise = new Promise(function (resolve, reject) {
//   const x = "gfg";
//   const y = "gfg";
//   if (x === y) {
//     resolve();
//   } else {
//     reject("failed");
//   }
// });

// Promise.then(function () {
//   console.log("success");
// }).catch((err) => {
//   console.log(err);
// });

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error = false; //true ->reject will be executed.
      if (!error) {
        resolve();
      } else {
        reject("Error ocuured!");
      }
    }),
      2000;
  });
}

// createData({ name: "Shashank", professsion: "Software Engineer" })
//   .then(getData)
//   .catch((err) => console.log(err));

//==================async await==============
//The async and await keywords enable asynchronous operations in JS, better way to handle promises. await can  only be used in function body with async keyword.

//asyn example
// async function start() {
//   await createData({ name: "Shashank", professsion: "Software Engineer" });
//   getData(); // this function will be  called only when create data will be executed.
// }

// start();

// Simple async await example 

async function alpha() {
  console.log("1");
  await console.log("2");
  console.log("3"); //it will be executed only when all the lines are executed from from global scope
}

alpha();
console.log("4");
console.log("5");
