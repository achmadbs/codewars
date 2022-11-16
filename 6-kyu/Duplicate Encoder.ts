export function duplicateEncode(word: string): string {
  let res: string = '';
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
      res += '(';
    } else {
      res += ')';
    }
  }
  return res;
}
