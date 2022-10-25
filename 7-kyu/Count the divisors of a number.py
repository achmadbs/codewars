def divisors(n):
  i = 1
  res = 0
  while i <= n:
    if n % i == 0:
      res += 1
    i += 1
  return res