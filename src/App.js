import React, { Component } from 'react';
// import logo from './logo.svg';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Main from './Main'
import Login from './Login'


export default class App extends Component {
  state = {
    isLoggedIn : false
  }

  render(){
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
          </Switch>
        </Router>
      </div>
    );
  }
}


