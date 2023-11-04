import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button, FormLabel } from 'semantic-ui-react';
import Swal from 'sweetalert2';

// Import EmailJS for form support

function ContactForm() {
	const handleOnSubmit = (e) => {
		e.preventDefault();

		emailjs.sendForm(secrets.REACT_APP_EMAILJS_SERVICE_ID, secrets.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, secrets.REACT_APP_EMAILJS_PUBLIC_KEY).then(
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
