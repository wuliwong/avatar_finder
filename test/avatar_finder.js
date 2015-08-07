
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
var should = require('should');

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
      .get('/avatar')
      .expect(200, done);
  });

  it("returns an error when no avatar is found", function(done) {
    request(app)
      .get('/avatar?email=none')
      .expect(200).end(function(err, res) {
        res.body.should.have.property('error');
        done();
      });
  });

  it("returns an avatar and the email address when avatar is found", function(done) {
    request(app)
      .get('/avatar?email=patrickbradley777@gmail.com')
      .expect(200).end(function(err, res) {
        res.body.should.have.property('avatar');
        res.body.should.have.property('email');
        done();
      });
  });
});