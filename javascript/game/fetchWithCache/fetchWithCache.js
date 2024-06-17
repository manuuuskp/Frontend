const fetchWithCache = (cacheTime) => {
  const cacheData = {};
  let timer;
  return async function (url, options) {
    if (url in cacheData) {
      return cacheData[url];
    }
    console.log("fetchcall");
    const fetchData = await fetch(url, options);
    const response = await fetchData.json();
    cacheData[url] = response;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      delete cacheData[url];
    }, cacheTime);

    return response;
  };
};

const call = fetchWithCache(2000);

call("https://jsonplaceholder.typicode.com/todos/1", {}).then((res) => {
  console.log(res);
  setTimeout(
    () =>
      call("https://jsonplaceholder.typicode.com/todos/1", {}).then((res) =>
        console.log(res)
      ),
    700
  );

  setTimeout(
    () =>
      call("https://jsonplaceholder.typicode.com/todos/1", {}).then((res) =>
        console.log(res)
      ),
    900
  );

  setTimeout(
    () =>
      call("https://jsonplaceholder.typicode.com/todos/1", {}).then((res) =>
        console.log(res)
      ),
    1100
  );

  setTimeout(
    () =>
      call("https://jsonplaceholder.typicode.com/todos/1", {}).then((res) =>
        console.log(res)
      ),
    1300
  );

  setTimeout(
    () =>
      call("https://jsonplaceholder.typicode.com/todos/1", {}).then((res) =>
        console.log(res)
      ),
    1500
  );

  setTimeout(
    () =>
      call("https://jsonplaceholder.typicode.com/todos/1", {}).then((res) =>
        console.log(res)
      ),
    1700
  );

  setTimeout(
    () =>
      call("https://jsonplaceholder.typicode.com/todos/1", {}).then((res) =>
        console.log(res)
      ),
    1900
  );

  setTimeout(
    () =>
      call("https://jsonplaceholder.typicode.com/todos/1", {}).then((res) => {
        console.log(res);
        setTimeout(
          () =>
            call("https://jsonplaceholder.typicode.com/todos/1", {}).then(
              (res) => console.log(res)
            ),
          300
        );
        setTimeout(
          () =>
            call("https://jsonplaceholder.typicode.com/todos/1", {}).then(
              (res) => console.log(res)
            ),
          2300
        );
      }),
    2100
  );
});
