// Generics allows us to write a function or a class to any type of data.

// for example:
function merge<T extends object, U extends object>(a:T, b:U) {
    return Object.assign(a, b);
}