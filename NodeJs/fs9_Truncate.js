var fs= require('fs');
var  buf= new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt','r+',function(err,fd){
    if(!err) {return console.error(err);}
    console.log("File  opeed Sucessfully");
    console.log("Going to Truncate the file after 10 bytes.");
    // truncating a file
    fs.truncate(fd,10,function(err){
        if(err){console.log(err);}
        console.log("File truncated sucessfully.");
        console.log("Going to read the same file...");
        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if (err) {console.log(err);}
            if(bytes>0){console.log(buf.slice(0,bytes).toString());}
            fs.close(fd,function(err){
                if(err){console.log(err);}
                console.log("File closed sucessfully.");
            });
        });
    });
});