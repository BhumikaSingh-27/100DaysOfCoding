const numbers = [1,2,34,60]
//using Math.max
// const maximumNumber = Math.max(...numbers)
// console.log(maximumNumber)
const maximumNumber = Math.max.apply(null,numbers)
console.log(maximumNumber)


//using reduce
// const maximumNumber = numbers.reduce((max,cur)=>(cur>max) ? cur : max)
// console.log(maximumNumber)


//using sort method
// const maximumNumber = numbers.sort((a,b)=>b-a)[0]
// console.log(maximumNumber)


//using for loop
// let max = 0
// // for(let num of numbers){
// //     if(max<num){
// //         max=num
// //     }
// // }

// for(let num in numbers){
//     if(max<numbers[num]){
//         max=numbers[num]
//     }
// }
// console.log('Maximum number is ',max);