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

// console.log(bulbSort(arr));

// console.log(arr.sort((a, b) => a - b));
// [
//     1,  1, 1, 2, 4,
//     5,  6, 7, 8, 8,
//    36, 56
//  ]

function selectSort(arr) {
  let min;
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    min = arr[i];
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      const element = arr[j];
      if (element < min) {
        min = element;
        minIndex = j;
      }
    }
    const tmp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}
// console.log(selectSort(arr));
// function insertSort(arr) {
//   let preIndex;
//   for (let i = 1; i < arr.length; i++) {
//     preIndex = i - 1;
//     const current = arr[i];
//     while (preIndex >= 0 && arr[preIndex] > current) {
//       arr[preIndex + 1] = arr[preIndex];
//       preIndex--;
//     }
//     arr[preIndex + 1] = current;
//   }
//   return arr;
// }

// console.log(insertSort(arr));

function quickSort(arr, left, right) {
  if (left >= right) return;
  // let left = 0;
  // let right = arr.length - 1;
  let base = arr[left];
  let x = left;
  let y = right;
  while (x < y) {
    // 移动
    while (x < y && arr[y] > base) {
      y--;
    }
    arr[x] = arr[y];
    x++;
    while (x < y && arr[x] < base) {
      x++;
    }
    arr[y] = arr[x];
    y--;
  }
  arr[x] = base;
  quickSort(arr, left, x - 1);
  quickSort(arr, x + 1, right);
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
