
var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Index = require('./components/Index.jsx')
var Root = require('./components/Root.jsx')
var About = require('./components/About.jsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute name='index' handler={Index} />
    <Route name='about' path='/about' handler={About} />
  </Route>
)

module.exports = Routes
