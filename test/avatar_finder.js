
// var should = require('should'),
//     supertest = require('supertest');

//     var assert = require("assert")
// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     });
//   });
// });

var request = require('supertest');

var app = require('../app');

describe('Landing page', function() {
  it("renders successfully", function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('/avatar', function() {
  it("renders successfully", function(done) {
    request(app)
      .get('/avatar?email=none')
      .expect(200, done);
  });
});