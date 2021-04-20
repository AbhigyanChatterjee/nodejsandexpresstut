const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/subFolder/first.txt', 'utf8');
const second = readFileSync('./content/subFolder/second.txt', 'utf8');

writeFileSync(
    './content/new-sync.txt',
    `This is the new file sync which include : ${first} , ${second}`,
    {flag : 'a'}
)
