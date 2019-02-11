import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import vishwaimg from './vishwa.jpg';

 const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1, name: 'Vishwa',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Ari', text: 'Me too!' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: 'Vishwa',
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Finished Day 5 of 30 day React Tutorial",
    user: {
      id: 3, name: 'Vishwa',
      avatar: 'vishwaimg'
    },
    comments: [{ from: 'Vishwa', text: 'I am satisfied' }]
  }
];

//const activities = require('json!./data.json');


/* Master Wrapper Component called App that will hold other components  */
class App extends Component {

  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          30 Day React Vishwa Test App Day 5, Data Driven
          <Header title="Timeline by Vishwa" />
          <Header title="Profile" />
          <Header title="Settings" />
          <Header title="Chat" />
          <Content activities={activities}/>
        </div>
      </div>
    )
  }
}

export default App;