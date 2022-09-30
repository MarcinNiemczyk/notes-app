const express = require('express');
const notesRoute = require('./routes/notes');
const router = express.Router();

router.use('/notes', notesRoute);

module.exports = router;
