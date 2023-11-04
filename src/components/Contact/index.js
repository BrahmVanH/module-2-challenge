import React, { useEffect, useRef } from 'react';
import gsap, { Power1 } from 'gsap';

import ContactCard from './contactInformation';
import ContactForm from './contactForm';

import '../../styles/Contact.css';

export default function Contact() {
	useEffect(() => {
		gsap.from(
			'.contact-container',

			{
				opacity: 0,
				y: 60,
				duration: 1,
				ease: Power1.easeIn,
			}
		);
	}, []);
	return (
		<div className='contact-card-container d-flex justify-content-center w-100'>
			<div className='col-lg-6 contact-card d-flex justify-content-center row align-items-center'>
				<h2 className='text-center mb-4'>Contact me</h2>
				<div className='d-flex flex-row justify-content-center align-items-center'>
					<ContactForm />
					<ContactCard />
				</div>
			</div>
		</div>
	);
}
