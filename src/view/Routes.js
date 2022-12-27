
const morgan = require('morgan')
const express = require('express');
const cors = require('cors')
const router = require('../controller/router');

const app = express();
app.use(cors())
/* A middleware that logs all the requests to the console. */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to GREAT FOOD' });

})

app.use('/food/v1', router);

app.use('/signup', (req, res) => {
    res.send("signup")
});


module.exports = app;