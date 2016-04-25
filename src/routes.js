import React from 'react';
import { browserHistory, Router, Route, IndexRoute} from 'react-router';
import Main from './containers/main';
import Home from './containers/home';
import Music from './containers/music';
import Blog from './containers/blog';
import Story from './containers/story';
import Photo from './containers/photo';
import About from './containers/about';
import NoMatch from './containers/404';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="music" component={Music}/>
      <Route path="blog" component={Blog}/>
      <Route path="story" component={Story}/>
      <Route path="photo" component={Photo}/>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
);
