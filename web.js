var express = require('express'), 
	fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var output = new Buffer(fs.readFileSync('index.html'));
	response.send(output.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});