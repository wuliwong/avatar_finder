var React = require('react');
var classNames = require('classnames');
var SearchForm = require('./search_form.jsx');
var Avatar = require('./avatar.jsx');

var email = '';
var avatar = '';

module.exports = React.createClass({
    findAvatar: function (email) {
      var avatar = '';
      this.setState({email: 'joe@example.com', avatar: 'https://profile.microsoft.com/RegsysProfileCenter/Images/personal_info.jpg'});
    },

    getInitialState: function () {
      return {
          email: email,
          avatar: avatar
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
            <a className='headline' href='#'>Avatar Finder</a>
            <div className='content'>
              <SearchForm onClick={this.findAvatar} email={this.state.email} />
              <Avatar avatar={this.state.avatar} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});