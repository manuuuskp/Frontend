// Abstract Factory Pattern is the design pattern in which we will have a abstract layer which will inturn calls the FActory Pattern
// and creates the Object.
// The Object will be created not by directly calling the class or Factory Function but  by calling the Abstract function.


class Car {
    constructor(name) {
        this.name = name;
        this.sound = "RRRRrrrrrrrrrrrrrrrrr";
    }
}

class Bike {
    constructor(name) {
        this.name = name;
        this.sound = "Ssswwwwwwwwwwwwwshhhhh";
    }
}

class Truck {
    constructor(name) {
        this.name = name;
        this.sound = "Tttttwwwwwwwrrrrrr";
    }
}

function createVehicle(vehicle) {
    switch(vehicle) {
        case 'car':
            return new Car('car');
        case 'bike':
            return new Bike('bike');
        case 'truck':
            return new Truck('truck');
    }
}

const carObj = createVehicle('car');
const bikeObj = createVehicle('bike');