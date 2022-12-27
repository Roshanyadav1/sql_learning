const morgan = require('morgan')
const express = require('express');
const cors = require('cors')
const router = require('../controller/router');
const { hashPassword } = require('../modules/auth');

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

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    // const userExist = users.find((user) => user.email === email)


    const hashedPassword = await hashPassword(password)

    console.log("the hashed password is", hashedPassword);

    const userExist = false

    if (userExist) {
        res.status(400).json({ error: 'User already exist' })
    }
    res.status(200).json({ message: 'User created successfully' })
});


module.exports = app;