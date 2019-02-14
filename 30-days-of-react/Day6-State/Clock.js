import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = this.getTime();
	}

	// Below was the key Lifecycle method to have the clock keep ticking!!!
	componentDidMount() {
		this.setTimer();
	}

	// Another Lifecycle method, this is perhaps when this component is about to be removed
	componentWillUnmount() {
		if (this.timeout) {
		  clearTimeout(this.timeout);
		}
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
		// clearTimeout and setTimeout are native JS functions
		clearTimeout(this.timeout);

		/* 
		 * Below, we are using native JS setTimeout() function.
		 * In it we are using the local updateClock() function and binding it to this
		 * This will be triggered after every 1000 ms (or 1 sec)
		 *
		 * Since updateClock() is the event that provides the constantly updated time
		 *   we are binding that function to this setTimer function (which is then used
		 *   in componentDidMount() to display the time)
		 */
		this.timeout = setTimeout(this.updateClock.bind(this), 1000);
	}

	updateClock() {
		/*Below sets the current time with the first call 
		 * and then updates it with the 2nd.
		 *
		 * NOTICE THAT setTimer and updateClock kinda call each other in a loop every 1 sec.
		 */
		this.setState(this.getTime, this.setTimer);

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