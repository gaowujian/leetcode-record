var replaceSpace = function (s) {
  s = s.split("");
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      count++;
    }
  }
  s.length = s.length + 2 * count;
  let slow = s.length - 1;
  let fast = s.length - 1;
  while (fast >= 0) {
    if (s[fast] && s[fast] !== " ") {
      s[slow] = s[fast];
      slow--;
    }
    if (s[fast] && s[fast] === " ") {
      // let str = "%20";
      // let charLength = str.length;
      // while (charLength > 0) {
      //   s[slow] = str[charLength - 1];
      //   slow--;
      //   charLength--;
      // }
      s[slow--] = "0";
      s[slow--] = "2";
      s[slow--] = "%";
    }
    fast--;
  }
  return s.join("");
};
const result = replaceSpace("     ");
console.log("result:", result);
