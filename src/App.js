import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Showcase from './components/pages/Showcase';
import Contact from './components/Contact/index';
import About from './components/pages/About';
import Footer from './components/Footer';
import Resume from './components/pages/Resume'
import ReactGA from 'react-ga';

export default function App() {

	  useEffect(() => {
			ReactGA.pageview(window.location.pathname + window.location.search);
		}, []);

	

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/showcase' element={<Showcase />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</Router>
	);
}
