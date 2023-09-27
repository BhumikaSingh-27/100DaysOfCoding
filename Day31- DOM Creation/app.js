//Dom creation

const h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerText = "My DOM Tree";


const ul= document.createElement("ul")
document.body.appendChild(ul)
const li = document.createElement("li")
ul.appendChild(li)

li.innerText = 'MS Dhoni'
// const script = document.createElement("script")
// script.setAttribute()
// document.body.appendChild(script)
