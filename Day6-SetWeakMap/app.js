//DAY6
// Map Set WeakMap WeakSet

//difference in array and set
//set contains unique value but array can have duplicate values
// ============Definition========
// Set objects are a collection of values which stores unique value of any typeof.
// it can be iterated in the order of insertion.

const mySet = new Set();
console.log(mySet);

const myArray = [1, 2, 3, 4];
const set = new Set(myArray);
console.log(set);
//add value to set
set.add(4);
console.log(set.size);
//delete a value
set.delete(4);
//store object in set
console.log(set.add({ name: "bhumika" }));

//to clear set object
set.clear();
console.log(set);

//to find/check for an element in set
console.log(set.has(2)); //true or false

//iterate over set for or forEach
for (let item of set) {
  console.log(item);
}
set.forEach((element) => {
  console.log(element);
});

//set advance example
function unique(arr) {
    let unique = [...new Set(arr)]; //expanding into arr using spread operator
    return unique;
  }
  
  let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
  ];
  
  console.log(unique(values));
//Map
//=============Definition==============
// Map object holds key-value pairs and remembers the original insertion order of the key.

// const myMap = new Map();
// console.log(myMap)

const myMap = new Map([["1", "one"]]); //Map([])
console.log(myMap);

myMap.set([
  ["1", "Ajay"],
  ["2", "Bhumika"],
]);
// myMap.set({name:"bhumika"})

//can overwrite the value for same key
myMap.set("2", "Vivek");

//to get the value for a key
myMap.get("1");

//iterate on values via for or forEach
myMap.forEach((key, value) => {
  console.log(key);
});

for (let [key, value] of myMap) {
  console.log(`${key}:value${value}`);
}


//weakSet
//====================Definition==================
//collection of only objects
//no iteration possible
// references to objects in a WeakSet are held weakly. If no other references to an object stored in the WeakSet exist, those objects can be garbage collected.

const weakSet = new WeakSet();
// console.log(weakSet)

var obj1={"name":"bhumika"}
var obj2={"roll":19}
// weakSet.add(obj1,obj2) //only one object will be inserted.
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet)


//weakMap
//=========================Definition==============
//collection of key/value pairs whose keys must be objects
var obj1 = {
    name: "bhumika",
  };
  
  const wm = new WeakMap();
  wm.set(obj1, "singh"); 
//   wm.set(1,"two") //error:Invalid value used as weak map key

// Map - key-value pair of any type , set() =>insert elemts
//set- unique of any type  add=> insert
//weakMap -key-value pair, keys->object, value->any type
//weakSet - unique objects