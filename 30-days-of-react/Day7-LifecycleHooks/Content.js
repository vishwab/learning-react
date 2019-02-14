import React, { Component } from 'react';
import ActivityItem from './ActivityItem';

import Footer from './Footer';

const data = require('./data.json');

class Content extends React.Component {
  constructor(props) {
    super(props);

    //state of vars that will be used in the Lifecyle of this component.
    this.state = { activities: [] };
    //this.state = { activities: [], data: [] };
  }

  refresh() {
    this.setState({ data: [{"name": "Abhi", "dob": "06/19"}] });
  }

  //onComponentRefresh() {
    //this.setState( { refreshing: false} );
  //}

	render() {
    const {activities} = this.props; // ES6 destructuring - Same as: const activity = this.props.activity;

		return(
          <div className="content">
            <center>
              <p>Data Area:</p>
              <b>
                My name is {data[0].name}<br />
                My MM/DD is {data[0].dob}
              </b>
            </center>

          	<div className="line"></div>

            {/* Timeline item */}
            {activities.map((activity) => (
                <ActivityItem
                  activity={activity} />
            ))} 

            <Footer>
              <button onClick={this.refresh.bind(this)}>
                <i className="fa fa-refresh" />
                Refresh
              </button>
            </Footer>

          </div>

		)
	}
}

export default Content;