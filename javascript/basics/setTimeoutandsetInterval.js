function sayHello(fname, lname) {
    console.log(fname,lname)
}

setTimeout(sayHello, 1000, 'manoj', 'prabhu');
setInterval(sayHello, 1000, 'manoj', 'prabhu');