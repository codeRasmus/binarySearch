"use strict";
import { sortArr } from "/functions/sortArr.js";
import { binarySearch } from "/functions/binarySearch.js";
import { generateArr } from "/functions/generateArr.js";
const arr = generateArr();
const sortedArr = sortArr(arr);
console.log(`arr efter sortering er ${sortedArr}`);
const v = Number(prompt("Hvilken værdi skal vi finde i arr?"));
const low = 0;
const high = sortedArr.length - 1;

const index = binarySearch(sortedArr, v, low, high);
if (index !== null) {
  console.log(`Værdien ${v} befinder sig på #${index + 1} plads i arrayet`);
} else {
  console.log(`Værdien ${v} findes ikke i arrayet`);
}
