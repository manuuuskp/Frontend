// Factory pattern is used to create Objects as a wholesome.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static get factory() {
        return new PointCoordinate();
    }
}

//seperation of concern || Single Responsibility Principle
class PointCoordinate {
    static createCartesianCoordinate(x, y) {
        return new Point(x, y);
    }

    static createPolarCoordinate(x, y) {
        return new Point(x * Math.cos(y), x * Math.sin(y));
    }

    ccreatePolarCoordinate(x, y) {
        return new Point(x * Math.cos(y), x * Math.sin(y));
    }
}

const a = Point.factory;
console.log(a);
const cartesian = PointCoordinate.createCartesianCoordinate(1, 2);
const polar = PointCoordinate.createPolarCoordinate(1, 2);

console.log(cartesian);
console.log(polar);

