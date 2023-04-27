import React from 'react';

function ContactForm() {
	return (
		<div className='p-sm-5 col-3' >
			<h2 className='text-center mb-4'>Contact me</h2>
			<form method='post'>
				<div className='mb-3'>
					<input
						id='name-2'
						className='form-control'
						type='text'
						name='name'
						placeholder='Name'
					/>
				</div>
				<div className='mb-3'>
					<input
						id='email-2'
						className='form-control'
						type='email'
						name='email'
						placeholder='Email'
					/>
				</div>
				<div className='mb-3'>
					<textarea
						id='message-2'
						className='form-control'
						name='message'
						rows='6'
						placeholder='Message'></textarea>
				</div>
				<div>
					<button
						className='btn btn-primary d-block w-100'
						type='submit'>
						Send{' '}
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
