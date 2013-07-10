var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var out = fs.readFileSync('index.html');
var display = out.toString();

app.get('/', function(request, response) {
  response.send(display);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
