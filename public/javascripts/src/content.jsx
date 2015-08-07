var React = require('react');
var classNames = require('classnames');
var SearchForm = require('./search_form.jsx');
var Avatar = require('./avatar.jsx');
var NoResults = require('./no_results.jsx');

//initial state variables
var email = '';
var avatar = '';
var error = undefined;

module.exports = React.createClass({
  validateEmail: function(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
  },

  findAvatar: function (e) {
    e.preventDefault();
    var inputEmail = document.querySelector('.input').value;
    if(inputEmail != '') {
      if (this.validateEmail(inputEmail)) {
        var theUrl = '/avatar?email=' + inputEmail;
        var xhr = new XMLHttpRequest();
        xhr.open( "GET", theUrl, true );
        var that = this;
        xhr.onload = function (e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              var response = JSON.parse(xhr.response);

              if (response.error) {
                that.setState({email: response.email, error: response.error, avatar: ''});
              } else {
                that.setState({email: response.email, avatar: response.avatar, error: undefined});
              }
            } else {
              console.error(xhr.statusText);
            }
          }
        };
        xhr.onerror = function (e) {
          console.error(xhr.statusText);
        };
        xhr.send( null );
      } else {
        this.setState({email: '', avatar: '', error: 'Please provide a valid email address.'})
      }
    }
  },

  getInitialState: function () {
    return {
        email: email,
        avatar: avatar,
        error: error
    }
  },

  render: function() {
    var resultPresent = (this.state.email == '' && this.state.error == undefined) ? false : true;
    var wrapperClasses = classNames({
      'main-wrapper': true,
      'compact': resultPresent
    });
    return (
      <div>
        <div className={wrapperClasses}>
          <div className='container'>
            <div className='row text-center'>
              <a className='headline' href='/'>Avatar Finder</a>
              <div className='content col-lg-12 col-xs-12'>
                <SearchForm onClick={this.findAvatar} email={this.state.email} />
                <Avatar avatar={this.state.avatar} />
                <NoResults error={this.state.error} />
              </div>
            </div>
          </div>
        </div>
        <div className='spacer'>
        </div>
        <div className='container-fluid'>
          <div className='footer row text-center'>
            <p>
              Made with Soul in Atlanta &#169;2015 by <a href='http://twitter.com/patrickjbradley'>@patrickjbradley</a>
            </p>
         </div>
      </div>
    </div>
    )
  }
});