// prototype is an Object.
// Prototype pattern allows us to easily let objects to access properties of other objects that aren't defined on the object itself.
// This makes to avoid duplication of methods and properties thus saving the memory.

const obj1 = {
    name: 'myname',
    phrase: 'my phrase'
}

const obj2 = {};

Object.setPrototypeOf(obj2, obj1);

console.log(obj2.name) //myname
console.log(obj2.phrase) //my phrase 