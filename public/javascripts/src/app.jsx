//---start requiring things
var React = require('react');
var Content= require('./content.jsx');
var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
//---end requiring things

React.render(
    <Content />,
    document.getElementById('mount')
);