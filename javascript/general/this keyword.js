// The "this" keyword in javascript behaves differently for strict and non-strict mode.

// most cases "this" is determined by how the function is called.(runtime binding)

// bind() method sets the this value of the function regardless of how the function is called.

// Arrow function doesn't have its own this instead it takes from its enclosing lexical scope.

// NON strict mode - this always refers to an object.
// strict mode - this can be of any value.

// This value of "this" depends on in which context it appears.
// Function,
// Class and
// Global

// based on how the function is invoked the value of "this" will be different.

// The value of this is not the object that has the function but the object that calls the function.

// const obj3 = {
//     __proto__: obj1,
//     name: "obj3",
//   };

//   console.log(obj3.getThis()); // { name: 'obj3' }

// if the function is accessed without calling then "this" inside the function will be "undefined".

// function getStrictMode() {
//     return this;
// }
// console.log(typeof(1).getStrictMode()) //number
//  console.log(getStrictMode()) // undefined

//  in NON-STRICT mode, this will always be an Object.
// console.log(getStrictMode()) // globalThis

// call, apply and bind the this. so even we try to change then the bound "this" wil be there.

// CALLBACK:
// Even in callback the value of "this" depends on how the function is called.
// if the callback function is called directly then the value of this is undefined.(STRICT MODE)
// if the callback function is called directly then the value of this is globalThis. (NON STRICT MODE)

// This is the same when it will be called in the Array iterative METHODS, promises, constructor.

// ARROW FUNCTION:
// The this in the arrow function will be bound to its enclosing lexical scope.
// NOTE - when trying to call, bind and apply the arrow function the "this" will be ignored.

// const foo = () => this; //globalThis

// foo.call({name: obj}); //still globalThis even if we set this to the call.

// CONSTRUCTOR:
// This "new" keyword when used creates the new Object.
// in the constructor function the "this" will point to the "new" object that was created.

// SUPER:
// when a super.higherMethod() is called then this in higherMethod refers to the this of the super not the object where the higherMethod is present.

// CLASS:
//     two types - instance field, static field

//     instance field's "this" point to that particular instance.
//     static field's "this" points to the Class itself as it is not bound to any instance.

// DERIVED CLASS:
//     Derived class must either call super() or return something in the constructor to bind the "this".

// GLOBAL EXECUTION CONTEXT, or Arrow function written in global - will point to GlobalThis. (both STRICT AND NON STRICT mode)

// If the source is loaded as a module (for HTML, this means adding type="module" to the <script> tag),
// this is always undefined at the top level.

// // An object can be passed as the first argument to 'call'
// // or 'apply' and 'this' will be bound to it.
// const obj = { a: "Custom" };

// // Variables declared with var become properties of 'globalThis'.
// var a = "Global";

// function whatsThis() {
//   return this.a; // 'this' depends on how the function is called
// }

// whatsThis(); // 'Global'; the 'this' parameter defaults to 'globalThis' in non–strict mode
// obj.whatsThis = whatsThis;
// obj.whatsThis(); // 'Custom'; the 'this' parameter is bound to obj

// IMPORTANT

// function f() {
//     return this.a;
//   }

//   const g = f.bind({ a: "azerty" });
//   console.log(g()); // azerty

//   const h = g.bind({ a: "yoo" }); // bind only works once!
//   console.log(h()); // azerty

//   const o = { a: 37, f, g, h };
//   console.log(o.a, o.f(), o.g(), o.h()); // 37 37 azerty azerty

// class Car {
//     constructor() {
//       // Bind sayBye but not sayHi to show the difference
//       this.sayBye = this.sayBye.bind(this);
//     }

//     sayHi() {
//       console.log(`Hello from ${this.name}`);
//     }

//     sayBye() {
//       console.log(`Bye from ${this.name}`);
//     }

//     get name() {
//       return "Ferrari";
//     }
//   }

//   class Bird {
//     get name() {
//       return "Tweety";
//     }
//   }

//   const car = new Car();
//   const bird = new Bird();

//   // The value of 'this' in methods depends on their caller
//   car.sayHi(); // Hello from Ferrari
//   bird.sayHi = car.sayHi;
//   bird.sayHi(); // Hello from Tweety

//   // For bound methods, 'this' doesn't depend on the caller
//   bird.sayBye = car.sayBye;
//   bird.sayBye(); // Bye from Ferrari
