// Factory Functions are just a function other than the class and constructor Functions.

function factoryFunction(name, age) {
    return {
        name: name,
        age: age,
        getDetails() {
            console.log(`my name is ${this.name} and my age is ${this.age}`)
        }
    }
}