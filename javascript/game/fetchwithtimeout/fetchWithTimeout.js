const fetchWithTimeout = (url, expireTime) => {
  return new Promise(async (resolve, reject) => {
    try {
      const controller = new AbortController();
      const expireTimer = setTimeout(() => {
        controller.abort();
        reject(new Error("time exceeds than expected"));
      }, expireTime);
      const fetchResponse = await fetch(url, { signal: controller.signal });
      clearTimeout(expireTimer);
      resolve(fetchResponse);
    } catch (e) {
      console.log(e);
    }
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/albums", 1000)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
