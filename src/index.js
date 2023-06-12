import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/bootstrap.min.css';
import './js/bootstrap.min.js';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from '../src/utils/reportWebVitals';
import ReactGA from 'react-ga';

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

