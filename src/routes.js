import React from 'react';
import { browserHistory, Router, Route} from 'react-router';
import Home from './components/home';
import About from './components/about';
import NoMatch from './components/noMatch';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="about" component={About}/>
    <Route path="*" component={NoMatch}/>
  </Router>
);
