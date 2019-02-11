import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);

		// getTime() is native JS function
		this.state = this.getTime();
	}

	getTime() {
		const currentTime = new Date();
		return {
			hours: currentTime.getHours(),
			minutes: currentTime.getMinutes(),
			seconds: currentTime.getSeconds(),
			ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
		}
	}

	setTimer() {
		// clearTimeout and setTimeout are native JS function
		clearTimeout(this.timeout);

		/* 
		 * Below are using native JS setTimeout() function.
		 * In it we are using the local updateClock() function and binding it to this
		 * This will be triggered after every 1000 ms (or 1 sec)
		 */
		this.timeout = setTimeout(this.updateClock.bind(this), 1000);
	}

	updateClock() {
		const currentTime = new Date();
		this.setState({
			currentTime: currentTime
		}, this.setTimer);

	}

	render() {
		const {hours, minutes, seconds, ampm} = this.state;
		return (
			<div className="clock">
				<center>
				{
					hours == 0 ? 12 :
						(hours > 12) ?
							hours - 12: hours
				}:{
					// Note: it is back-tick and not single quote
					minutes > 9 ? minutes : `0${minutes}`
				}: {
					// Another way of adding leading zeros or not technique
					seconds > 9 ? seconds : ("00" + seconds).slice(-2)
				} {ampm}
				</center>
			</div>
		)
	}
}

export default Clock;