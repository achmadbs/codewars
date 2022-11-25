function triangle(row) {
  let res = '';
  for (let i = 0; i < row.length - 1; i++) {
    res +=
      row[i] === row[i + 1]
        ? row[i]
        : 'RGB'.replace(row[i], '').replace(row[i + 1], '');
  }
  return res.length > 1 ? triangle(res) : res;
}
