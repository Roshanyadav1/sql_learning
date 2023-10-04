// const app = require('./src/view/Routes');
// require('dotenv').config()

// let mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'yaduvanshi@11',
//     database: 'roshandb'
// });

// connection.connect(function (err) {
//     if (err) {
//         return console.error('error: ' + err.message);
//     }
//     console.log('Connected to the MySQL server.');
// });


// app.listen(process.env.PORT || 3000, () => {
//     console.log('Server is listening on port 3000');
// });


/////////////////////
const app = require('./src/view/Routes');

require('dotenv').config()
const sql = require('mssql/msnodesqlv8')

const config = {
    server: 'localhost',
    password: 'yaduvanshi@11',
    database: 'roshandb',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
}


sql.connect(config, function (err) {
    if (err) console.log("From 1", err)
    else console.log("Connected database at ", config.server)

})


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000');
});




