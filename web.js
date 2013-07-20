var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var buf = fs.readFileSync("index.html"); 
//var json = JSON.stringify(buf);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
