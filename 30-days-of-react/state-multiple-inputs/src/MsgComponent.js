import React from 'react';
import PropTypes from 'prop-types';


export default class MsgComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="content">
				{this.props.message}
			</div>
		);
	}
}

MsgComponent.propTypes = {
	message: PropTypes.String
}

MsgComponent.defaultProps = {
	message: 'Please pick how many guests are going or not.'
}
