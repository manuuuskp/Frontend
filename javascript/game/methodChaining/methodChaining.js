function Calculator() {
  this.total = 0;
  this.add = (num) => {
    this.total += num;
    return this;
  };

  this.subtract = (num) => {
    this.total -= num;
    return this;
  };

  this.multiple = (num) => {
    this.total *= num;
    return this;
  };

  this.divide = (num) => {
    this.total /= num;
    return this;
  };
}

const calculator = new Calculator();

calculator.add(10).subtract(2).divide(2).multiple(5);
console.log(calculator.total);
