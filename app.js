const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/fitst.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first + "\n" + second);