//selection Sort
//we select an element from array and compare it with rest of the element.
//swap the elemrnt with the smallest or largest element 
//2 types - selection sort in ascending order and descending order 

const array = [20,12,53,3]


function selectionSort(arr){
    let minIndex=0;
    for(let i=0 ; i<arr.length ;i++){
        minIndex = i;
        for(let j=i+1; j<arr.length;j++){
            if(arr[j]< arr[minIndex]){
                minIndex=j
            }
        }
        if(i!=minIndex){
            let temp = arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]= temp
        }
    }
console.log(arr)
}

selectionSort(array)

// [0,2,34,22,10,19] - function selectionSort(array)(
 //
               P
// case 1 : [0,2,34,22,10,191 : No change
 //
                 P
// case 2 : (0,2,34,22,10,19) : No change
                 P
                       min
// case E 3 : [0,2.34.22.18.19] : change
                                           (0,2,10,22,34,19)
// case 4 : (0,2,10,22,34,19) 0 : 10,19,34,22]
// case 5 (0,2,10,19,34,221
