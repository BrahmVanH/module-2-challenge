import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import weatherNowScreenshot from '../../images/weathernow_screenshot.png';
import recipeMeScreenshot from '../../images/RecipeMe_screenshot.svg';
import myNotepadScreenshot from '../../images/My_Notepad_screenshot.svg';
import bteScreenshot from '../../images/BTE-text-editor-screenshot.png';
import cliReadmeScreenshot from '../../images/CLI-README-generator.jpg';
import eCommerceScreenshot from '../../images/eCommerce_back_end-screenshot.jpg';
import '../../styles/Creations.css';

function Showcase() {
	return (
		<div className='container d-flex flex-column align-items-center py-4 py-xl-5'>
			<div
				className='row gy-4 row-cols-1 row-cols-md-2 w-100'
				style={{ maxWidth: '800' }}>
				<div className='col order-md-first'>
					<div className='card'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://my-notepad.herokuapp.com/'>
							<img
								className='card-img d-block w-100'
								src={myNotepadScreenshot}
								alt='my notepad web application screenshot'
							/>
							<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
								<h4>My notepad</h4>
								<p>A simple note taking application.</p>
							</div>
						</a>
					</div>
				</div>
				<div className='col d-md-flex order-first justify-content-md-center align-items-md-center order-md-1'>
					<div style={{ width: '80%' }}>
						<h2>Showcase</h2>
						<p>
							A collection of my front-end, back-end, and full-stack projects.
						</p>
					</div>
				</div>
				<div className='col order-md-2'>
					<div className='card'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/BrahmVanH/Command_Line_README'>
							<img
								className='card-img d-block w-100'
								src={cliReadmeScreenshot}
								alt='screenshot of command line based README generator application'
							/>
							<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
								<h4>Command Line README Generator</h4>
								<p>Create professional REAEDME files from the command line.</p>
							</div>
						</a>
					</div>
				</div>
				<div className='col order-md-2'>
					<div className='card'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://recipeme-recipe-logger.herokuapp.com/'>
							<img
								className='card-img d-block w-100'
								src={recipeMeScreenshot}
								alt='recipeMe online recipe book application screenshot'
							/>
							<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
								<h4>RecipeMe</h4>
								<p>A customizable, web-based recipe book.</p>
							</div>
						</a>
					</div>
				</div>

				<div className='col order-md-2'>
					<div className='card'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/BrahmVanH/eCommerce_Back-end'>
							<img
								className='card-img d-block w-100'
								src={eCommerceScreenshot}
								alt='screenshot of a heroku demo of eCommerce back-end application'
							/>
							<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
								<h4>eCommerce Back-end</h4>
								<p>Server-side data handling for eCommerce using MySql </p>
							</div>
						</a>
					</div>
				</div>
				<div className='col order-md-2'>
					<div className='card'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://brahmvanh.github.io/Weather-Forecast/'>
							<img
								className='card-img d-block w-100'
								src={weatherNowScreenshot}
								alt='weather now web application screenshot'
							/>
						</a>
						<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
							<h4>WEATHERNOW</h4>
							<p>A sleek, easy to use weather application.</p>
						</div>
					</div>
				</div>
				<div className='col order-md-2'>
					<div className='card'>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://text-editor-pwa-vanhouzen.herokuapp.com/'>
							<img
								className='card-img d-block w-100'
								src={bteScreenshot}
								alt='just another text editor application screen shot'
								to='https://text-editor-pwa-vanhouzen.herokuapp.com/'
							/>
							<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
								<h4>Basic Text Editor</h4>
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

export default Showcase;
