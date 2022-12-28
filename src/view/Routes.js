const morgan = require('morgan')
const express = require('express');
const cors = require('cors')

/* Importing the module. */
const router = require('../controller/router');
const auth = require('../controller/auth');

/* A middleware that checks if the user is authenticated. */
const { protect } = require('../modules/auth');

const app = express();
app.use(cors())

/* A middleware that logs all the requests to the console. */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to GREAT FOOD' });

})

app.use('/food/v1', protect, router);

app.use('/auth/v1', auth);


module.exports = app;