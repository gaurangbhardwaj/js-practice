function twoSum(arr = [], target = 0) {
    if (!arr?.length) return [];
    const map = {},
      result = [];
    arr.forEach((data, index) => {
      map[data] = index;
      const key = target - data;
      if (map.hasOwnProperty(key)) {
        result.push([map[key], index]);
      }
    });
    return result;
  }
  
  const arr = [2, 4, 5, 10, 11, 6, 7, 1];
  const target = 9;
  console.log(twoSum(arr, target));
  // [[0,6],[1,2]]
  