var express = require('express');
var router = express.Router();
var constantContactRequest = require('../lib/constant_contact_request').constantContactRequest;

/* GET image listing. */
router.get('/', function(req, res, next) {
  var email = req.query.email;
  constantContactRequest(email, function(avatar) {
    console.log("avatar result", avatar);
    if (avatar) {
      res.send({email: email, avatar: avatar});
    } else {
      res.send({error: 'no results'});
    }
  });
});

module.exports = router;