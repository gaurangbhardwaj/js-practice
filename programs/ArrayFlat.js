Array.prototype.customflat = function (depth = 2) {
  const result = [];
  for (const data of this) {
    if (Array.isArray(data) && depth > 1) {
      result.push(...data.customflat(depth - 1));
    } else {
      result.push(data);
    }
  }
  return result;
};

const arr = [1, [2, 3, [4, 5]], [6, 7, [8]]];

console.log(arr.customflat());
