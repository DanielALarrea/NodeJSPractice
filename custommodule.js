var http = require('http');
var dt = require('./nested/datetime');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.customDateTime(1));
    res.end
}).listen(8080);