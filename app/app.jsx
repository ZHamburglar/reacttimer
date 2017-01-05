// render and getDefaultProps method come with react and get automatically called by the library
// there are two types of data in a component : props, state  -  a component isnt allowed to update its own props but is allowed to update its own state
// State = this.state

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');




// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();


// load css
require ('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
