function binarySearch(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    if (target === numbers[mid]) {
      return mid;
    }
    if (target > numbers[mid]) {
      low = mid + 1
    }
    if (target < numbers[mid]) {
      high = mid - 1;
    }
  }
  return -1
}