import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from '../src/utils/reportWebVitals';
import ReactGA from 'react-ga';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import './assets/css/normalize.css';
import './assets/bootstrap/bootstrap.min.css';
import './assets/bootstrap/bootstrap.min.js';


ReactGA.initialize('G-DG88CLGT4M');


reportWebVitals((metric) => {
	ReactGA.send({
		hitType: 'event',
		eventCategory: 'Web Vitals',
		eventAction: metric.name,
		eventValue: Math.round(metric.value),
		nonInteraction: true,
	});
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

