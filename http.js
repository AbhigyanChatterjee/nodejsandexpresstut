const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to homepage!!');
    }
    if(req.url === '/about') {
        res.end('This is the about page');
    }
    else {
        res.end(`
        <h1>Oops!!</h1>

        <p>Found nothing</p>
        <a href = '/'> Back Home</a>
        `);
    }
    // console.log(req);
    // res.write('Welcome to homepage!!');
    // res.end();
});

server.listen(5000);