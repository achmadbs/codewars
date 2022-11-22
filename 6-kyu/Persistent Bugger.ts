export function persistence(num: number): number {
  // your code here
  let totalOperations = 0,
    currentSum = String(num);
  while (currentSum.length > 1) {
    currentSum = [...currentSum]
      .reduce((acc: any, curr: any) => acc * curr, 1)
      .toString();
    totalOperations++;
  }
  return totalOperations;
}
