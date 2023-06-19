import React, { useEffect } from 'react';
import gsap, { Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import ReactGA from 'react-ga';

function About() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	useEffect(() => {
		gsap.from(
			'.about-section',

			{
				opacity: 0,
				y: 60,
				duration: 1,
				ease: Power1.easeIn,
			}
		);
	}, []);

	return (
		<div className='about-section' style={{ padding: '20' }}>
			<header className='bg-dark'>
				<div className='container p-3 p-md-3 p-lg-4'>
					<div className='row'>
						<div className='col-md-8 col-xl-6 text-center text-md-start mx-auto'>
							<div className='text-center'>
								<h1 className='fw-bold'>Welcome</h1>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section className='py-5 -flex justify-content-center' id='bioContainer'>
				<div className='bio-wrapper justify-content-center row'>
					<div className='bio-content pb-5 col-10 col-sm-8 col-md-5 col-lg-4'>
						<p id='bio-text' style={{ padding: '5 5', fontSize: '1.25em' }}>
							I'm Brahm. I am a passionate professional who thrives on creative
							problem solving. With a wealth of experience in a diverse range of
							web development technologies, I bring a versatile skill set to the
							table.
							<br />
							When I'm not immersed in the tech realm, you'll find me embarking
							on thrilling adventures in the world of endurance sports,
							constantly seeking new challenges. This sense of adventure fuels
							my drive to approach each project with enthusiasm and a fresh
							perspective.
							<br />
							Driven by a passion for living and creating captivating
							experiences, I combine my full-stack web development training with
							an eye for aesthetics. I am dedicated to empowering you to
							transform your ideas into reality. By harnessing my expertise in
							various web development technologies, we can work together to
							bring your vision to life in the most remarkable and impactful
							ways.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
