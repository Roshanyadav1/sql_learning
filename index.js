const app = require('./src/view/Routes');
const shceduler = require('node-cron');

require('dotenv').config()
const sql = require('mssql/msnodesqlv8')

const config = {
    database: "testdatabase",
    server: 'HELLO🍀\\SQLSERVER',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
}


/* Connecting to the database. */
sql.connect(config, function (err) {
    if (err) console.log("error from 18", err)
    console.log("Connected to database" + config.database + " on " + config.server)

})

// shceduler.schedule('* * * * * *', () => {
//     console.log('running a task every day');
// });


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000');
});




