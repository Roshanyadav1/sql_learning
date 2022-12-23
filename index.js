const app = require('./src/view/Routes');

require('dotenv').config()
const sql = require('mssql/msnodesqlv8')

const config = {
    database: process.env.DATABASE_NAME,
    server: 'HELLO🍀\\SQLSERVER',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
}


sql.connect(config, function (err) {
    if (err) console.log("From 1", err)

    console.log("Connected database at ", config.server)
 
})


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000');
});




