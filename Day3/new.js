//DAY4
//call apply bind
//==================definition============
// call - helps you change the context of the invoking function.
// Replaces the value of this inside a function with whatever value you want.
// apply -  similar to call function, we can pass array
// bind - helps to create another function which can be called later with new context to this.

//example

var userDetails = {
  name: "Bhumika",
  age: 27,
  printDetails: function () {
    console.log(this.name, this.age);
  },
  //   printAddress: function (state, country) {
  //     console.log(state, country);
  //   },
};

var userDetails2 = {
  name: "Shashank",
  age: 25,
};

//apply function-example
//generic function
var printAddress = function (state, country) {
  console.log(this.name, state, country);
};

userDetails.printDetails();
printAddress.call(userDetails, "Patna", "India");

//function borrowing
userDetails.printDetails.call(userDetails2);

//apply
printAddress.apply(userDetails2, ["Delhi", "India"]);

//bind
var newPrint = printAddress.bind(userDetails2, "Patna", "India");
newPrint();
