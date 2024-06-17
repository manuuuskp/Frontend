const request = indexedDB.open("bikes", 1);

request.onerror = (e) => {
  console.log("error happened", e);
};

request.onupgradeneeded = () => {
  const db = request.result;

  const store = db.createObjectStore("bikes", { keyPath: "id" });
  store.createIndex("color", ["color"], { unique: false });
  store.createIndex("make", ["make"], { unique: false });
};

request.onsuccess = () => {
  const db = request.result;

  const transaction = db.transaction("bikes", "readwrite");
  const store = transaction.objectStore("bikes");
  const colorIdx = store.index("color");
  const makeIdx = store.index("make");

  store.put({ id: 1, color: "red", make: "tvs" });
  store.put({ id: 2, color: "white", make: "royalenfield" });
  store.put({ id: 3, color: "blue", make: "bajaj" });
  store.put({ id: 4, color: "red", make: "royalenfield" });

  const storeQuery = store.get(2);
  const colorQuery = colorIdx.getAll(["red"]);
  const makeQuery = makeIdx.get(["royalenfield"]);

  storeQuery.onsuccess = () => {
    console.log(storeQuery.result);
  };

  colorQuery.onsuccess = () => {
    console.log(colorQuery.result);
  };

  makeQuery.onsuccess = () => {
    console.log(makeQuery.result);
  };
};
