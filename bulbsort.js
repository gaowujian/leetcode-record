const arr = [5, 1, 36, 8, 1, 56, 4, 8, 6, 1, 2, 7];

function bulbSort(arr) {
  // *记录趟数
  for (let i = 0; i < arr.length - 1; i++) {
    // ! 两两交换元素位置，和外层无关
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bulbSort(arr));

// console.log(arr.sort((a, b) => a - b));
// [
//     1,  1, 1, 2, 4,
//     5,  6, 7, 8, 8,
//    36, 56
//  ]
