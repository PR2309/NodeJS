const http = require('http');

const server = http.createServer((request, response) => {
    switch (request.method) {
        case 'GET':
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('GET request received');
            break;
        case 'POST':
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('POST request received');
            break;
        default:
            response.writeHead(405, { 'Content-Type': 'text/plain' });
            response.write('Method not allowed');
            break;
    }

    response.end();
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});