const difference = () => {
  let d1 = 0,
    d2 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) d1 += arr[i][j];
      if (i == n - j - 1) d2 += arr[i][j];
    }
  }
  return Math.abs(d1 - d2);
};
let n = 3;
let arr = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(difference(arr, n));
