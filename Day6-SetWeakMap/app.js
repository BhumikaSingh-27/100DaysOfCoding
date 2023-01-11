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

//Map
//=============Definition==============
// Map object holds key-value pairs and remembers the original insertion order of the key
