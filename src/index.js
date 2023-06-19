const { buildStringBuilderSuite } = require("./benchmarks");

function runSuite(suite) {
  console.log(`\nBenchmarking ${suite.name}:`);

  suite
    .on("cycle", function (event) {
      console.log(String(event.target));
    })
    .on("complete", function () {
      console.log(this.filter("fastest").map("name") + " is faster");
    })
    .run();
}

const alphabet = "abcdefghijklmnopqrstuvwxyz ";

function generateTestArray(arrayLength) {
  const result = [];
  for (let i = 0; i < arrayLength; ++i) {
    const length = Math.floor(Math.random() * 20 + 3);
    const element = [...new Array(length)]
      .map((i) => alphabet[Math.floor(Math.random() * alphabet.length)])
      .join("");
    result.push(element);
  }

  return result;
}
for (let i = 1; i < 10; i++) {
  const testArray = generateTestArray(10 ** i);

  runSuite(buildStringBuilderSuite(testArray));
}
