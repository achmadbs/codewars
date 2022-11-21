export function xo(str: string): boolean {
  // your code here
  let x: number = 0;
  let o: number = 0;
  for (let char of str) {
    if (char === 'x' || char === 'X') x++;
    if (char === 'o' || char === 'O') o++;
  }
  return x === o;
}
