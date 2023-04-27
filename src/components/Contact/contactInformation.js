import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function ContactCard() {
	return (
    <div className='col-2 d-flex'>
        <div >
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
				</ul>
			</div>
		</div>
	);
}

export default ContactCard;
