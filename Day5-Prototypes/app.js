//DAY 5
// difference between undefined and not defined
//JS loosely/ weakly coupled language, we don't have to specifically define the type of variable.
//undefined is the label/placeholder which is assigned before the execution of code.
//not defined variables are the ones which are not declared or has not be given memory space.
// console.log(a) //undefined
// var a = "bhumika"

// console.log(a) //bhumika
// console.log(b) //error: b is not defined!


//Prototypes in JS
// mechanism by which one object inherits the properties of another object.
//In JS, every object has built-in properties called its prototype. This itself an object and it will have its own buit-in propertied/protoype. This called prototype chaining.

var person ={
    name:"bhumi",
    greet(){
        console.log("hello")
    }
}
console.log(person) // gives build-in methods/prototype of object

var obj1 = {
    name:"Bhumika",
    getName: function(){
        return this.name;
    }
}

//to pass an object as the prototype we use __proto__ 
var obj2={
    rollno:3,
    name:"Singh",
    __proto__:obj1
}

console.log(obj2)
console.log(obj2.name) 
console.log(obj2.getName()) //this will point to the current object, if name not present,it will use prototype object

//inheritance in js - All JavaScript objects inherit properties and methods from a prototype
 var obj3={
    section:"A",
    __proto__:obj2
 }
 
console.log(obj3)
console.log(obj3.getName())

//const object = new Object();
// console.log(object)
// const array = new Array();
// console.log(array); //contains object ptrototype along with array

//To add function to an existing prototype
//example - to add method show in array prototype
Array.prototype.show = function(){
    return this; //+"hi"
}

const cities = ["Delhi","Patna"]
console.log(cities.show())


//to convert array into object
Array.prototype.convertIntoObject = function(){
    let obj = {};
    this.forEach(elem =>{
        obj[elem]=elem;
    })
    return obj;
}
console.log(cities.convertIntoObject())

//create our own Prototype
