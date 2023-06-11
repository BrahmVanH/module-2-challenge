import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

function NavBar() {
	return (
		<Navbar
			className='navbar-dark navbar-expand-md sticky-top py-3'
			id='mainNav'
			style={{ cursor: 'pointer', background: 'var(--bs-body-bg)' }}>
			<div className='flex-nowrap container'>
				<Navbar.Toggle
					data-bs-toggle='collapse'
					className='navbar-toggler'
					data-bs-target='#navcol-1'>
					<span className='visually-hidden'>Toggle navigation</span>
					<span className='navbar-toggler-icon'></span>
				</Navbar.Toggle>
				<Nav className='mr-auto'>
					<NavDropdown
						className='collapse navbar-collapse'
						id='navcol-1'
						style={{ transform: 'translate(-191)' }}>
						<NavDropdown.Item className='nav-item'>
							<Link className='nav-link active' to='/'>
								<span style={{ fontWeight: 'normal !important' }}>Home</span>
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item className='nav-item'>
							<Link className='nav-link' to='/showcase'>
								Showcase
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item className='nav-item'>
							<Link to='/resume' target='blank' className='nav-link'>
								Resume
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item className='nav-item'>
							<Link className='nav-link' to='/about' target='blank'>
								About
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item className='nav-item'>
							<Link className='nav-link' to='/contact' target='blank'>
								Contact
							</Link>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<div className='d-flex flex-wrap flex-column'>
					<span>Brahm Van Houzen</span>
					<span id='subtitle'>Full-Stack Developer</span>
				</div>
			</div>
		</Navbar>
	);
}

export default NavBar;
