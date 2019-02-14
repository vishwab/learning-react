import React from 'react';
import MsgComponent from './MsgComponent';

export default class ReservationForm extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			isGoing: true,
			numberOfGuests: 2
		};

		this.handleSubmit.bind(this);
		this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		/*
		 * Below code is ES6. This is equivalent to ES5 code:
		 		var partialState = {};
				partialState[name] = value;
				this.setState(partialState);
		*/
		this.setState({
			[name]: value
		});
	} 

	handleSubmit(event) {
		alert("Number of Guests: " + this.state.numberOfGuests);
		alert("Is Going? " + this.state.isGoing);
		event.preventDefault();
	}
	render() {

		/*
		 * VERY IMPORTANT:
		 		NOTICE this.handleSubmit.bind(this) is called.
		 		This is needed, since I am using ES6 class syntax, which means I lose the
		 		auto-binding feature that createClass provided in ES5.
		 		If I don't do a bind, I will get below error:
		 			Unable to get property 'setState' of undefined or null reference
		 */
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>

				<MsgComponent message={'Number of guests going: ' + this.state.numberOfGuests} />
				
				<label>
					Is going:
					<input
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange.bind(this)} />
				</label>
				<br />
				<label>
					Number of guests:
					<input
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange.bind(this)} />
				</label>
				<br />
				<input type="submit" value="Submit" />
			</form>
		);
	}
}