import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap, { Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import { Link } from 'react-router-dom';

import weatherNowScreenshot from '../../images/aurora-borealis-screenshot.webp';
import captainsRentals from '../../images/captains_rentals-screenshot.webp';
import recipeMeScreenshot from '../../images/RecipeMe_screenshot.svg';
import bteScreenshot from '../../images/BTE-text-editor-screenshot.png';
import { restProperty } from '@babel/types';
import './Home.css';

import ReactGA from 'react-ga';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Home() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	const main = useRef();
	const smoother = useRef();
	const projectDisplay = useRef();
	const welcomeMessageRef = useRef();

	useEffect(() => {
		gsap.fromTo(
			'.welcome-message',
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
		gsap.from('.project-display', {
			y: '100%',
			duration: 1,
			stagger: 0.2,
			ease: 'power1.inOut',
		});
	}, []);

	// useLayoutEffect(() => {
	// 	const ctx = gsap.context(() => {
	// 		// create the smooth scroller FIRST!
	// 		smoother.current = ScrollSmoother.create({
	// 			smooth: 2, // seconds it takes to catch up to native scroll position
	// 			effects: true, // look for data-speed and data-lag attrivutes on elements and animate accordingly
	// 		});
	// 	}, main);
	// 	return () => ctx.revert();
	// }, []);

	useEffect(() => {
		console.log("Hello! My name's Brahm (with a short 'a' sound), thanks for stopping by my website.");
		console.log(
			'Although my background labels me as a scientist of sports physiology, my passions and worldview have me striving to explore far outside the confines of human biology. My endeavors have include commercial SCUBA diving, ultra endurance mountain biking, electrical installation, and now web and app development. My goal is to produce polished, well-planned, and beautiful products to share with the world.'
		);
		console.log("Here are a few of the projects I've worked on. You can find the rest of my showcase by following the 'Showcase' button in the navbar.");
		console.log("You can find my professional resume by following the 'Resume' button in the navbar");
	});
	return (
		<div ref={main} id='smooth-wrapper'>
			<div id='scroll-content' className='d-flex flex-column align-items-center'>
				<div className='row'>
					<div className='text-center mx-auto'>
						<h1 className='welcome-message'>Welcome</h1>
					</div>
				</div>

				<div className='row w-100'>
					<div data-speed='0.8' style={{ overflow: 'hidden' }} className='col-12'>
						<div ref={projectDisplay} className='project-display card'>
							<a href='http://lakesuperiorcaptains.com/' target='_blank' rel='noopener noreferrer'>
								<img data-scroll className='card-img w-100 d-block' src={captainsRentals} />
								<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
									<div
										className='pt-2 px-3'
										style={{
											backgroundColor: 'rgb(128, 128, 128, 1)',
											borderRadius: '10px',
										}}>
										<h4>Captains Lakefront Rentals</h4>
										<p>A brochure-style web app for vacation rentals.</p>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div data-speed='0.8' style={{ overflow: 'hidden' }} className='my-2 col-12 col-md-6'>
						<div ref={projectDisplay} className='project-display card'>
							<a href='https://brahmvanh.github.io/Weather-Forecast/' target='_blank' rel='noopener noreferrer'>
								<img data-scroll className='card-img w-100 d-block' src={weatherNowScreenshot} />
								<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-start p-4'>
									<div
										className='pt-2 px-3'
										style={{
											backgroundColor: 'rgb(128, 128, 128, .8)',
											borderRadius: '10px',
										}}>
										<h4>Weather Borealis</h4>
										<p>A sleek, easy to use weather application.</p>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div data-speed='0.8' style={{ overflow: 'hidden' }} className='my-2 col-12 col-md-6'>
						<div ref={projectDisplay} className='project-display card'>
							<a href='https://text-editor-pwa-vanhouzen.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
								<img alt='basic text editor screenshot' data-scroll className='card-img w-100 d-block' src={bteScreenshot} />
								<div className='card-img-overlay text-center d-flex flex-column justify-content-center align-items-center p-4'>
									<div
										className='pt-2 px-3'
										style={{
											backgroundColor: 'rgb(128, 128, 128, .8)',
											borderRadius: '10px',
										}}>
										<h4>Basic Text Editor </h4>
										<p>A basic text editor designed with offline-first functionality in mind.</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
