export function number(array: string[]): string[] {
  return array.map((val: string, i: number) => `${i + 1}: ${val}`);
}
