import React from 'react';
import ReactDOM from 'react-dom';

import ShoppingList from './ShoppingList';

export const load = () => {
	
	ReactDOM.render(<ShoppingList />, document.getElementById('shoppingList'));

};

try {
	load();
} catch (e) {}
