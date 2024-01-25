/* Basics
~> NodeJS = Runtime Enviroment + Library
~> Event driven: at the time of bootinh we initial micro krenel (only call that which is needed) keep the rest of it as it is untouched.
~> Node Js is asyncronous serever programing
~> there are 2 types of node js codes: (i) Console based(used in terminal) & (ii) Web based (used on browser)
*/
/* Extra
~> It uses V8 engine to run JavaScript code
~> Event-Driven Programming (EDP)
~> Non Blocking I/O model
Modules in nodejs:
1. Builtin Modules : fs, path, http etc..
2. Third Party Modules : express, mongoose, socket.io etc...
3. User Defined Modules
Process Object:
~> process object gives us information about the current running process
~> process.argv : array of command line arguments passed while starting the server
~> process.cwd() : returns the Current Working Directory
~> process.env : an object containing the user environment variables
~> process.exit([code]) : terminate or close the process with specified exit code(default is 0)
How to create a Server in NodeJs?
var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){});
server.listen(port);
Inside Listen function:
~> req object represents the request made by client

*/


/*var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    // 处理请求，返回响应数据
    res.end('Hello, World!!!');
}).listen(8080);
// write localhost:8080 on browser to work

// console.error(new Error(''))

/*console.log("Compilation Error");
console.log("Runtime Error");
console.error("Error");
console.warn("Waring");*/

