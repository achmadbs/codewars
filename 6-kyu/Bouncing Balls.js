function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce < 1 && bounce > 0 && window < h) {
    let total = 1;
    h = h * bounce;
    while (h > window) {
      total += 2;
      h = h * bounce;
    }
    return total;
  } else {
    return -1;
  }
}
