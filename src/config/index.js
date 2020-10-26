/**
 * mysql configs
 * @author Arie M. Prasetyo (2020)
 */

// MySQL configuration
const MYSQL_CONF = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: process.env.MYSQL_PWD ? process.env.MYSQL_PWD : 'password',
  database: 'astrnt_sample',
  connectionLimit : 400
};

module.exports = {
  MYSQL_CONF
};