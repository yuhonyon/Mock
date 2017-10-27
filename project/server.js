var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = 5555;

app.get('/status', function internalStaus(req, res){
  res.send('API server running.');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.send(200);
});

app.get('/patient/?id/?id', function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  res.status(200);
  res.send('{    "id": 223,    "patientId": 118,    "point": 1,    "value": 7.9,    "measureTime": 1484718885000,    "devId": "A12345678",    "remark": ""}');
});



server.listen(port, function () {
    console.log('API is available at: http://localhost:' + port);
});

