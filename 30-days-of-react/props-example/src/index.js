import React from 'react';
import ReactDOM from 'react-dom';

import ScreenOne from './ScreenOne';

export const load = () => {
	
	ReactDOM.render(<ScreenOne />, document.getElementById("root"));

};

try {
	load();
} catch (e) {}