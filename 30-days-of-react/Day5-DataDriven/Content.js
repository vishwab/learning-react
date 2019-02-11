import React, { Component } from 'react';
import ActivityItem from './ActivityItem';

class Content extends React.Component {
	render() {
    const {activities} = this.props; // ES6 destructuring - Same as: const activity = this.props.activity;

		return(
          <div className="content">
          	<div className="line"></div>

            {/* Timeline item */}\
            {activities.map((activity) => (
                <ActivityItem
                  activity={activity} />
            ))}          	
          </div>
		)
	}
}

export default Content;