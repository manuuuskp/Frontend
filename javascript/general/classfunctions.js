// class functions are used to create objects.
// The class functions will have a keyword class.


// A class element can be characterized by three aspects.

// kind - getter, setter, method, field
// location - static, instance
// visibility - public, private


class Animal {
    constructor(name) {
        console.log('Animal class');
        this.name = name;
    }

    static {
        console.log('Animal Static block');
        this.alterName = "Jack";
    }

    sound(){}

    static move() {
        console.log("Animals can always move");
    }
}

class Dog extends Animal {
    constructor(name) {
        console.log('Dog class');
        super(name);
    }

    static {
        console.log('Dog Static block')
        this.alterName = "Jacky";
    }
    
    sound() {
        console.log(`${this.name} barks`);
    }
}

const puppy = new Dog("scooby");
puppy.sound();

Dog.move();

Dog.alterName;
Animal.alterName;