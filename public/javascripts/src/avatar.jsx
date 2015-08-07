var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
  render: function() {
    var avatarPresent = this.props.avatar == '' ? false : true;
    var wrapperClasses = classNames({
      'avatar-wrapper': true,
      'hidden': !avatarPresent
    });
      return (
        <div className={wrapperClasses}>
          <h3 className='avatar-text text-center'>We found an avatar.</h3>
          <img className='thumbnail center-block img-responsive' src={this.props.avatar} />
        </div>
      )
  }
});