var express = require('express');
var app = express();
app.use(express.static('public'));
// Get the form values
app.get('naming.html', function (req, res) {
    // Display the HTML page with a form to get user input
    res.sendfile(__dirname + "/" + "naming.html");
});
// Post the form values and display the result
app.get('/process_get', function(req,res){
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name    };
});
console.log(response);
res.end(JSON.stringify(response)); 

//Post request from HTML page using superagent
var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s",host,port)
});