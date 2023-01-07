//DAY1
//REST AND SPREAD OPERATOR
//REST
//==========================definition=====================
// REST parameter synax allows a function to take infinite number of arguments as an array. Provides a way to represent variadic function( Function that takes infinite arity - variable  no of arguments) in JS.

//REST example

function getSum(num1, num2, num3) {
  return num1 + num2 + num3;
}

const sum = getSum(2, 3, 4);
console.log(sum);
