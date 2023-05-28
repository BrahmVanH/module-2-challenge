import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Creations from './components/pages/Creations';
import Contact from './components/Contact/index';
import About from './components/pages/About';
import Footer from './components/Footer';

export default function App() {
	return (
		<div id='portfolioContainer'>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/creations' element={<Creations />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/about' element={<About />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}
