const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const scoreRouter = require('./routes/scoreRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/scores', scoreRouter);
app.use('/users', userRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
