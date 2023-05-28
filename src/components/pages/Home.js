import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import weatherNowScreenshot from '../../images/weathernow_screenshot.png';
import recipeMeScreenshot from '../../images/RecipeMe_screenshot.svg';
import bteScreenshot from '../../images/BTE-text-editor-screenshot.png';

function Home() {

	useEffect(() => {
		console.log("Hello! My name's Brahm (with a short 'a' sound), thanks for stopping by my website.");
		console.log("Although my background labels me as a scientist of sports physiology, my passions and worldview have me striving to explore far outside the confines of human biology. My endeavors have include commercial SCUBA diving, ultra endurance mountain biking, electrical installation, and now web and app development. My goal is to produce polished, well-planned, and beautiful products to share with the world.")
		console.log("Here are a few of the projects I've worked on. You can find the rest of my showcase by following the 'Showcase' button in the navbar.");
		console.log("You can find my professional resume by following the 'Resume' button in the navbar");
	})
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
						<a
							href='https://recipeme-recipe-logger.herokuapp.com/'
							target='_blank'
							rel='noopener noreferrer'>
							<img
								className='card-img w-100 d-block'
								src={recipeMeScreenshot}
							/>
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
						</a>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='card'>
						<a
							href='https://brahmvanh.github.io/Weather-Forecast/'
							target='_blank'
							rel='noopener noreferrer'>
							<img
								className='card-img w-100 d-block'
								src={weatherNowScreenshot}
							/>
							<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
								<h4>WEATHERNOW</h4>
								<p>A sleek, easy to use weather application.</p>
							</div>
						</a>
					</div>
				</div>
				<div className='col-12 col-md-6'>
					<div className='card'>
						<a
							href='https://text-editor-pwa-vanhouzen.herokuapp.com/'
							target='_blank'
							rel='noopener noreferrer'>
							<img className='card-img w-100 d-block' src={bteScreenshot} />
							<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
								<h4>Basic Text Editor </h4>
								<p>
									A basic text editor designed with offline-first functionality
									in mind.
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
