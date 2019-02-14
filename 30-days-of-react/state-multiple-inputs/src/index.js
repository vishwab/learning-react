import React from 'react';
import ReactDOM from 'react-dom';

import ReservationForm from './ReservationForm';

export const load = () => {
	
	ReactDOM.render(<ReservationForm />, document.getElementById('mutliInputForm'));

};

try {
	load();
} catch (e) {}
