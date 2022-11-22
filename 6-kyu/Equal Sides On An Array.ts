export function findEvenIndex(arr: number[]): number {
  //Code goes here!
  let left = 0;
  let right = arr.reduce((acc, curr) => (acc += curr), 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}
