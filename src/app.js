/**
 * backend REST API server, main application file
 * @author Arie M. Prasetyo (2020)
 */

const mysql = require('mysql');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

// Models
const ReportModel = require('./models/report');

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
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// logging configuration
if (process.env.NODE_ENV !== 'test') app.use(morgan('tiny'));

// = = = = = = = = API ENDPOINTS = = = = = = = =
/**
 * default API endpoint
 */
app.get('/', (_, res) => {
  res.json({msg: `This is API server. Format "/api/v2/<collection name>"`});
});


// - - - - - - - - API for report - - - - - - - -
/** add a report entry */
app.post('/api/v2/report', (req, res) => ReportModel.add(req.body, mysqlPool, res));

/** retrieve a report entries */
app.get('/api/v2/report', (_, res) => ReportModel.retrieve(mysqlPool, res));

/** edit a report entry */
app.put('/api/v2/report', (req, res) => ReportModel.edit(req.body, mysqlPool, res));

/** remove a report entry */
app.delete('/api/v2/report', (req, res) => ReportModel.remove(req.body, mysqlPool, res));


// - - - - - - - - API for student - - - - - - - -
/** retrieve a student entries */
app.get('/api/v2/student', (_, res) => {
  res.json({
    status: "success",
    message: "This is a sample respond"
  });
});

// - - - - - - - - API for course - - - - - - - -
/** retrieve a course entries */
app.get('/api/v2/course', (_, res) => {
  res.json({
    status: "success",
    message: "This is a sample respond"
  });
});

// - - - - - - - - API for question - - - - - - - -
/** retrieve a question entries */
app.get('/api/v2/question', (_, res) => {
  res.json({
    status: "success",
    message: "This is a sample respond"
  });
});

// export app
module.exports = app;
// EOF