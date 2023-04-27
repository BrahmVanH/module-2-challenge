import React from 'react';

export default function Home() {
	return (
		<div style={{padding: '20'}}>
			<header className='bg-dark'>
				<div className='container pt-4 pt-xl-5'>
					<div className='row pt-5'>
						<div className='col-md-8 col-xl-6 text-center text-md-start mx-auto'>
							<div className='text-center'>
								<h1 className='fw-bold'>Welcome</h1>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section
				className='py-5 d-flex justify-content-center'
				id='bioContainer'>
				<p
					className='d-flex w-75'
					style={{ padding: '5 5', fontSize: '1.25em' }}>
					I'm Brahm. I'm a Full-Stack developer with a history in human
					physiology, adventure sports, and skilled trades. I aspire to draw
					from my ever expanding experience as a human on earth to bring you
					polished, responsive web applications.
				</p>
			</section>
		</div>
	);
}
