import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import '../styles/Footer.css';

function Footer() {
	return (
		<div className='footer bg-dark'>
			<div className='container py-2 py-lg-3'>
				<div className='text-muted d-flex justify-content-between align-items-center'>
					<ul className='list-inline mb-1'>
						<li className='list-inline-item'>
							<a href='mailto:brahm@brahmvanhouzen.studio'>
								<MdEmail />
							</a>
						</li>
						<li className='list-inline-item'>
							<a href='https://www.linkedin.com/in/brahmvanhouzen/'>
								<FaLinkedin />
							</a>
						</li>
						<li className='list-inline-item'>
							<a href='https://github.com/BrahmVanH'>
								<FaGithub />
							</a>
						</li>
						<li className='list-inline-item'>
							<a href='https://www.instagram.com/instabrahm__/'>
								<FaInstagram />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Footer;
