var express = require('express');
var router = express.Router();
var constantContactRequest = require('../lib/constant_contact_request').constantContactRequest;
if (process.env.REDISTOGO_URL) {
    var rtg   = require("url").parse(process.env.REDISTOGO_URL);
    var redis = require("redis").createClient(rtg.port, rtg.hostname);

    redis.auth(rtg.auth.split(":")[1]);
} else {
    var redis = require("redis").createClient();
}

/* GET avatar. */
router.get('/', function(req, res, next) {
  var email = req.query.email;
  redis.get(email, function(err, reply) {
    if (reply) {
      //first check redis for avatar
      console.log('found email-avatar pair in redis', reply);
      res.send({email: email, avatar: reply});
    } else {
      //if not in redis, search constant contact for avatar
      constantContactRequest(email, function(avatar) {
        if (avatar) {
          redis.set(email, avatar, function(err, reply) {
            console.log('new redis email-avatar pair set', email, avatar, reply);
          });
          res.send({email: email, avatar: avatar});
        } else {
          res.send({error: 'We could not find an avatar image. Please try another email address.'});
        }
      });
    }
  });
});

module.exports = router;