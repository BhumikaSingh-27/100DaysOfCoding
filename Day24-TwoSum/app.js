
//brute force solution
const twoSum = function (num, target) {
  for (let i = 0; i < num.length; i++) {
    const source = num[i];
    for (let j = i + 1; j < num.length; j++) {
      if (source + num[j] === target) return [source, num[j]];
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
