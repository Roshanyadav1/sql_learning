const { Router } = require('express');
const sql = require('mssql/msnodesqlv8')
const moment = require('moment')

const router = Router();

// menu routes
router.get('/menu', (req, res) => {
    res.send('menu')
})

// order routes
router.get('/order', (req, res) => {
    res.send('order')
})


// user routes
router.get('/user', (req, res) => {
    // create Request object
    let request = new sql.Request()
    try {
        request.query('SELECT * FROM [testdatabase].[dbo].[student]', function (err, recordset) {
            if (err) console.log("From 19", err)
            res.send({ recordset: recordset.recordset });
        })

    } catch (error) {
        res.send("Error")
    }

})

router.put('/updateUser/:id', (req, res) => {
    const { firstName, lastName, DOB, Department } = req.body

    // create Request object
    let request = new sql.Request()
    try {
        request.query(`UPDATE [testdatabase].[dbo].[student] SET firstname = '${firstName}', lastname = '${lastName}', DOB = '${DOB}', Department = '${Department}' WHERE StudentId = ${req.params.id}`,
            function (err, recordset) {
                if (err) res.send({ error: err })

                console.log("Updated user successfully");

                request.query(`SELECT * FROM [testdatabase].[dbo].[student] WHERE StudentId = ${req.params.id}`)
                    .then((recordset) => {
                        res.send({ data: recordset.recordset })
                    })
            })

    } catch (error) {
        req.send({ error: error })
    }

})


router.post('/addUser', (req, res) => {

    const { firstName, lastName, DOB, Department } = req.body

    // create Request object
    let request = new sql.Request()
    try {
        /* Inserting data into the database. */
        request.query(`INSERT INTO [testdatabase].[dbo].[student] (firstname, lastname, DOB, Department) VALUES ( 
            '${firstName}', '${lastName}', '${DOB}', '${Department}' )`, function (err, recordset) {
            if (err) res.send({ error: error })

            console.log("Added user successfully");

            request.query(`SELECT * FROM [testdatabase].[dbo].[student] WHERE firstname = '${firstName}'`)
                .then((recordset) => {
                    res.send({ data: recordset.recordset })
                })
        })

    } catch (error) {
        res.send({ error: error })
    }

})








module.exports = router;