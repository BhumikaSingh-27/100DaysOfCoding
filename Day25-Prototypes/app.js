const arr = [1,2,3,4]
console.log(arr.pop())
arr.sing = function(){ console.log("sing a song!")}
console.log(arr)
arr.sing()


//A prototype is a template object that contains bunch of methods that are pre-defined.
//we can create and add methods to the prototype object

console.log(Array.prototype)

String.prototype.yell = function(){
    // console.log("hello",this.toUpperCase())
    return `OMG, ${this.toUpperCase()}`
}

const cat = "bili"
console.log(cat.yell())

// __proto__: a property that stores the reference of the prototype
//prototype is the actual object where we add the methods,propertie

//prototypal inheritance is the ability to access methods or properties from another object defined in the pototype

const obj1 = {
    name:"bhumika"
}

const obj2 = Object.create(obj1)
console.log(obj2.name)
Object.defineProperty(obj2,"city",{ //used to create properties
    value:"patna"
})
console.log(obj2)