import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

/* Master Wrapper Component called App that will hold other components  */
class App extends Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          30 Day React Vishwa Test App
          <Header title="Timeline by Vishwa" />
          <Header title="Profile" />
          <Header title="Settings" />
          <Header title="Chat" />
          <Content />
        </div>
      </div>
    )
  }
}

export default App;