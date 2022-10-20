def count_sheeps(arrayOfSheeps):
  total = 0
  for i in arrayOfSheeps:
    if i:
      total += 1
    if not i:
      continue
  return total