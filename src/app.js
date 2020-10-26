/**
 * backend REST API server, main application file
 * @author Arie M. Prasetyo (2020)
 */

const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
//
const CategoryModel = require('./models/category');

// connect to mysql
const {MYSQL_CONF} = require('./config');
const mysqlPool = mysql.createPool(MYSQL_CONF);
if (mysqlPool) console.log('Connected to the MySQL');

/**
 * Main server app
 * serves API's to interact with the database
 */
const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// = = = = = = = = API ENDPOINTS = = = = = = = =
/**
 * default API endpoint
 */
app.get('/', (_, res) => {
  res.json({msg: `This is API server. Format "/api/v1/<collection name>"`});
});

/**
 * 
 */
app.get('/api/v1/categories', (_, res) => CategoryModel.retrieve(mysqlPool, res));

/**
 * 
 */
app.post('/api/v1/category', (req, res) => CategoryModel.create(req.body, mysqlPool, res));

/**
 * 
 */
app.put('/api/v1/category', (req, res) => CategoryModel.update(req.body, mysqlPool, res));

// export app
module.exports = app;

// EOF