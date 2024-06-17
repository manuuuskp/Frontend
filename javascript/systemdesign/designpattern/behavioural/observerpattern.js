class Observable {
    constructor(){
        this.observer = [];
    }

    subscribe(obs) {
        this.observer.push(obs);
    }

    unsubscribe(obs) {
        this.observer = this.observer.filter(obsItem => obsItem !== obs);
    }

    notify(data) {
        this.observer.forEach(obs => obs(data));
    }
}

const observe = new Observable();
observe.subscribe(logger);

function logger(data) {
    console.log(data);
}

const handleClickBtn = () => {
    //.....
    observe.notify('This button is clicked');
}

// RxJS - is a popular library that uses this pattern.
// The observer object is not tightly coupled.
// We can unsubscribe at any moment.

// cons:
// if the observer becomes too complex then it might cause performance issues.