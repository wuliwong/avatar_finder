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
          <img src={this.props.avatar} />
        </div>
      )
  }
});