const express = require('express');
const notes = express.Router();

notes.get('/', (req, res) => {
  res.json({ message: 'test' });
});

module.exports = notes;
