//compares two objects references and returns boolean
Object.is(obj1, obj2);

let a = { b: 1 };
let c = { b: 1 };

Object.is(a, c); //false as both reference points to different locations
let d = structuredClone(a);
Object.is(a, d); //false as both are different objects
let e = a;
Object.is(a, e); //true as both are pointing to same reference

// OBJECT CREATION:

//forms the object from entries.
// If type other than entries are given then it throws error.
Object.fromEntries([
  ["a", 1],
  ["b", 2],
]);

const bb = {
  a: {
    c: {
      d: 3,
    },
  },
};
Object.create(bb); // returns a new object created from bb's prototype
const newObj = Object.create(bb, { addednew: { value: 25, enumerable: true } }); // return a new object with bb's obj values as well as 'addednew' property
newObj.__proto__; //will be bb
newObj.__proto__.__proto__; //will be object

Object.assign({}, bb); // copy bb'obj to empty object in this case
const cc = { a: 1 };
Object.assign(cc, bb); //cc will be updated with bb obj's value
// CATCH_HERE - source objs own keys will be copied to cc not the source objs prototype

// both Object.create and Object.assign will create a new object not the same reference

// define property
const ac = Object.defineProperty({}, "a", {
  value: 2,
  writable: true,
  enumerable: true,
  configurable: true,
});

const ad = { a: 1, b: 2 };
Object.defineProperty(ad, "a", { value: 3 }); //ad = {a:3, b:2}
// CATCH HERE
// When adding a new property to the object we should define enumerable property as true orelse property will
// not be added
Object.defineProperty(ad, "newproperty", { value: "new" }); //ad = {a:3, b:2 } - newproperty will not be added as its property descriptor enumerable is false
Object.defineProperty(ad, "newproperty", { value: "new", enumerable: true }); //ad = {a:3, b:2, newproperty:'new'}
Object.defineProperties(ad, { new: { value: 2 }, new2: { value: 3 } });

// ================================================================================================================

// Returns Array of keys
Object.keys({ a: 1, b: 2 }); //returns [a,b]
Object.getOwnPropertyNames({ a: 1, b: 2 }); //returns [a,b]
Reflect.ownKeys({ a: 1, b: 2 }); //returns [a,b]
// Returns Array of values
Object.values({ a: 1, b: 2 }); //returns [1,2]
// Returns entries
Object.entries({ a: 1, b: 2 }); //returns [['a',1],['b',2]]

//Returns property descriptor - value, writable, enumerable, configurable
Object.getOwnPropertyDescriptor({ a: 1, b: 2 }, "a"); //returns {value: 1, writable: true, enumerable: true, configurable: true}
Object.getOwnPropertyDescriptors({ a: 1, b: 2 }); //returns descriptor object of each key

// get and set prototype.
class A {
  constructor() {
    this.name = "manoj";
  }
}
const b = { c: 1, d: 2 };
Object.getPrototypeOf(new A()); //returns the protoype of A. i.e) A.prototype
Object.getPrototypeOf(b); //prototype of b will be object
Object.setPrototypeOf(b, new A()); //now prototype of b will be A and then followed up by Object

const k = { a: 1 };

Object.preventExtensions(k);

k.b = 2; // will not be able to do this as the object is prevented for any new extensions
delete k.a; // this is possible
// preventExtensions - will not be able to add new property but will be able to modify the property and delete the property.

Object.seal(k);

delete k.a; // this is not possible
k.b = 2; //able to modify existing value
// seal - will not be able to add new property as well as delete existing key but will  be able to modify the property

Object.freeze(k);

// will not be able to modify, delete and add new key

// counterpart - checks
Object.isExtensible(k);
Object.isSealed(k);
Object.isFrozen(k);

// writable - will not be able to modify the property
// enumerable - will not be able to loop throught the property
// configurable -  will not be able to delete the property or modify other descriptor
