function findShort(s) {
  return Math.min(...s.split(' ').map((val) => val.length));
}
