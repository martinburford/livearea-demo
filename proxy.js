// Big Commerce REST API fetch: http://localhost:3000/corsProxy?url=https://api.bigcommerce.com/stores/gpiw17bnmw/v3/catalog/products

const express = require('express');
const request = require('request');

// Spin up an Express server
const app = express();

// Ensure the allow origin policy is loosened
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Catch requests, in order to fetch the requested url
app.get('/corsProxy', (req, res) => {
  console.log(`/corsProxy requested on port ${PORT}, url=${req.query.url}`);

  // Which API endpoint has been requested?
  const urlToFetch = req.query.url;

  request({
    headers: { 
      "X-Auth-Token": "a2iuhtb71dld85wjrzdxi023x3s8y2h" 
    },
    url: urlToFetch
  }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: 'error', message: err.message });
    }

    res.json(JSON.parse(response.body));
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

