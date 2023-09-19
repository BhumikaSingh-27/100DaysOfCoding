class Color {
  //is a function that will run
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  //methods defined in the class
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
}

const color1 = new Color(255, 255, 255);
console.log(color1.rgb());

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating!!`;
  }
}
class Cat extends Pet {
    //contructor in Pet is called as cat class extends Pet class
  meow() {
    return `${this.name} is meow meow!`;
  }
}

class Dog extends Pet {
    //to call the constructor of parent we use super
    constructor(name,age,noOfLives){
        super(name,age);
        this.noOfLives = noOfLives
    }
  
  bark() {
    return `${this.name} is woof!!`;
  }
}

const cat = new Cat("monty",3)
const dog = new Dog("wof",9,7)
console.log(cat,dog)
