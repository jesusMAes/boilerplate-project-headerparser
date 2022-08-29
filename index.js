// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get("/api/whoami", (req,res) => {
  let headers = req.headers
  let ip = req.get('x-forwarded-for');
  let language = req.get('accept-language');
  let agent = req.get('user-agent')
  console.log(ip)
  res.json({ipaddress: ip, language:language, software: agent})
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


//THINGS TO DO
//first of all create the route
//this exercise is a header parser, its similar to the previous but this time is just create the rute and extract the info from the header, for that I just have to use req.headers and then extract the neccesary info, first I'll going to console.log all the header and then ill select the neccesary header, I need IP, language, and software