//find second largest number in the array of size N, distict elemts of the array

const secondLargest = (arr) => {
  //need to convert array with distinct elements
  const uniqueArr = Array.from(new Set(arr))
  uniqueArr.sort((a, b) => b - a);
  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
};

console.log(secondLargest([1, 34, 23, 2, 35, 89]));

//to remove duplicates in an array
const removeDups = (arr) => {
  const unique = arr.filter((ele,index,arr)=>arr.indexOf(ele) === index)
  return unique
}
console.log(removeDups([1,4,2,2,3,6,4,3]))


//find second maximum, my approach :)
const findSecondMax = (arr) => {
  const uniqueArray = arr.filter((ele,index,arr)=>arr.indexOf(ele) === index)

  let max=uniqueArray[0]
  let prevMax = 0
  for(let i=1;i<=uniqueArray.length;i++){
    if(arr[i]>max){
      prevMax= max;
      max=arr[i]
    }
  }
  return prevMax
}

console.log(findSecondMax([1,4,2,2,3,6,4,3]))


//------------------------------------q2:Rotate Array by K-----------------------
 