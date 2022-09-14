const str = "Saya sangat senang mengerjakan soal algoritma";

const longsWord = (str) => {
  const strArr = str.split(" ");
  const sortedStrArr = strArr.sort((strA, strB) => {
    return strB.length - strA.length;
  });
  return sortedStrArr[0];
};
console.log(longsWord(str) + ": " + longsWord(str).length + " character ");
