export function longestConsec(strarr: string[], k: number): string {
  if (k <= 0 || k > strarr.length) return '';
  let currentStr = '';
  let longestStr = '';
  for (let i = 0; i < strarr.length; i++) {
    currentStr = strarr.slice(i, i + k).join('');
    if (currentStr.length > longestStr.length) {
      longestStr = currentStr;
    }
  }
  return longestStr;
}
