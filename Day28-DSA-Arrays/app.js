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
