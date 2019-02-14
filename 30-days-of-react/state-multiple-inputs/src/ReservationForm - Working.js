import React from 'react';

export default class ReservationForm extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			isGoing: true,
			numberOfGuests: 2
		};
	}

	handleInputChange(event) {
		const target = event.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({

			/*
			 * Below code is ES6. This is equivalent to ES5 code:
			 		var partialState = {};
					partialState[name] = value;
					this.setState(partialState);
			*/
			[name]: value
		});
	} 

	render() {

		return(
			<form>
				<label>
					Is going:
					<input
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleInputChange} />
				</label>
				<br />
				<label>
					Number of guests:
					<input
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleInputChange} />
				</label>
			</form>
		);
	}
}