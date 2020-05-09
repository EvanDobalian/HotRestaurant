var express = require('express');
var path = require('path');

// Setting up the Express app
var app = express();
// var port = process.env.PORT || 3000;
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Data array for reserve info
var data = [];

// Routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
  });
  
  app.get('/table', function(req, res) {
    res.sendFile(path.join(__dirname, 'table.html'));
  });
  
  app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'));
  });
  
  app.post('/api/tables', function(req, res) {
    var reservation = req.body;

    console.log(reservation);
    data.push(reservation);
    res.json(reservation);
  });
  
  app.get('/api/waitlist', function(req, res) {
    return res.json(data);
  });
  
  app.listen(port, function() {
    console.log("I'm listening on PORT " + port);
  });