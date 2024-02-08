var fs = rewquire("fs");
var data="This is node.js class";
// Create a writable  stream
var writer=fs.createWriteStream('text.txt');
// Write the dat to stream with encoding to be utf8
writer.write(data,'UTF8');
// Mark the end of file
writer.end();
// Handle stream events --> finish and error
writer.on("finish",function(){
    console.log("Write completed.");
});

writer.on( "error", function(){
    console.log(err);
});