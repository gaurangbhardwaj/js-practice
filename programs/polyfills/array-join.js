Array.prototype.customJoin = function (seprator) {
  let result = "";
  seprator = seprator === undefined ? "," : String(seprator);
  for (let i = 0; i < this.length; i++) {
    result += `${i > 0 ? seprator : ""}${this[i]}`;
  }
  return result;
};

const arr = ["Hello", 1, "Gaurang","ee"];
console.log(arr.customJoin(false));
