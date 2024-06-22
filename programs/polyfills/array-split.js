String.prototype.customSplit = function (splitter) {
  splitter = splitter === undefined ? "" : String(splitter);
  const result = [];
  let word = "";
  let trail = "";
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    trail += this[i];
    if (this[i] === splitter[count]) {
      if (count === splitter.length - 1) {
        result.push(word);
        word = "";
        trail = "";
      } else count++;
    } else {
      word = trail;
      count = 0;
    }
  }
  result.push(word);
  return result;
};

const str = "hellmy1o sd1muy1shd2 womy1rld";
console.log(str.customSplit("my"));
console.log(str.split("my"));
