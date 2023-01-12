//DAY 7
//Event bubbling (up)and capturing/trickling(down)
//Two ways of event propagation in DOM tree

//ac w3c first  event capture happens then event bubbling
// addEventLister(event,callback,usecapture flag)
// usecapture flag => true (trickling) or false(bubbling)

// =============Bubbling==============

document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("grandparent clicked!");
});

document.querySelector("#parent").addEventListener("click", () => {
  console.log("parent clicked!");
});

document.querySelector("#child").addEventListener("click", () => {
  console.log("child clicked!");
});

// ===========Capturing/Trickling===============
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("grandparent clicked!");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked!");
//   },
//   false //bubbli
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child clicked!");
//   },
//   true
// );

//NOTE: According to W3C event model, default flow is capturing (down) to bubbling(upwards)
//-- If child elem is clicked then output will be ==> grandparent, child and parent
// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("grandparent clicked!");
// },true);

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("parent clicked!");
// }, false); //bubbling

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("child clicked!");
// },true);

//=============stopPropagation=======
//when we don't want the event to propagate in the progragation cycle.
// document.querySelector("#child").addEventListener("click", (e) => {
//   console.log("child clicked!");
//   e.stopPropagation();
// },true);

//===========stopImmediatePropagation======
// when we have 2/multiple event listeners on same DOM element and we want to stop the propagation, we can use this.

// document.querySelector("#child").addEventListener("click", (e) => {
//   console.log("child clicked!");
// });
// document.querySelector("#child").addEventListener("click", (e) => {
//   console.log("child clicked again!");
//   e.stopImmediatePropagation();
// });

//==========preventDefault=====
//To stop the default behaviour of tags, we use this

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("link clicked!");
});
