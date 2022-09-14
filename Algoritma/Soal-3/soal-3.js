const myCounter = (INPUT, QUERY) => {
  return [INPUT, QUERY]
    .reduce((a, b) => {
      return a.concat(b);
    }, [])
    .reduce((countWords, word) => {
      countWords[word] = ++countWords[word] || 0;
      return countWords;
    }, []);
};

var INPUT = ["xc", "dz", "bbb", "dz"];
var QUERY = ["bbb", "ac", "dz"];

console.log(myCounter(INPUT, QUERY));
