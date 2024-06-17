const getTodo = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos");
};

const getAlbum = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/albums");
};

function checkPromise() {
  getTodo().then((resp) => {
    console.log(resp);
    getAlbum().then(async (resp) => {
      console.log(await resp.json());
    });
  });
}

checkPromise();
