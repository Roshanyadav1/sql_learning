const app = require('./src/view/Routes');
require('dotenv').config()

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yaduvanshi@11',
    database: 'roshandb'
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000');
});
