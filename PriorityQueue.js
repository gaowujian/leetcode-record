class Heap {
  constructor(capacity) {
    this.heapSize = 0;
    this.heap = new Array(capacity).fill(-1);
    this.forks = 2; //默认是一个二插堆的实现
  }
  isEmpty() {
    return this.heapSize === 0;
  }
  isFull() {
    return this.heapSize === this.heap.length;
  }
  /**
   *
   * @param {*} i 查询节点的索引
   * @returns  返回索引i的父亲节点
   */
  parent(i) {
    return Math.floor((i - 1) / this.forks);
  }
  /**
   *
   * @param {*} i 查询节点的索引
   * @param {*} k 第K个孩子
   * @returns  返回查询节点的第k个孩子节点
   */
  kThChild(i, k) {
    return this.forks * i + k;
  }

  // 插入堆
  insert(el) {
    if (this.isFull()) {
      return new Error("堆已满，无法插入");
    }
    // 1。放入堆的尾部
    this.heap[this.heapSize] = el;
    this.heapSize++;
    // 2.进行heapify操作，此时末尾元素的索引是大小减1
    this.heapifyUp(this.heapSize - 1);
  }
  /**
   *
   * @param {*} i
   *
   * 从传入的索引开始，向上调整堆结构，形成一个大顶堆
   *
   */
  heapifyUp(i) {
    // 迭代向上调整
    const insertValue = this.heap[i];
    while (i > 0 && insertValue > this.heap[this.parent(i)]) {
      this.heap[i] = this.heap[this.parent(i)];
      i = this.parent(i);
    }
    this.heap[i] = insertValue;

    // 递归向上调整
    // if (i === 0) return;
    // let insertVal = this.heap[i];
    // let parentVal = this.heap[this.parent(i)];
    // if (insertVal > parentVal) {
    //   [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
    //   this.heapifyUp(this.parent(i));
    // }
  }
  /**
   *
   * @param {*} i 删除一个索引在i的元素,并返回
   */
  delete(i = 0) {
    if (this.isEmpty()) {
      throw new Error("堆是空,无法删除执行索引元素");
    }
    const el = this.heap[i];
    // 把堆末尾的元素，放到了删除位置
    this.heap[i] = this.heap[this.heapSize - 1];
    this.heapSize--;
    // 开始向下调整
    this.heapifyDown(i);
    return el;
  }
  /**
   *
   * @param {*} i 要开始调整的索引i
   * 把索引i为父亲的节点一下进行堆的维护
   */
  heapifyDown(i) {
    //   迭代向下调整
    let maxChild;
    let tmp = this.heap[i];
    //  检查最大的孩子不应该越界, 默认是2叉树
    while (this.kThChild(i, this.forks) < this.heapSize) {
      maxChild = this.getMaxChild(i);
      //   如果要删除的值比
      if (tmp >= this.heap[maxChild]) {
        break;
      }
      this.heap[i] = this.heap[maxChild];
      i = maxChild;
    }
    this.heap[i] = tmp;

    // 递归向下调整
    // 如果儿子越界了就说明不需要再向下调整了
    // if (this.kThChild(i, 1) > this.heapSize) return;
    // const tmp = this.heap[i];
    // const maxChild = this.getMaxChild(i);
    // if (tmp < this.heap[maxChild]) {
    //   this.heap[i] = this.heap[maxChild];
    //   this.heap[maxChild] = tmp;
    //   this.heapifyDown(maxChild);
    // }
  }
  /**
   *
   * @param {*} i
   *   用来查找索引i的最大儿子并返回index
   */
  getMaxChild(i) {
    const left = this.kThChild(i, 1);
    const right = this.kThChild(i, 2);
    console.log("this.heap[left]:", this.heap[left]);
    console.log("this.heap[right]:", this.heap[right]);
    return this.heap[left] > this.heap[right] ? left : right;
  }
}

const bigHeap = new Heap(15);

bigHeap.insert(10);
bigHeap.insert(12);
bigHeap.insert(1);
bigHeap.insert(14);
bigHeap.insert(6);
bigHeap.insert(5);
bigHeap.insert(8);
bigHeap.insert(15);
bigHeap.insert(3);
bigHeap.insert(9);
bigHeap.insert(7);
bigHeap.insert(4);
bigHeap.insert(16);

console.log(bigHeap);

console.log(bigHeap.delete());
console.log(bigHeap);
console.log(bigHeap.delete());
console.log(bigHeap);
