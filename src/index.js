const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello this is express practice.')
});

app.listen(3434, () => {
  console.log('Example app listening on port 3434');
});