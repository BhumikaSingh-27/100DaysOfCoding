//DAY4
//call apply bind
//==================definition============
// call - helps you change the context of the invoking function.
// Replaces the value of this inside a function with whatever value you want.
// apply -  similar to call function, we can pass array
// bind - helps to create another function which can be called later with new context to this.

//example
var obj1={
    name:"Arjun",
    age:"25"
  }
  
  var obj2={
    name:"bhumika",
    age:"25"
  }
  
  function printDetails(a,b){
  console.log(a,b);
    console.log("Name",this.name,this.age)
    console.log("\n");
  
  }
  
  printDetails.call(obj1,"car","bike")
  
  //printDetails.call(obj2)
  
  printDetails.apply(obj1,["car","bike"])
  
  
  let bindedObject=printDetails.bind(obj2)
  
  bindedObject("plan","space")

 //another example 
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


//generic function
var printAddress = function (state, country) {
  console.log(this.name, state, country);
};

userDetails.printDetails();

//call
printAddress.call(userDetails, "Patna", "India");
//apply
printAddress.apply(userDetails2, ["Delhi", "India"]);

//function borrowing
userDetails.printDetails.call(userDetails2);



//bind
var newPrint = printAddress.bind(userDetails2, "Patna", "India");
newPrint();
