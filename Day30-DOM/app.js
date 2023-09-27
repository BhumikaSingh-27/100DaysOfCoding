//SELECTING DOM ELEMNTS

//getElementsById
const title = document.getElementById("heading");

// console.log(title);

//getElementsByClassName
// const list = document.getElementsByClassName("list-items");
// console.log(list);

//getElementsByTagName
// const listItem = document.getElementsByTagName("li");
// console.log(listItem);

//querySelector
// const container = document.querySelector("div");
// console.log(container);

//querySelectorAll
// const listItems = document.querySelectorAll(".list-items");
// console.log(listItems);

// const item = document.querySelector(".list-items");
// console.log(item);

//Styling HTML elements using JavaScript

title.style.color = "red"; //inline style is same thing

const listItems = document.querySelectorAll(".list-items");
console.log(listItems);

// listItems.style.fontSize = "4rem"; //won't work becoz we are tyring to apply to all the list times directly, we need to use for-loop

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "4rem";
}
//using forEach loop
listItems.forEach((element) => {
  element.style.fontSize = "4rem";
});

//modifying the text
const firstListItem = document.querySelector(".list-items");

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);
