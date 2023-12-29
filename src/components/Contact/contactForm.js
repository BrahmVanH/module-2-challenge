import React from 'react';
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

// Import EmailJS for form support

function ContactForm() {
	const serviceId = 'service_lnxjo09';
	const templateId = 'template_enw06at';
	const publicKey = 'bh-E7v3RsFhe1yJ5-';
	const handleOnSubmit = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
			(result) => {
				console.log(result.test);
				Swal.fire({
					icon: 'success',
					title: 'Message Sent Successfully',
				});
			},
			(error) => {
				console.log(error.text);
				Swal.fire({
					icon: 'error',
					title: 'Something went wrong!',
					text: error.text,
				});
			}
		);
		e.target.reset();
	};

	return (
		<div className='contact-cards'>
			<Form onSubmit={handleOnSubmit}>
				<div className='mb-3'>
					<Form.Field id='form-input-control-last-name' control={Input} name='from_name' placeholder='Name' required icon='user_circle' iconPosition='left' />
				</div>
				<div className='mb-3'>
					<Form.Field id='form-input-control-email' className='email-text' control={Input} name='from_email' placeholder='Email Address' required icon='mail' iconPosition='left' />
				</div>
				<div className='mb-3'>
					<Form.Field id='form-textarea-control-opinion' control={TextArea} name='message' placeholder='Message' required />
				</div>
				<div>
					<Button className='btn btn-primary d-block w-100' type='submit'>
						Send
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default ContactForm;
