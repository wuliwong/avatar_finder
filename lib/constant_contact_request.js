var request = require('request');

var constantContactRequest = function(email, callback) {
  console.log('in dis beast', process.env);
  var url = 'https://api.fullcontact.com/v2/person.json?apiKey=' + process.env.CONSTANT_CONTACT + '&email=' + email;
  console.log('requesting url: ', url);
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('statusCode: 200');
      bodyJSON = JSON.parse(body);
      if (bodyJSON && bodyJSON['photos'] && bodyJSON['photos'][0]) {
        callback(bodyJSON['photos'][0].url);
      } else {
        console.log('No photo in response', response);
        callback(undefined);
      }
    } else {
      console.log('Error', response.statusCode, error);
      callback(undefined);
    }
  })
};

module.exports.constantContactRequest = constantContactRequest;
