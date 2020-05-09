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

