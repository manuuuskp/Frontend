class SingletonPattern {
    instance;
    count;
    constructor() {
        if(this.instance) {
            throw new('This Singleton is already instantiated');
        }
        this.instance = this;
    }

    getInstance() {
        return this;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}

export default SingletonObj = Object.freeze(new SingletonPattern());


// Share a single global instance throughout the application
// Singleton patterns classes which can be instantiated only oncuechange.
// if we want to maintain the same instance throughtout the application then using singleton pattern is the apt one.
// React context or redux is a popular example of using singleton class where only single instance is used throughtout the application.

// Singleton Objects are to be used very wisely as it can alter or collapse the whole application.
// for example if the singleton object of the above class is used in the another class that modifies this singleton object then using the second class
// will not know that it would modify the singleton object. these kind of things should be take care.

// pros - using less memory