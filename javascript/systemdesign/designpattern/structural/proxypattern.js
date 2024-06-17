const person = {
    name: 'superstar',
    age: 50,
}

const personProxy = new Proxy(person, {
    get: (obj, props) => {
        console.log(`the value is ${obj[props]}`);
    },
    set: (obj, props, value) => {
        console.log(`The old value is ${obj[props]} and the new value is ${value}`);
        return Reflect.set(obj, props, value);
    }
});

// Intercept and have more control over the objects.

// useful when validation, notification and debugging