var http = require('http');
var uc = require('upper-case');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text'})
}).losten(8000);