import mysql from 'mysql';
import config from '#root/config';

const connection = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_NAME
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.info(` 
  ################################################
  🚀 Connected to the Database 🚀
  ################################################
  `);
});

export default connection;
