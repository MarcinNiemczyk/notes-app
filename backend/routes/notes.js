const express = require('express');
const Note = require('../models/Note');
const notes = express.Router();

notes.get('/', async (req, res) => {
  res.json({ message: 'test' });
});

notes.post('/', async (req, res) => {
  const note = new Note({
    title: req.body.title,
  });

  try {
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = notes;
