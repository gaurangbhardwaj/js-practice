function shiftZerosToEnd(arr) {
  let nonZeroIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

function moveZerosToBeginning(arr) {
  let writeIndex = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[writeIndex] = arr[i];
      writeIndex--;
    }
  }

  // Fill the remaining positions with zeros
  for (let i = writeIndex; i >= 0; i--) {
    arr[i] = 0;
  }

  return arr;
}

console.log(shiftZerosToEnd([1, 2, 0, 3, 0, 5, 0, 0, 4, 5]));
console.log(moveZerosToBeginning([1, 2, 0, 3, 0, 5, 0, 0, 4, 5]));
