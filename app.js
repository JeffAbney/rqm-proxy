var express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.get('/', (req, res) => {
  res.send("PROXY SERVER UP IN HERE!!!")
  // request(
  //     { url: 'https://quotesondesign.com/wp-json/wp/v2/posts?filter[orderby]=rand' },
  //     (error, response, body) => {
  //         if (error || response.statusCode !== 200) {
  //             return res.status(500).json({ type: 'error', message: err.message });
  //         }
  //         console.log("here's body", body)
  //         res.send(body);
  //     }
  // )
});

module.exports = app;
