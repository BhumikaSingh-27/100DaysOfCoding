//DAY2 - Async JS prograamming
//Callbacks, promises, async await

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

function createData(newData, callback) {
  setTimeout(() => {
    data.push(newData);
    callback(); //called after data is inserted.
  }, 2000);
}

// getData();
createData({ name: "Bhumika", professsion: "Software Engineer" }, getData);

//======Promises=========
//object represents eventual completion of asynchronous operatioon.  3 states-
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//example
// var Promise = new Promise(function (resolve, reject) {
//   const x = "gfg";
//   const y = "fg";
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

createData({ name: "Shashank", professsion: "Software Engineer" })
  .then(getData)
  .catch((err) => console.log(err));
