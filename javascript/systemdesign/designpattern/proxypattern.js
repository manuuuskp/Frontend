const person = {
    name: 'superstar',
    age: 50,
}

const personProxy = new Proxy(person, {
    get: (obj, props) => {

    },
    set: (obj, props, value) => {

    }
});

// Intercept and have more control over the objects.

// useful when validation, notification and debugging