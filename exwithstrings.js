"use strict";
const arr = [
  "apple",
  "banana",
  "grape",
  "kiwi",
  "mango",
  "orange",
  "peach",
  "pear",
  "strawberry",
  "watermelon",
];
console.log(`arr før sortering er ${arr}`);
const sortedArr = sortArr(arr);
console.log(`arr efter sortering er ${sortedArr}`);
const v = "watermelon";
const low = 0;
const high = sortedArr.length - 1;

function binarySearch(sortedArr, v, low, high) {
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

function sortArr(arr) {
  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  return arr;
}

const index = binarySearch(sortedArr, v, low, high) + 1;
if (index !== null) {
  console.log(`Værdien ${v} befinder sig på #${index} plads`);
} else {
  console.log(`Værdien ${v} findes ikke`);
}
