import React, { useEffect, useRef } from 'react';
import gsap, { Power1 } from 'gsap';

import ContactCard from './contactInformation';
import ContactForm from './contactForm'

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
		<div className='contact-container d-flex justify-content-center row align-items-center'>
			<ContactForm />
			<ContactCard />
		</div>
	);
}
