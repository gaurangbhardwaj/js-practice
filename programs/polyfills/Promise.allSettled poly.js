const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise1"), 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("promise2"), 500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise3"), 750);
});

Promise.customAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    for (const element of promises) {
      element
        .then((data) => {
          result.push({ status: "fulfilled", value: data });
        })
        .catch((error) => {
          result.push({ status: "rejected", value: error });
        })
        .finally(() => {
          if (result.length === promises.length) {
            resolve(result);
          }
        });
    }
  });
};

async function getData() {
  console.time("check");
  try {
    const data = await Promise.customAllSettled([promise1, promise2, promise3]);
    console.log(data);
  } catch (error) {
    console.log("error ==>", error);
  } finally {
    console.timeEnd("check");
  }
}

getData();
