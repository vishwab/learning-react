import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import VishwaTest from './VishwaTest';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';

export const load = () => {

	ReactDOM.render(<App />, document.getElementById('root'));

	ReactDOM.render(<VishwaTest />, document.getElementById('vishwaTest'));

	ReactDOM.render(<Footer />, document.getElementById('footer'));
};

try {
  load();
} catch (e) {}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
