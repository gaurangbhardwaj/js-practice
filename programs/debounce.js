const getData = () => {
  console.log("Get data from API");
};

const debounce = (cb, ms) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb.apply(context, args), ms);
  };
};

const delayApi = debounce(getData, 500);
