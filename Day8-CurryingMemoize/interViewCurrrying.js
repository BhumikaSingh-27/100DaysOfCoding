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
function sum(a){
    return function(b){
        if(b) return sum(a+b)
        return a
    }
}

console.log(sum(1)(2))

//difference between currying and partial application
