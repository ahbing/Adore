import React from 'react';
import { browserHistory, Router, Route, IndexRoute} from 'react-router';
import Main from './containers/main';
import Home from './containers/home';
import Photo from './containers/photo';
import About from './containers/about';
import NoMatch from './components/404';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home}/>
      <Route path="photo" component={Photo}/>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
);
