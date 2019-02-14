import React from 'react';
import PropTypes from 'prop-types';

export default class Heading extends React.Component {

	/* 
	 * Example of props - Message is passed into this component and it cannot be changed
	 
	 * Many Headings can be created by passing whatever message from the Parent.
	 *
	 */
	render() {
		return (
			<div className="content">
				{this.props.message}
			</div>
		)
	}
}

Heading.propTypes = {
	message: PropTypes.String
}

Heading.defaultProps = {
	message: 'Default Heading one - This is a default message present in Heading class itself and is displayed when no message is passed to Heading Class'
}