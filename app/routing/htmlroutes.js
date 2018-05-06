console.log('HTML Connected');

// Node
var path = require('path');

// Both Routes
function htmlRoutes(app) {
  // GET ROUTE
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
  // USE ROUTE
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
}
// EXPORT to server.js
module.exports = htmlRoutes;