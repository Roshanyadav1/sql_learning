let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yaduvanshi@11',
    database: 'roshandb'
});


module.exports = connection;