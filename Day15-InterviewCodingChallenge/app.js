//reverse an array
const originalArray = [1,2,3,4,5]

//1.using reverse()
// const reversedArray = originalArray.reverse()
// console.log(reversedArray)

//2.using for..of loop - unshift method
// const reversedArray=[]
// for(const item of originalArray){
//     reversedArray.unshift(item)
// }
// console.log(reversedArray)

//3.using reduce
// const reversedArray = originalArray.reduce((revArr,cur)=>{
//     revArr.unshift(cur)
//     return revArr
// },[])
// console.log(reversedArray)

//4.using map
// const reversedArray = originalArray.map((_,index,arr)=> arr[arr.length-1-index]) //we can take any variable for representing value of array, since we are not using it in pur operation hence, we can take _ which is a valid variable name
// console.log(reversedArray)