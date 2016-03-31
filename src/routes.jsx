import React from 'react';
import { browserHistory, Router, Route, Link, Redirect } from 'react-router';
import Home from './components/home/home';
import About from './components/about/about';
import NoMatch from './components/noMatch/noMatch';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="about" component={About}/>
    <Route path="*" component={NoMatch}/>
  </Router>
)

