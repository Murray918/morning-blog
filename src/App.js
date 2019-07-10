import React, { Component } from 'react';
// import logo from './logo.svg';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Main from './Main'
import Login from './Login'
import ProtectedRoute from './Login/ProtectedRoute'


export default class App extends Component {
  state = {
    isLoggedIn : false
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true })
  }

  render(){
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute 
            path="/main" 
            isLoggedIn={this.state.isLoggedIn} 
            component={Main} />
          </Switch>
        </Router>
      </div>
    );
  }
}


