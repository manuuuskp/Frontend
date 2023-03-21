// Intersection types:

type user = {
    name: string;
    age: number;
}

type data = {
    email: string;
}

type intersection = user & data;

const myUser:intersection = {
    name: "mano",
    age: 29,
    email: "asdkjn@gmail.com"
}

// Type gaurds:

// check for "type of" if the input might be multiple types.

// for object we can use "key" in
// for classes we can use instanceof
// for variables we can use type of

// Discriminated Unions:

// having a common key among the objects to identify and use type gaurds.

// Type casting

// type casting allows to tell the typescript that this object prop of which type.

Index properties:



