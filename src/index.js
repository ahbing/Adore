import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

const App = React.createClass({
  render: function(){
    return (
      <p>index</p>
    )
  }
})

const About = React.createClass({
 render: function(){
   return (
     <i>about</i>
   )
 }
})


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
  </Router>
  , document.getElementById('root'))

