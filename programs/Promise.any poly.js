const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("promise1"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise2"), 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise3"), 750);
});

Promise.customAny = function (promises) {
  return new Promise((resolve, reject) => {
    let counter = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          if (counter >= promises.length - 1) {
            reject("All promise failed");
          }
        })
        .finally(() => {
          counter++;
        });
    }
  });
};

async function getData() {
  console.time("check");
  try {
    const data = await Promise.customAny([promise1, promise2, promise3]);
    console.log(data);
  } catch (error) {
    console.log("error ==>", error);
  } finally {
    console.timeEnd("check");
  }
}

getData();
