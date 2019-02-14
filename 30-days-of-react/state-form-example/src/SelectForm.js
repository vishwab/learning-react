import React from 'react';

export default class SelectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState( {value: event.target.value} );
	}

	handleSubmit(event) {
		//alert("value is " + this.state.value);

		if (this.state.value === '' || this.state.value === 'No-Fruit')
			alert("Please pick a Fruit");
		else
			alert("I love " + this.state.value);
	
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick your favorite Fruit: 
				</label>
				<p></p>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="No-Fruit">Pick a Fruit</option>
					<option value="Apple">Apple</option>
					<option value="Banana">Banana</option>
					<option value="Mango">Mango</option>
				</select>
				<br />
				<input type="submit" value="Submit" />
			</form>
		)
	}
}