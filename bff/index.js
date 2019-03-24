const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.route('/')
  .get((req, res) => {
    res.send('I am going to be an awesome backend for frontend :)');
    return;
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT);
