
const  rotateArray = (array,specifiedCount)=>{
    for(let i=0;i<specifiedCount;i++){
        let removeElement = array.shift()
        array.push(removeElement)        
    }
    return array

}

console.log(rotateArray([1,2,3,4,5],3))