const str = "NEGIE1";
const reverseAlp = (str) => {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;
  const swap = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };
  const text = (x = "") => /[a-zA-Z]/.test(x);
  while (left <= right) {
    while (!text(arr[left])) {
      left += 1;
      if (left > right) {
        break;
      }
    }
    while (!text(arr[right])) {
      right -= 1;
      if (left > right) {
        break;
      }
    }
    if (left > right) {
      break;
    }
    swap(left, right);
    left += 1;
    right -= 1;
  }
  return arr.join("");
};
console.log(reverseAlp(str));
