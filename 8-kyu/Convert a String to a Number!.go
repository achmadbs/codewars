package kata

import (
  "strconv"
)

func StringToNumber(str string) int {
  digit, _ := strconv.Atoi(str)
  return digit
}