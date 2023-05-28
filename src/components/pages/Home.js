import React from 'react';
import weatherNowScreenshot from '../../images/weathernow_screenshot.png';
import recipeMeScreenshot from '../../images/RecipeMe_screenshot.svg';
import bteScreenshot from '../../images/BTE-text-editor-screenshot.png';

function Home() {
	return (
		<div className='container d-flex flex-column align-items-center py-4 py-xl-5'>
			<div className='row mb-5'>
				<div className='col-md-8 col-xl-6 text-center mx-auto'>
					<h2>Welcome</h2>
				</div>
			</div>
			<div className='row gy-4 w-100' style={{ maxWidth: '800' }}>
				<div className='col-12'>
					<div className='card'>
						<img className='card-img w-100 d-block' src={recipeMeScreenshot} />
						<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
							<div
								className='pt-2 px-3'
								style={{
									backgroundColor: 'rgb(128, 128, 128, .8)',
									borderRadius: '10px',
								}}>
								<h4>RecipeMe</h4>
								<p>A customizable, web-based recipe book.</p>
							</div>
						</div>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='card'>
						<img
							className='card-img w-100 d-block'
							src={weatherNowScreenshot}
						/>
						<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
							<h4>WEATHERNOW</h4>
							<p>A sleek, easy to use weather application.</p>
						</div>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='card'>
						<img className='card-img w-100 d-block' src={bteScreenshot} />
						<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
							<h4>Basic Text Editor </h4>
							<p>
								A basic text editor designed with offline-first functionality in
								mind.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
