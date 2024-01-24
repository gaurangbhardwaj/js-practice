function getMaxProfit(arr) {
  if (!arr?.length || !Array.isArray(arr)) return 0;
  let profit = 0,
    minCostPrice = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minCostPrice) minCostPrice = arr[i];
    if (arr[i] - minCostPrice > profit) profit = arr[i] - minCostPrice; // const costPrice = arr[i]; // for (let j = i + 1; j < arr.length; j++) { //      const sellingPrice = arr[j]; //      const diff = sellingPrice - costPrice; //      if (diff > profit) profit = diff; // }
  }
  return profit;
}

const prices = [7, 1, 5, 3, 6, 4, 0];
// const prices = [7, 6, 4, 3, 1];
console.log(getMaxProfit(prices));
