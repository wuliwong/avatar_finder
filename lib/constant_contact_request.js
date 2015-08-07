var request = require('request');

var constantContactRequest = function(email, callback) {
  var url = 'https://api.fullcontact.com/v2/person.json?apiKey=98c64aa40c12a09d&email=' + email;
  console.log('requesting url: ', url);
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      bodyJSON = JSON.parse(body);
      if (bodyJSON && bodyJSON['photos'] && bodyJSON['photos'][0])
      callback(JSON.parse(body)['photos'][0].url);
    } else {
      callback(null)
    }
  })
};

module.exports.constantContactRequest = constantContactRequest;
