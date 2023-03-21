// class is a syntactic sugar for constructor functions.

abstract class Department {
    name: string;
    private numOfPpl: number;
    protected employees: string[] = [];

    static hod: string;

    get numOfPeople() {
        return this.numOfPeople;
    }

    constructor(name:string, num:number) {
        this.name = name;
        this.numOfPpl = num;
    }

    abstract absMethod(name:string): void

    // difference between public, private and protected accessors is that public can be accessed at any place.
    // private can only be accessed within that class and not its subclass even.
    // protected can be accessed even by its subclass.

    // abstract class makes the extending class to implement the abstract methods and properties.

    // singleton pattern will let the class gets instantiated only once by making the constructor private and creating the static method.

    // constructor(public name:string, private numOfPpl:number) {

    // }
}

interface User {
    name: string;
    id?: number;
    age: number;
    email: string;
}

type User1 = {
    name?: string;
    id: number;
    age: number;
    email: string;
}

// both interface and type are more or less the same but the potential difference is that the type can be used to create Union types.

// Multiple interfaces can be extended as well.

// optional properties can be added by using ?

// const dept = new Department("IT", 200);

// console.log(dept.name);
console.log(Department.hod);