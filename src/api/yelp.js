const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const yelp = require('yelp-fusion');
const apiKey =
  '3hmawgfsAI-a4bmGS_7Krd9v-5pWZo2lazdGkjtlzU_OdmeqSblfgBskUQwI8oH0m0i_rivkQ6Fo91hJQcHCzYqfjGVQvywYuu3l3VxxaoltUcUrKN4norls-61TYXYx';
const client = yelp.client(apiKey);

app.use(cors());

app.get('/fuel', (req, res) => {
  client
    .search({
      location: req.query.city,
      term: 'restaurants',
    })
    .then((response) => {
      console.log(JSON.stringify(response.jsonBody));
      res.send(response.jsonBody.businesses);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = client;
