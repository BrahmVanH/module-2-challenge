import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap, { Power1 } from 'gsap';

function NavBar() {
	const navbar = useRef();

	useEffect(() => {
		gsap.fromTo(
			'#mainNav',
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.5,
				ease: Power1.easeIn,
			}
		);
	}, []);

	return (
		<nav
			ref={navbar}
			className='navbar navbar-dark navbar-expand-md sticky-top py-3'
			id='mainNav'
			style={{ cursor: 'pointer', background: 'var(--bs-body-bg)' }}>
			<div className='flex-nowrap container'>
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
							<Link className='nav-link active' to='/'>
								<span style={{ fontWeight: 'normal !important' }}>Home</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/showcase'>
								Showcase
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/resume' target='blank' className='nav-link'>
								Resume
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about' target='blank'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contact' target='blank'>
								Contact
							</Link>
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
