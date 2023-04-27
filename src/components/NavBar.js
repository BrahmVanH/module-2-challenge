import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
	return (
		<nav
			className='navbar navbar-dark navbar-expand-md sticky-top py-3'
			id='mainNav'
			style={{ background: 'var(--bs-body-bg)' }}>
			<div className='container'>
				<a
					className='navbar-brand d-flex align-items-center'
					href='/'></a>
				<button
					data-bs-toggle='collapse'
					className='navbar-toggler'
					data-bs-target='#navcol-1'>
					<span className='visually-hidden'>Toggle navigation</span>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navcol-1'
					style={{ transform: 'translate(-191)' }}>
					<ul className='navbar-nav mx-auto'>
						<li className='nav-item'>
							<a
								className='nav-link active'
								onClick={() => handlePageChange('Home')}>
								<span style={{ fontWeight: 'normal !important' }}>Home</span>
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								onClick={() => handlePageChange('Creations')}>
								Creations
							</a>
						</li>
						<li className='nav-item'>
							<a
								href={
									process.env.PUBLIC_URL +
									'/pdf/Brahm_vanhouzen_developer-resume.pdf'
								}
								target='blank'
								rel='noopener noreferrer'
								className='nav-link'>
								Resume
							</a>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								onClick={() => handlePageChange('Contact')}>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className='d-flex flex-wrap flex-column'>
					<span>Brahm Van Houzen</span>
					<span id='subtitle'>Full-Stack Developer</span>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
