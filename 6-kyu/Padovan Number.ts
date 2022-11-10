function padovan(n: number) {
  let a = 1,
    b = 1,
    c = 1,
    d = 1;
  for (let i = 3; i <= n; i++) {
    d = a + b;
    a = b;
    b = c;
    c = d;
  }
  return d;
}
