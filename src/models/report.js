/**
 * model-controller for Report table
 * @author Arie M. Prasetyo
 * @copyright 2020
 * @module MySQL
 */

/**
 * create a new category entry
 * @param {*} report_name name of the report
 * @param {*} student_id id of student
 * @param {*} pool mysql pooled connection
 * @param {*} res Express respond object
 */
const add = ({report_name, student_id}, pool, res) => {
  const query = `INSERT INTO report (report_name, student_id) VALUES ('${report_name}', '${student_id}')`;

  pool.query(query, (err, rst) => {
    if (err) throw err;
    res.json({status: 'success', affectedRows: rst.affectedRows});
  });
};

/**
 * retrieve report entries
 * @param {*} pool 
 * @param {*} res 
 */
const retrieve = (pool, res) => {
  const query = `SELECT id, report_name, student_id FROM report`;

  pool.query(query, (err, rows) => {
    if (err) throw err;
    res.json({
      status: 'success',
      payload: rows
    });
  });
};

/**
 * update report entries
 * @param {*} id id of report
 * @param {*} report_name name of the report
 * @param {*} student_id id of student
 * @param {*} pool 
 * @param {*} res 
 */
const edit = ({id, report_name, student_id}, pool, res) => {
  const query = `UPDATE report SET report_name='${report_name}', student_id='${student_id}' WHERE id = ${id}`;

  pool.query(query, (err, rst) => {
    if (err) throw err;
    res.json({status: 'success', affectedRows: rst.affectedRows});
  });
};

/**
 * delete report entry
 * @param {*} id id of report
 * @param {*} pool 
 * @param {*} res 
 */
const remove = ({id}, pool, res) => {
  const query = `DELETE FROM report WHERE id = ${id}`;

  pool.query(query, (err, rst) => {
    if (err) throw err;
    res.json({status: 'success', affectedRows: rst.affectedRows});
  });
};



// export module
module.exports = {
  add,
  retrieve,
  edit,
  remove
};