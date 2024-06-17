class Animal {
    constructor(name) {
      this.name = name;
      console.log('Animal constructor');
    }
  
    sleep() {
      console.log(`${this.name} is sleeping`)
    }
  }
  
  class Dog extends Animal {
    name = "manoj";
    constructor(name) {
      super(name);
      this.fname = name;
      console.log('Dog constructor');
    }
  
    static animalType() {
      console.log(`this is a dog and its name is ${this.name}`)
    }
  }
  
  
  let b = new Dog("scooby")
  b.sleep();
  Dog.animalType(); //this is a dog and its name is Dog -- normally inside static methods "this" is unreachable