import React, { useEffect, useRef } from 'react';
import gsap, { Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import weatherNowScreenshot from '../../images/aurora-borealis-screenshot.webp';
import captainsRentals from '../../images/captains_rentals-screenshot.webp';
import recipeMeScreenshot from '../../images/RecipeMe_screenshot.svg';
import myNotepadScreenshot from '../../images/My_Notepad_screenshot.svg';
import bteScreenshot from '../../images/BTE-text-editor-screenshot.png';
import cliReadmeScreenshot from '../../images/CLI-README-generator.jpg';
import eCommerceScreenshot from '../../images/eCommerce_back_end-screenshot.jpg';
import southShoreScreenshot from '../../images/ss-mech-svcs-screenshot-w-techs.webp';

import './Showcase.css';

import ReactGA from 'react-ga';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Showcase() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	const main = useRef();
	const smoother = useRef();

	useEffect(() => {
		gsap.fromTo(
			'.card',
			{
				opacity: 0,
			},
			{
				opacity: 1,
				y: 60,
				duration: 0.5,
				ease: Power1.easeIn,
				stagger: {
					amount: 1,
					grid: 'auto',
					from: 'center',
				},
			}
		);
		gsap.fromTo(
			'.showcase-header-box',
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.5,
				ease: Power1.easeIn,
			}
		);
	}, []);

	useEffect(() => {
		console.log("Welcome to my showcase! Here is a collection of the project's I have worked on solo or collaborated on with other developers.");
		console.log("Currently, you'll find a mix of front, back, and full-stack applications.");
	});
	return (
		<div id='smooth-wrapper' className='container d-flex flex-column align-items-center py-4 py-xl-5 justify-content-sm-center' ref={main}>
			<div id='smooth-content' className='row gy-4 row-cols-1 row-cols-md-2 w-100' style={{ maxWidth: '800' }}>
				<div className='col order-md-2'>
					<div className='card' data-speed='0.5'>
						<a target='_blank' rel='noopener noreferrer' href='https://lakesuperiorcaptains.com'>
							<img className='card-img d-block w-100' src={captainsRentals} alt='captains rentals app screenshot' />
							<div className='card-img-overlay text-center d-flex flex-column justify-content-end align-items-center p-4'>
								<div
									className='pt-2 px-3'
									style={{
										backgroundColor: 'rgb(128, 128, 128, 1)',
										borderRadius: '10px',
									}}>
									{' '}
									<h4>Captain Lakefront Rentals</h4>
									<p className='d-none d-sm-block'>A MERN Full-Stack Application that uses Apollo Graphql as the API layer and features dynamic image loading from AWS S3.</p>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className='col order-md-first'>
					<div className='card' data-speed='0.5'>
						<a target='_blank' rel='noopener noreferrer' href='https://southshoremechanical.services'>
							<img className='card-img d-block w-100' src={southShoreScreenshot} alt='south shore mechanical services company website' />
							<div className='card-img-overlay text-center d-flex flex-column justify-content-end align-items-center p-4'>
								<div
									className='pt-2 px-3'
									style={{
										backgroundColor: 'rgb(128, 128, 128, 1)',
										borderRadius: '10px',
									}}>
									{' '}
									<h4>South Shore Mechanical Services</h4>
									<p className='d-none d-sm-block'>Informational Gatsby SSG app for a contracting service. Built with Gatsby, Tailwind, Node, Express, MongoDb, and AWS Lambda.</p>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className=' showcase-header-box col d-md-flex order-first justify-content-md-center align-items-md-center order-md-1'>
					<div
						data-speed='0.5'
						className=' py-3 px-3'
						style={{
							width: '80%',
							backgroundColor: 'rgb(192, 192, 192, 0.15)',
							borderRadius: '16px',
						}}>
						<h2>Showcase</h2>
						<p className='d-none d-sm-block'>A collection of my front-end, back-end, and full-stack projects.</p>
					</div>
				</div>
				<div className='col order-md-2'>
					<div className='card' data-speed='0.5'>
						<a target='_blank' rel='noopener noreferrer' href='https://github.com/BrahmVanH/Command_Line_README'>
							<img className='card-img d-block w-100' src={cliReadmeScreenshot} alt='screenshot of command line based README generator application' />
							<div className='card-img-overlay text-center d-flex flex-column justify-content-end align-items-center p-4'>
								<div
									className='pt-2 px-3'
									style={{
										backgroundColor: 'rgb(128, 128, 128, 1)',
										borderRadius: '10px',
									}}>
									<h4>Command Line README Generator</h4>
									<p className='d-none d-sm-block'>Create professional REAEDME files from the command line.</p>
								</div>
							</div>
						</a>
					</div>
				</div>

				<div className='col order-md-2'>
					<div className='card' data-speed='0.5'>
						<a target='_blank' rel='noopener noreferrer' href='https://weatherborealis.com/'>
							<img className='card-img d-block w-100' src={weatherNowScreenshot} alt='weather now web application screenshot' />
							<div className='card-img-overlay text-center d-flex flex-column justify-content-end align-items-center p-4'>
								<div
									className='pt-2 px-3'
									style={{
										backgroundColor: 'rgb(128, 128, 128, 1)',
										borderRadius: '10px',
									}}>
									{' '}
									<h4>Weather Borealis</h4>
									<p className='d-none d-sm-block'>A sleek, easy to use weather application.</p>
								</div>
							</div>
						</a>
					</div>
				</div>

				<div className='col order-md-2'>
					<div className='card' data-speed='0.5'>
						<a target='_blank' rel='noopener noreferrer' href='https://recipeme-recipe-logger.herokuapp.com/'>
							<img className='card-img d-block w-100' src={recipeMeScreenshot} alt='recipeMe online recipe book application screenshot' />
							<div className='card-img-overlay text-center d-flex flex-column justify-content-end align-items-center p-4'>
								<div
									className='pt-2 px-3'
									style={{
										backgroundColor: 'rgb(128, 128, 128, 1)',
										borderRadius: '10px',
									}}>
									<h4>RecipeMe</h4>
									<p className='d-none d-sm-block'>A customizable, web-based recipe book.</p>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className='col order-md-2'>
					<div className='card' data-speed='0.5'>
						<a target='_blank' rel='noopener noreferrer' href='https://github.com/BrahmVanH/eCommerce_Back-end'>
							<img className='card-img d-block w-100' src={eCommerceScreenshot} alt='screenshot of a heroku demo of eCommerce back-end application' />
							<div className='card-img-overlay text-center d-flex flex-column justify-content-end align-items-center p-4'>
								<div
									className='pt-2 px-3'
									style={{
										backgroundColor: 'rgb(128, 128, 128, 1)',
										borderRadius: '10px',
									}}>
									<h4>eCommerce Back-end</h4>
									<p className='d-none d-sm-block'>Server-side data handling for eCommerce using MySql </p>
								</div>
							</div>
						</a>
					</div>
				</div>
				<div className='col order-md-2'>
					<div className='card' data-speed='0.5'>
						<a target='_blank' rel='noopener noreferrer' href='https://text-editor-pwa-vanhouzen.herokuapp.com/'>
							<img className='card-img d-block w-100' src={bteScreenshot} alt='just another text editor application screen shot' to='https://text-editor-pwa-vanhouzen.herokuapp.com/' />
							<div className='card-img-overlay text-center d-flex flex-column justify-content-end align-items-center p-4'>
								<div
									className='pt-2 px-3'
									style={{
										backgroundColor: 'rgb(128, 128, 128, 1)',
										borderRadius: '10px',
									}}>
									{' '}
									<h4>Basic Text Editor</h4>
									<p className='d-none d-sm-block'>A basic text editor designed with offline-first functionality in mind.</p>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Showcase;
