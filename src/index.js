import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/bootstrap.min.css';
import './js/bootstrap.min.js';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
