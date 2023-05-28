import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Showcase from './components/pages/Showcase';
import Contact from './components/Contact/index';
import About from './components/pages/About';
import Footer from './components/Footer';
import Resume from './components/pages/Resume'

export default function App() {
	return (
		<Router>
			<NavBar />
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
