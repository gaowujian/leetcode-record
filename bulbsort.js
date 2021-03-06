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

/**
 *
 * @param {*} arr    arr是数组
 * @param {*} left  left是左边界
 * @param {*} right  right是右边界
 */
function sort(arr, left, right) {
  if (left >= right) return;
  const p = partition(arr, left, right);
  sort(arr, left, p - 1);
  sort(arr, p + 1, right);
}

function partition(arr, left, right) {
  let pivot = left; //默认pivot就是去取左边界，在函数执行过程中不会变，在函数结束的时候会返回一个新的pivot给上层
  let storageIndex = left + 1;
  //  !采用了类似虚拟头节点的做法，我的storage-1 最后指向的一定是一个小于等于pivot值的元素
  // 在此处指向的是最后一个比pivot小的元素的下一个指针，所以 slow-1指向的一定是比
  for (let i = storageIndex; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      console.log(`快指针${i}和慢指针${storageIndex}的元素交换`);
      console.log(`交换前`, arr);
      swap(arr, i, storageIndex);
      console.log(`交换后`, arr);

      storageIndex++;
    }
  }
  swap(arr, pivot, storageIndex - 1);
  return storageIndex - 1;
  // ! 本质思想还是个一个快慢指针
  // let slow = left + 1; //存储指针用于记录真实，
  // let fast = left + 1; // fast是一个记录趟数的指针
  // while (fast <= right) {
  //   if (arr[fast] < arr[pivot]) {
  //     swap(arr, fast, slow);
  //     slow++;
  //   }
  //   fast++;
  // }
  // swap(arr, pivot, slow - 1);
  // return slow - 1;
}
function quickSort(arr) {
  let left = 0;
  let right = arr.length - 1;
  return sort(arr, left, right);
}

// 交换存储索引的函数
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

quickSort(arr);
console.log(arr);
