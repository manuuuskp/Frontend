function retryWithPromise(fn, retryCount, delay) {
  let retriedCount = 0;
  return new Promise((resolve, reject) => {
    function callPromise() {
      fn()
        .then((res) => resolve(res))
        .catch((e) => {
          if (retriedCount++ >= retryCount) {
            throw new reject(e);
          } else {
            setTimeout(callPromise, delay);
          }
        });
    }
    callPromise();
  });
}

async function getTodo() {
  const fetchResp = await fetch("https://jsonplaceholde.typicode.com/todos/1");
  const resp = await fetchResp.json();
  console.log(resp);
}

retryWithPromise(getTodo, 3, 3000);
