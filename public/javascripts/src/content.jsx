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
    findAvatar: function () {
      var inputEmail = document.querySelector('.input').value;
      var theUrl = '/avatar?email=' + inputEmail;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false );
      xmlHttp.send( null );

      var response = JSON.parse(xmlHttp.response);

      if (response.error) {
        this.setState({email: response.email, error: response.error, avatar: ''});
      } else {
        this.setState({email: response.email, avatar: response.avatar, error: undefined});
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
    console.log('email', this.state.email);
    console.log('avatar', this.state.avatar);

    var emailPresent = this.state.email == '' ? false : true;
    var wrapperClasses = classNames({
      'main-wrapper': true,
      'compact': emailPresent
    });
    return (
      <div className={wrapperClasses}>
        <div className='container'>
          <div className='row text-center'>
            <a className='headline' href='/'>Avatar Finder</a>
            <div className='content'>
              <SearchForm onClick={this.findAvatar} email={this.state.email} />
              <Avatar avatar={this.state.avatar} />
              <NoResults error={this.state.error} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});