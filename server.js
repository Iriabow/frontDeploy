const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
var fs = require('fs')
var https = require('https')

let app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

