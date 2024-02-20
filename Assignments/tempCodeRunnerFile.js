
// // Read file in server Async
// var http= require('http');
// var fs=require('fs');
// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     fs.readFile('input.txt',function(err,data){
//         if(err){res.write(err);}
//         res.write("Asunchronous read: "+data.toString());
//     });
//     read.write("Program Done");
//     read.end();
// }).listen(5510);

