function computeAmount() {
  return {
    total: 0,
    lacs: function (num) {
      this.total += num * 10 ** 5;
      return this;
    },
    thousand: function (num) {
      this.total += num * 10 ** 3;
      return this;
    },
    crore: function (num) {
      this.total += num * 10 ** 7;
      return this;
    },
    value: function () {
      return this.total;
    },
  };
}

function computeAmount2() {
  let total = 0;
  function lacs() {
    total += num * 10 ** 5;
    return this;
  }
  function thousand() {
    total += num * 10 ** 3;
    return this;
  }
  function crore() {
    total += num * 10 ** 7;
    return this;
  }
  function value() {
    return total;
  }
  return {
    lacs,
    thousand,
    crore,
    value,
  };
}

console.log(
  computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(4)
    .value()
);

// console.log(
//     computeAmount2().crore(2)
//       .lacs(15)
//       .crore(5)
//       .crore(2)
//       .lacs(20)
//       .thousand(45)
//       .crore(4)
//       .value()
//   );
