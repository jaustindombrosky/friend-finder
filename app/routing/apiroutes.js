var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var apiRoutes = require('./app/routing/api-routes.js');
var htmlRoutes = require('./app/routing/html-routes.js');
var app = express();
var PORT = process.env.PORT || 8080;