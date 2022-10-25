function inArray(array1, array2) {
  const strArray2 = array2.join(' ');
  return array1.filter((e) => strArray2.includes(e)).sort();
}
