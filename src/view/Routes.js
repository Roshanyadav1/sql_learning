
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
    res.status(200).json({ message: 'from the sql database' });

})

app.use('/food/v1', router);


module.exports = app;