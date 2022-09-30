const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Initial commit' });
});

app.listen(3001);
