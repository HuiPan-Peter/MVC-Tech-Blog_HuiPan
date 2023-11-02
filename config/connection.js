const Sequelize = require('sequelize');
require('dotenv').config();

// sequelize object with .env config parameter used throughout app
// create connection to our tech_blog_db;
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
