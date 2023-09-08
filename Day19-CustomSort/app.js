//bubble sort algorithm
function customSort (arr){
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            //swap element
            temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
return arr
}

const arr = [10,4,5,2,3]
console.log(customSort(arr))