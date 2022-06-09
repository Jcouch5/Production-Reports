// Import sequelize
const Sequelize = require('sequelize');
// require dotenv file
require('dotenv').config();
// initialize sequelize
let sequelize;

// if using jawsdb find url from there
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // else get name, user, and password from the dotenv file
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
