//Dom creation

const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerText = "My DOM Tree";

const ul = document.createElement("ul");
document.body.appendChild(ul);
const li = document.createElement("li");
ul.appendChild(li);
li.innerText = "MS Dhoni";

//modifying attributes
li.setAttribute("id", "heading");
// console.log(li.getAttribute('id'));
// li.removeAttribute("id");

const head = document.querySelector("#h1");
head.setAttribute("id", "heading");



//script tag added to the body
const src = "./app.js";
const script = document.createElement("script");
script.setAttribute("src", src);
document.body.appendChild(script);


