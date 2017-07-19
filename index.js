
var express = require('express'),

  app = express(),
  port = process.env.PORT || 3333,
  bodyParser = require('body-parser');

console.log("Api is starten on port: " + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/weatherRoutes');
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
