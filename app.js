var express = require('express');
const app = express();

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
