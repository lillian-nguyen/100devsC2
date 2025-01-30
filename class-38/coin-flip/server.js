const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        })
    } else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        })
    }
    else if (page == '/api') {
        if ('guess' in params) {
            if (params['guess']) {

                res.writeHead(200, { 'Content-Type': 'application/json' });
                const flipResult = Math.ceil(Math.random() * 2) === 1 ? 'heads' : 'tails';

                const objToJson = {
                    result: flipResult
                }
                res.end(JSON.stringify(objToJson))
            }
        }
    }
})

server.listen(8000);