export function binarySearch(sortedArr, v, low, high) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (v === sortedArr[mid]) {
      return mid;
    } else if (v > sortedArr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
}
