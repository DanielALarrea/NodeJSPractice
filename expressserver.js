var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/expressindex.html', function (req, res) {
   res.sendFile( __dirname + "/" + "expressindex.html");
})

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port

//    console.log("Example app listening at http://%s:%s", host, port)
// })

// app.get('/', function(req, res) {
//     console.log("Got a GET request for the homepage")
//     res.send('Hello GET');
// })

// app.post('/', function(req, res) {
//     console.log("Got a POST request for the homepage")
//     res.send('Hello POST');
// })

// app.delete('/del_user', function(req, res) {
//     console.log("Got a DELETE request for /del_user")
//     res.send('Hello DELETE');
// })

// app.get('/list_user', function(req, res) {
//     console.log("Got a GET request for /list_user")
//     res.send('Page Listing');
// })

// app.get('/ab*cd', function(req, res) {
//     console.log("Got a GET request for /ab*cd")
//     res.send('Page Pattern Match');
// })

// var server = app.listen(8081, function() {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log("Example app listening at http://%s:%s", host, port);
// })