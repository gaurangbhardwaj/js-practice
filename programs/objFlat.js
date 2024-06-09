function getFlatObj(obj, parentKey, flattedObj = {}) {
  for (const key in obj) {
    const keyName = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object") getFlatObj(obj[key], keyName, flattedObj);
    else flattedObj[keyName] = obj[key];
  }
  return flattedObj;
}

console.log(
  getFlatObj({
    info: {
      fName: "Gaurang",
      lName: "Bhardwaj",
      address: {
        city: "Delhi",
        country: "India",
        nums: [1,2,3,4]
      },
    },
  })
);
