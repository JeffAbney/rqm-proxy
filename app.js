var express = require('express');
var request = require('request');
var rp = require('request-promise-native');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.get('/', (req, res) => {
  let options = {
    url: 'https://quotesondesign.com/wp-json/wp/v2/posts?filter[orderby]=rand',
    json: true
  }
  rp(
      options,
      (error, response, body) => {
          if (error || response.statusCode !== 200) {
              return res.status(500).json({ type: 'error', message: err.message });
          }
          res.json(body);
      }
  )
});

module.exports = app;
