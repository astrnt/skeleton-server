/**
 * mysql configs
 * @author Arie M. Prasetyo (2020)
 */

let MYSQL_DB_TEST;
let MYSQL_PWD_TEST;
//During the test the env variable is set to test
if (process.env.NODE_ENV === 'test') {
  MYSQL_DB_TEST = 'astrnt_test_sample';
  MYSQL_PWD_TEST = 'testPASSWORD';
}

// MySQL configuration
const MYSQL_CONF = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'production') && process.env.MYSQL_PWD ? process.env.MYSQL_PWD : MYSQL_PWD_TEST,
  database: (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'production') ? 'astrnt_sample': MYSQL_DB_TEST,
  connectionLimit : 400
};

module.exports = {
  MYSQL_CONF
};