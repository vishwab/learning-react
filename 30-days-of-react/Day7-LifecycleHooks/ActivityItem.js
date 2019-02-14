import React, { Component } from 'react';
import vishwaimg from './vishwa.jpg';

class ActivityItem extends React.Component {
	render() {
    const {activity} = this.props; // ES6 destructuring - Same as: const activity = this.props.activity;

		return(
      <div className="item">

        <div className="avatar">
          <img
          alt={activity.text}
          /* src={activity.user.avatar} /> */
          src={vishwaimg} />
          {activity.user.name}
        </div>

        <span className="time">
          {activity.timestamp}
        </span>
        <p>{activity.text}</p>
        <div className="commentCount">
          {activity.comments.length}
        </div>
      </div>
		)
	}
}

export default ActivityItem;