var React = require('react');
var SearchForm = require('./search_form.jsx');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');

React.render(
    <SearchForm />,
    document.getElementById('mount')
);