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
