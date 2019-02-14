import React from 'react';
import ReactDOM from 'react-dom';

import NameForm from './NameForm';
import SelectForm from './SelectForm';

export const load = () => {

	ReactDOM.render(<NameForm />, document.getElementById('nameForm'));

	ReactDOM.render(<SelectForm />, document.getElementById('selectForm'));

};

try {
	load();
} catch (e) {}