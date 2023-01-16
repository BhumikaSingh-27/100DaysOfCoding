//Array - Data structure
//Sorting of Array
//1.Bubble sort ->N size of array, loop needs to run for nxn times.
//2 for loop required

const data = [23,14,56,6]

function sortArray(data){
    for(let i =0;i<data.length;i++){
        for(let j =0 ;j<data.length;j++){
            if(data[j]>data[j+1]){
                let temp =data[j];
                data[j] = data[j+1]
                data[j+1]=temp
            }
        }
    }
    return data
}

console.log(sortArray(data))

//visualization
// [23,14,56,6]
// 1. i=0;j=0 => [14,23,56,6]
