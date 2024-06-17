const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 resolved"), 25000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 resolved"), 15000);
});

const promiseFunc = async () => {
  console.log("function started");

  const resP1 = await p1;
  console.log("function end p1");
  console.log(resP1);

  const resP2 = await p2;
  console.log("function end p1");
  console.log(resP2);
};

promiseFunc();
