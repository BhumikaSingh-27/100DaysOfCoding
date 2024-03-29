function curry(a) {
  return function (b) {
    console.log(a, b);
  };
}

console.log(curry(4)(5));

function sun(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sun(2)(6)(1));
//   why do we use currying

function evaluate(op) {
  return function (a) {
    return function (b) {
      if (op === "add") {
        return a + b;
      } else if (op === "multiply") {
        return a * b;
      } else if (op === "sub") {
        return a - b;
      } else if (op === "divide") return a / b;
      else return "invaalid operator";
    };
  };
}

const mul = evaluate("multiply");
console.log(mul(9)(2));
console.log(evaluate("multiply")(3)(4));

//infinite currying
function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

console.log(sum(1)(2));

//difference between currying and partial application
// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }

//partial application - transforms function into another function with small arity(arguments)
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

//manipulating DOM - real world senarios for using currying
function updateHeading(id) {
  console.log(id);
  return function (content) {
    document.querySelector("#" + id).innerText = content;
  };
}

const updateHedaingByText = updateHeading("heading");

updateHedaingByText("Hello");


//Curried function implementation - f(a,b,c) - f(a)(b)(c)
