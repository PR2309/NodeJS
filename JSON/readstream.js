var fs=require("fs");
var data='';
//Create a readable stream
var reader=fs.createReadStream('text.txt');
//Set the encoding to be UTF-8
read.setEncoding('UTF8');
//Handle stream vents --> data, end, and error
reader.on('data',function(chunk){data=chunk;});
reader.on('end',function(chunk){console.log(data);});
reader.on('error',function(err){console.log('Error: '+err);});