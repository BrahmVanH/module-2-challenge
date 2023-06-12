import React, { useEffect } from 'react';
import gsap from 'gsap';
import ReactGA from 'react-ga';

function About() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div style={{ padding: '20' }}>
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
			<section className='py-5 d-flex justify-content-center' id='bioContainer'>
				<div className='bio-wrapper justify-content-center row'>
					<div className='bio-content col-md-5'>
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
