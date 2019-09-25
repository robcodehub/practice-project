const express = require('express');

const router = express.Router();

const path = require('path');

const app = express();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3005;

app.listen(port, ()=> console.log(`listening on port ${port}`));

