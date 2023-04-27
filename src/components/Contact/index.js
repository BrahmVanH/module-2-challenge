import React from 'react';
import ContactCard from './contactInformation';
import ContactForm from './contactForm'

export default function Contact() {
	return (
		<div className='d-flex justify-content-center row align-items-center'>
			<ContactForm />
			<ContactCard />
		</div>
	);
}
