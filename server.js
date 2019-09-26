const express = require('express');

const router = express.Router();

const path = require('path');

const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/feature1', (req, res, next) => {
  res.sendFule(path.join(__dirname, 'feature1.html');
})


const port = process.env.PORT || 3005;

app.listen(port, ()=> console.log(`listening on port ${port}`));

