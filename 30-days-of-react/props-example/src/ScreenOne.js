import React from 'react';
import Heading from './Heading';

export default class ScreenOne extends React.Component {
	render() {
		return (
			<div className="content">
				This message is Hard Coded in ScreenOne.
				<Heading message={'Hi from ScreenOne - This message is coming from props passed from ScreenOne to Heading class'} />
				<Heading />
			</div>
		)
	}
}