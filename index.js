const app = require('./src/view/Routes');
const connection = require('./src/db/conn')
require('dotenv').config()


// start the connection
connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000');
});
