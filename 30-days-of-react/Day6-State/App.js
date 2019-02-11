import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

/* Master Wrapper Component called App that will hold other components  */
class App extends Component {

  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <center><b>30 Day React Vishwa Test App, Day 6, State</b></center>
          <Clock />
        </div>
      </div>
    )
  }
}

export default App;