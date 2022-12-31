const mysql = require('mysql2');

exports.pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'db_gaji17',
    waitForConnections:true,
    connectionLimit:50,
    queueLimit:0
})
