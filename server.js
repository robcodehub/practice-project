const express = require('express');

const router = express.Router();

const path = require('path');

router.get('/', (res, req, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})
