// DAY3
// Closures
// ==========definition===============
// A closure is the combination of a function bundled together with the lexical scope.
// It gives access to the outer function's scope from inner function. Whenever a function is created, its lexical scope will also be created in JS.
// A function will lexical scope is called closure.

//example 1
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}

var z = x(); //function is returned with its lexical scope.

z(); // outputs 7

//example 2
var sum = function (a) {
  console.log("hello", a);
  var c = 9;
  return function (b) {
    return a + b + c;
  };
};

var store = sum(2); //store contains the anonymous functionreturned by sum func
console.log(store(5));

//example with functions inside object

var sum = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      //methods
      return a + b + c;
    },
  };
};

var store = sum(2, 3, 4);
console.log(store); //contains the object with has functions stored as value.
console.log(store.getSumThree());
console.log(store.getSumTwo()); // 2+3=5
