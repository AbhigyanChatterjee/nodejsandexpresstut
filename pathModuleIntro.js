const path = require('path');

//seperator prop
console.log(path.sep);

//join path
const joinPath = path.join('content', 'subFolder', 'test.txt');
console.log(joinPath);

console.log(path.basename(joinPath));

//resolve path

const abs = path.resolve(__filename, 'content', 'subFolder', 'test.txt');
console.log(abs);
