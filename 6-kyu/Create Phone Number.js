function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx';

  for (let i of numbers) {
    format = format.replace('x', i);
  }

  return format;
}
