var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
  render: function() {
    var errorPresent = this.props.error ? true : false;
    var wrapperClasses = classNames({
      'no-results-wrapper': true,
      'display-none': !errorPresent
    });
      return (
        <div className={wrapperClasses}>
          <h3 className='no-results-text'>{this.props.error}</h3>
        </div>
      )
  }
});