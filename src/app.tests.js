/**
 * Test file for the main router app
 * @author Arie M. Prasetyo (2020)
 */

const request = require('supertest');
const {assert} = require('chai');
const {equal} = assert;
const app = require('./app');

/**
 * Tests for each endpoint
 */
describe('Tests for main API router', () => {

  // test '/api/v2/course'
  it('should send back a JSON object', () => {
    request(app)
    .get('/api/v2/course')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
      equal(res.body.status, 'success');
    });
  });

});