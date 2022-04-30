const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.APP_PORT;

app.get('/', async (req, res) => res.sendStatus(200));

app.get('/microservice-two', (req, res) => {
  res.json({
    resource: 'MICROSERVICE-TWO',
    data: {
      fieldOne: "valueOne",
      fieldTwo: "valueTwo"
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`microservice-two is listening on ${port}`)
});
