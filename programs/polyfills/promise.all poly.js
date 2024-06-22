const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise1"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise2"), 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise3"), 750);
});

Promise.customAll = function (promises) {
  return new Promise((resolve, reject) => {
    const resolvedData = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          resolvedData.push(data);
          if (resolvedData.length === promises.length) {
            resolve(resolvedData);
          }
        })
        .catch((error) => reject(error));
    }
  });
};

async function getData() {
  console.time("check");
  const data = await Promise.customAll([promise1, promise2, promise3]);
  console.timeEnd("check");
  console.log(data);
}

getData();
