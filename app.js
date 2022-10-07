const express = require('express');
const port = process.env.PORT || 3000

const bodyParser = require('body-parser');
const app = express();
const { json } = require('body-parser');


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//default GET request
app.get(['/', '/health'], function (req, res) {
  res.send('live streaming service is up');


});






app.listen(port, async function () {






  console.log(`live streaming is up ${process.env.NODE_ENV}`);









});