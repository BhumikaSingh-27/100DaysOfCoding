//Array - Data structure
//Sorting of Array
//1.Bubble sort ->N size of array, loop needs to run for nxn times.
//2 for loop required

const data = [40, 30, 12, 25]

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
// steps
// (4) [40, 30, 12, 25]
// (4) [30, 40, 12, 25]
//  (4) [30, 12, 40, 25
// (4) [30, 12, 25, 40]
// (4) [30, 12, 25, 40]
// (4) [12, 30, 25, 40]
// (4) [12, 25, 30, 40]
// (4) [12, 25, 30, 40]
// (4) [12, 25, 30, 40]
// (4) [12, 25, 30, 40]
// (4) [12, 25, 30, 40]
// (4) [12, 25, 30, 40]
// (4) [12, 25, 30, 40]
//  (4) [12, 25, 30, 40]
// (4) [12, 25, 30, 40]
// (4) [12, 25, 30, 40]
