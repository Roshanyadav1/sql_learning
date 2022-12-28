const { Router } = require('express');
const { hashPassword, comparePassword, createJWT, protect } = require('../modules/auth');
const sql = require('mssql/msnodesqlv8')
const moment = require('moment')

const auth = Router();

// A new user can sign up with a username, email and password.
auth.post('/signup', async (req, res) => {
    const { user_name, email, password } = req.body
    const request = new sql.Request()

    /* Hashing the password. */
    const hashedPassword = String(await hashPassword(password))
    const token = await createJWT(req.body)

    try {
        const { recordset } = await request.query(`SELECT * FROM [testdatabase].[dbo].[user] WHERE email = '${email}'`)
        if (recordset.length > 0) res.status(400).json({ error: "User already exist" })
        else {
            await request.query(`INSERT INTO [testdatabase].[dbo].[user] (user_name, email, password) VALUES ('${user_name}', '${email}', '${hashedPassword}')`)
            res.status(200).json({ message: 'User added successfully', token: token })
        }

    } catch (err) {
        res.status(400).json({ error: "from catch department" })
    }
});

// A user can sign in with their email and password.
auth.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const request = new sql.Request()

    try {
        const { recordset } = await request.query(`SELECT * FROM [testdatabase].[dbo].[user] WHERE email = '${email}'`)

        if (recordset.length > 0) {
            const isMatch = await comparePassword(password, recordset[0].password)
            if (isMatch) {
                const token = await createJWT(req.body)
                res.status(200).json({ message: `Hello ! ${recordset[0].user_name}`, token: token })
            }
            else res.status(400).json({ error: "Password is wrong" })
        }
        else res.status(400).json({ error: "User not found" })

    } catch (err) {
        res.status(400).json({ error: "Something went wrong" })
    }

});



module.exports = auth;