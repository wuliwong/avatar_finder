var React = require('react');

module.exports = React.createClass({
  render: function() {
      return (
        <div className='row search-form-wrapper text-center'>
          <span className='subheading'>Enter an email address and we will search for a corresponding avatar image.</span>
          <br /><br />
          <input type='email' className='input input-lg col-lg-8 col-lg-offset-1 col-xs-8' name='email' placeholder='yourname@example.com' defaultValue={this.props.email} />
          <a href='#' onClick={this.props.onClick} className='col-lg-2 col-xs-4 btn btn-lg btn-default'>Find image</a>
        </div>
      )
  }
});