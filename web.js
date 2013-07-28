var express = require('express');
var app = express();
app.use(express.logger());
	
var fs = require('fs');
var fileBuffer = fs.readFileSync('index.html');
var text = fileBuffer.toString('utf8',0,fileBuffer.length);

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
