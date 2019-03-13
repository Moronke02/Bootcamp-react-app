import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={SignUp}/>
        </div>
      </Router>
    );
  }
}

export default App;
