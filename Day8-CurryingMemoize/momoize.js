//DAY8
//Memoization
//Memoization is a technique
// for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.
//cache -> object

function calc(n){
      let sum =0
      for(let i =0; i<=n;i++){
        sum+=i
      }
    return sum
    }
    
    function memoize(fun){
      let cache = {}
      return function(n){
       if(n in cache){
        return cache[n]
       }else{
        let res = fun(n);
        cache[n]=res;
        return res
       }
    }
}
const myMemoize = memoize(calc) 
  console.time();
console.log(myMemoize(5))
  console.timeEnd();
  console.log("----------")
  console.time();
  console.log(myMemoize(5))
  console.timeEnd();