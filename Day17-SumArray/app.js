//find the sum of all elements in an array

//using reduce
const arr = [1,2,3,4,5]
// const sum = arr.reduce((acc,cur)=>acc+cur)
// console.log(sum)

//using for of
let sum = 0
// for (let num of arr){
//     sum+=num
// }
// console.log(sum)


//using for in
for(let num in arr){
    sum+=arr[num]
}
console.log(sum)
