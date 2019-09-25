const express = require('express');

const router = express.Router();

router.get('/', (res, req, next) => {
  res.sendFile(__dirname, 'index.html');
})
