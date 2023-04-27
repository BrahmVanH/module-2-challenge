import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import Creations from './pages/Creations';
import Contact from './Contact/index';
import Footer from './Footer';

export default function PortfolioContainer() {
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
