const Benchmark = require("benchmark");

function buildStringBuilderSuite(array) {
  return new Benchmark.Suite(`String Builder: ${array.length}`)
    .add(`array.Join with push: ${array.length}`, function () {
      const strings = [];
      for (let string of array) {
        strings.push(string);
      }
      const result = strings.join("\n");
    })
    .add(`array.join with indexing: ${array.length}`, function () {
      const strings = [];
      for (let string of array) {
        strings[strings.length] = string;
      }
      const result = strings.join("\n");
    })
    .add(`string concat: ${array.length}`, function () {
      const strings = [];
      let result = "";
      for (let string of array) {
        result += string + "\n";
      }
    })
    .add(`string concat with interpolation: ${array.length}`, function () {
      const strings = [];
      let result = "";
      for (let string of array) {
        result += `${string}\n`;
      }
    });
}
module.exports = {
  buildStringBuilderSuite,
};
