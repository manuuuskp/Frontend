// As the name suggests this design pattern is used to build objects in steps.
// normally we will separate the creation of objects and addition of properties as a separate entity.

// when we take a factory pattern, we will be creating the objects that has list of properties and methods by default.
// here in builder pattern we will create an object and then add the property and methods which we want which becomes a more
// flexible approach.

const obj1 = {
    name: 'object one',
    phrase: 'Im object one'
}

const addMethod = obj => obj.tweek = 'Im a new property';

addMethod(obj1);

console.log(obj1.tweek) // Im a new property