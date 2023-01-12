// DAY 7
//Hoisting
//In JS, variables and function can be accessed even before it is initialised or put some value in it.
//JS creates memory for each variable and functions, even before a single line of code is executed.

console.log(a); //undefined
getName(); //gives output "Hey There"
console.log(getName) //gives the function.

var a = 10;

function getName() {
  console.log("Hey There!");
}

//In the memory creation phase, the variables are assigned, a special placeholder, undefined.
// Functions are assigned with code. So, when we try to access var before initialization, it gives undefined
//whereas function is excuted, since in memory the function is already declared with code.

console.log(getName) //gives the function.


console.log(b) //error: b is not defined, since there is no memory assigned for b.

//If we try to call an arrow function, before initialization, it will throw an error because here getName is treate as variable
// var getName = ()=>{
//     console.log("hey there!") //getName is not a function
// }

// var getName = function(){
//     console.log("Hey")
// }
// getName=> will be assigned as undefined. Behaves as variable.