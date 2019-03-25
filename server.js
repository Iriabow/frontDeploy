const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
var sslRedirect = require('heroku-ssl-redirect');
let app = express();
app.use(sslRedirect(), serveStatic(__dirname + "/dist"));

app.get('/', function(req, res){
  res.send('hello world');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});

