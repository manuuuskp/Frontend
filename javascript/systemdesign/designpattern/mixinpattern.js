// mixin pattern allows us to add functionality to other objects without inheritence but injecting functionality to the prototype of that object.


// const dogFunctionality = {
//     bark : () => console.log('bark'),
//     sleep: () => console.log('sleep')
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(Dog.prototype, dogFunctionality); //way to use mixin

// const a = new Dog("scooby");
// a.__proto__ will have all the dogFunctionality properties.