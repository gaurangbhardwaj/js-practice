function binarySearch(arr, search) {
  function finder(sBound = 0, eBound = 0) {
    if (sBound > eBound) return -1;
    const pivot = Math.ceil((sBound + eBound) / 2);
    if (arr[pivot] === search) return "position: " + pivot;
    if (search > arr[pivot]) return finder(pivot + 1, eBound);
    if (search < arr[pivot]) return finder(sBound, pivot - 1);
  }
  return finder(0, arr.length - 1);
}

const array = [3, 16, 22, 23, 37, 45, 99];
const searchEle = 16;
console.log("binarySearch", binarySearch(array, searchEle));
