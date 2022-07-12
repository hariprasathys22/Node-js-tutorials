const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result_file.txt",
  `The result of first and second is : ${first}, ${second}`,
  { flag: "a" }
);

// console.log(first + "\n" + second);
