var maxSequence = function (arr) {
  // ...
  let maxSum = arr[0],
    currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum < 0 || maxSum === undefined ? 0 : maxSum;
};
