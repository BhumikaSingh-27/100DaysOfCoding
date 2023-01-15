// Data structure –

// Format to organize manage store data
// Allows efficient access and modification

 // 2types-
// Build in Primitive – array and object
// Non- primitive – we need to code

 //Build-in or PRIMITIVE DATA STRUCTURE
 //1.Array
 //-An array is a collection of items stored at contiguous memory locations.

 const arr =[1,2,3];
 console.log(arr[2])
 console.log(arr.length)

 //we can store values of any type in array also the length is dynamic(grow or shrink as  required)
 //Drawback: when we add/delete a new item at the beginning or the middle of the array, the indexes of all the elements that come after the element added/deleted have to be changed.
 //thus, has computatuonal cost.
//====================================
 //Objects
 //an object is a collection of key-value pairs. This data structure is also called map, dictionary or hash-table in other programming languages.
 const obj = {
    prop1: "I'm",
    prop2: "an",
    prop3: "object"
}

//Each key has to be unique.Objects can store both values and functions. When talking about objects, values are called properties, and functions are called methods.
const obj = {
    prop1: "Hello!",
    prop3: function() {console.log("I'm a property dude!")
}}
console.log(obj.prop1) // "Hello!"
console.log(obj["prop1"]) // "Hello!"
obj.prop3() 
//Objects are a good way to group together data that have something in common or are somehow related. 