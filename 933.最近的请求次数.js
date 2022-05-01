/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  this.arr = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.arr.push(t);
  let start = t - 3000;
  let end = t;
  let cnt = 0;

  for (let i = 0; i < this.arr.length; i++) {
    const element = this.arr[i];

    if (start <= element && element <= end) {
      cnt++;
    }
  }
  return cnt;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// var obj = new RecentCounter();
// const a = obj.ping(1);
// console.log("a:", a);
// const b = obj.ping(100);
// console.log("b:", b);
// const c = obj.ping(3001);
// console.log("c:", c);
// const d = obj.ping(3002);
// console.log("d:", d);
// @lc code=end
