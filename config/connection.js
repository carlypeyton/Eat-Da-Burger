//Dependencies
const mysql = require('mysql');
var connection; 

//Create connection to database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'burger_db',
  });
};

//Connect to database and log thread ID
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

//Export connection
module.exports = connection;