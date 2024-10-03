"use strict";
const arr = [
  12, 45, 78, 34, 67, 23, 89, 21, 56, 90, 33, 10, 72, 14, 5, 88, 43, 29, 80, 55,
  99, 30, 48, 76,
];
console.log(`arr før sortering er ${arr}`);
const sortedArr = sortArr(arr);
console.log(`arr efter sortering er ${sortedArr}`);
const v = Number(prompt("Hvilken værdi skal vi finde i arr?"));
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
  return null; // Return null if the value is not found
}

function sortArr(arr) {
  arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  return arr;
}

const index = binarySearch(sortedArr, v, low, high);
if (index !== null) {
  console.log(`Værdien ${v} befinder sig på #${index + 1} plads i arrayet`);
} else {
  console.log(`Værdien ${v} findes ikke i arrayet`);
}
