const { readFile, writeFile } = require('fs');

readFile('./content/subFolder/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err.message);
        return;
    }
    //calback hell possible request to use promises
    else console.log(result);
});

