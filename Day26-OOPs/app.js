
//factory function

function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        return `rgb(${this.r},${this.g},${this.b})`
    }
    return color
}

const navColor = new makeColor(90,34,10)
console.log(navColor)
console.log(navColor.rgb())

const themeColor = makeColor(90,45,34)
console.log(themeColor.rgb())

//factory function/pattern is not used to create objects rather constructor pattern / function is used.
//why? because using factory function, every object will have different methods created.
//Individual methods will be created for every objects that we will create using factory functions.

console.log(navColor.rgb === themeColor.rgb) //false because both doesn't refer to same function
console.log("hello".slice === "belloe".slice) //slice method is not defined on every single string, but in the prototye of String
//String.prototype 

//constructor
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

const color1 = new Color(12,23,45)
console.log(color1)

//defining methods in color contructor using Prototype.  
Color.prototype.rgb = function(){
    return `rgb(${this.r},${this.g},${this.b})`
}

console.log(color1.rgb())
const color2 = new Color(45,56,67)
console.log(color2.rgb())