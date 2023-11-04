import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function ContactCard() {
	return (
		<div className='contact-cards d-flex'>
			<div>
				<ul style={{ listStyleType: 'none' }}>
					<li className='list-item'>
						<a href='mailto:brahm@brahmvanhouzen.studio'>
							<MdEmail /> Email
						</a>
					</li>
					<li className='list-item'>
						<a href='https://github.com/BrahmVanH'>
							<FaGithub /> GitHub
						</a>
					</li>
					<li className='list-item'>
						<a href='https://www.linkedin.com/in/brahmvanhouzen/'>
							<FaLinkedin /> LinkedIn
						</a>
					</li>
					<li className='list-item'>
						<a href='https://www.instagram.com/instabrahm__/'>
							<FaInstagram /> Instagram
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ContactCard;
