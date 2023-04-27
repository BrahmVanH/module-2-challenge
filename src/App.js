import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Creations from './components/pages/Creations';
import Contact from './components/Contact/index';
import Footer from './components/Footer';

export default function App() {
	const [currentPage, setCurrentPage] = useState('Home');

	const renderPage = () => {
		if (currentPage === 'Home') {
			return <Home />;
		}
		if (currentPage === 'Creations') {
			return <Creations />;
		}
		return <Contact />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div id='portfolioContainer'>
			<NavBar
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{renderPage()}
			<Footer />
		</div>
	);
}
