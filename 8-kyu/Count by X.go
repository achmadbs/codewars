package kata


func CountBy(x, n int) []int {
  result := []int {}
  for i := 1; i <= n; i++ {
    result = append(result, i * x)
  }
  return result
}
