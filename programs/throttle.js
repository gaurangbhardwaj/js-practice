function apiCall(type) {
  console.log(`${type} Api called`);
}

function throttle(cb, ms) {
  let flag = true;
  return function () {
    let args = arguments,
      context = this;
    if (flag) {
      cb.apply(context, args);
      flag = false;
      setTimeout(() => (flag = true), ms);
    }
  };
}

const delayApi = throttle(() => apiCall("expensive"), 1000);

// https://codesandbox.io/p/sandbox/debounce-throttle-c4p2p3?file=%2Fsrc%2FApp.js%3A6%2C1