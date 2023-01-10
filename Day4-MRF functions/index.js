//DAY4
//MAP FILTER REDUCE Functions

//map function
//This function is used for transformation of an array. eg, double the array elemets etc.
//it accepts a function as an arguement
//When we have to perform an operation on each element of the array and get a new array out of it.

// example
const arr = [5, 7, 8, 9];

function double(x) {
  return x * 2;
}
// const output = arr.map(double);

// const output = arr.map(function double(x) {
//     return x * x;
//   });
// const output = arr.map(x => x*2 ); //arrow function
console.log(output);

//convert array to binary
// console.log(
//   arr.map(function binary(x) {
//     return x.toString(2);
//   })
// );

//====================
//filter
// used to filter out the array elements based on a condition provided. eg, ele odd/even
// we provide the condition as a function ir filete function also accespts func as arguement.

const elemets = [1, 4, 2, 6, 7];

function isOdd(x) {
  return x % 2;
}
const output = elemets.filter(isOdd);
console.log(output); //printsall odd numbers in array

//example to filter out with condition element greater than 4
// const output = elemets.filter(x=> x>4)
// console.log(output)

//====================
//reduce
//used when we have to return only one value from array after operation is performed. Where we have to take all the elements of array and return a single value.

//sum or maximum
//example

const arr1 = [2, 4, 5];

const output1 = arr1.reduce(function (acc, cur) {
  acc = acc + cur;
  return acc;
}, 0);
console.log(output1);

//exampl 2 :find maximum
const list = [2, 6, 4, 9];

const a = arr.reduce(function (max, cur) {
  if (cur > max) {
    max = cur;
  }
  return max;
}, 0);
console.log(a);

//====================
//forEach
//method that takes a callback function which will  be executed once for every element of the array.
//return value undefined
//  we don't use in reactjs
const arr2 = [1, 2, 3, 4];
arr2.forEach((x) => console.log(x));
// const result = arr.forEach((x) => x);
// console.log(result) //undefined.

// a-b ->asc
//b-a ->desc
const sorted = arr.sort((a, b) => a - b);
console.log(sorted);

//NOTE: Difference in forEach and map is, map func return a new array with transformed elements but forEach returns undefined.
