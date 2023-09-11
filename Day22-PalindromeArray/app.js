
const array = [1,2,1]

function isPaindrome(array){
    let reversedArray = [...array].reverse() // spread operator was used to change the reference of the original array.
    return JSON.stringify(array) === JSON.stringify(reversedArray)    //converts array in strinf [1,2,3,4]
}

console.log(isPaindrome(array))