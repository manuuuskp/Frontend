function InMemorySearch() {
  const docObj = {};

  this.addDoc = (key, value) => {
    docObj[key] = value;
  };

  this.searchDoc = (key, searchFn, sortObj) => {
    if (key in docObj) {
      const filteredObj = docObj[key].filter(searchFn);

      const resultObj = filteredObj.sort((a, b) => {
        if (sortObj.order === "ASC") {
          if (a[sortObj.key] > b[sortObj.key]) return 1;
          else return -1;
        } else {
          if (a[sortObj.key] < b[sortObj.key]) return 1;
          else return -1;
        }
      });

      return resultObj;
    }
  };
}

const inMem = new InMemorySearch();
inMem.addDoc("movies", [
  { name: "Avenger", rating: 8.7, year: 2017 },
  { name: "Black Adam", rating: 8.2, year: 2015 },
  { name: "Black Panther", rating: 8.4, year: 2018 },
  { name: "Jhon Which", rating: 9.1, year: 2019 },
]);

const result = inMem.searchDoc("movies", (e) => e.rating >= 8.4, {
  key: "name",
  order: "DESC",
});

console.log(result);
