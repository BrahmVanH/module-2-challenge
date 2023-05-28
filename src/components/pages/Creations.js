import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import weatherNowScreenshot from '../../images/weathernow_screenshot.png';
import recipeMeScreenshot from '../../images/RecipeMe_screenshot.svg';
import myNotepadScreenshot from '../../images/My_Notepad_screenshot.svg';
import bteScreenshot from '../../images/BTE-text-editor-screenshot.png';
import cliReadmeScreenshot from '../../images/CLI-README-generator.jpg';
import eCommerceScreenshot from '../../images/eCommerce_back_end-screenshot.jpg';
import '../../styles/Creations.css';

const carouseCaptionStyle = {
	backgroundColor: 'rgba(128, 128, 128, 0.5)',
	padding: '20',
	width: '40%',
	borderRadius: '10px',
	padding: '20',
};

function Creations() {
	return (
		<>
			<div
				id='myCreationsCarousel'
				style={{ maxHeight: '70vh', maxWidth: '70%' }}>
				<h4>My Creations</h4>
				<Carousel>
					<Carousel.Item interval={3000}>
						<Link to='https://brahmvanh.github.io/Weather-Forecast/'>
							<img
								className='d-block w-100'
								src={weatherNowScreenshot}
								alt='weather now web application screenshot'
							/>
						</Link>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>WEATHERNOW.</h3>
								<p>A sleek, easy to use weather application.</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<Link to='https://my-notepad.herokuapp.com/'>
							<img
								className='d-block w-100'
								src={myNotepadScreenshot}
								alt='my notepad web application screenshot'
							/>
						</Link>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>My Notepad</h3>
								<p>A simple note taking application.</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<Link to='https://recipeme-recipe-logger.herokuapp.com/'>
							<img
								className='d-block w-100'
								src={recipeMeScreenshot}
								alt='my notepad web application screenshot'
							/>
						</Link>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>RecipeMe</h3>
								<p>A customizable, web-based recipe book.</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<Link to='https://text-editor-pwa-vanhouzen.herokuapp.com/'>
							<img
								className='d-block w-100'
								src={bteScreenshot}
								alt='just another text editor application screen shot'
								to='https://text-editor-pwa-vanhouzen.herokuapp.com/'
							/>
						</Link>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>Just Another Text Editor</h3>
								<p>An installable text editor application</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<Link to='https://github.com/BrahmVanH/Command_Line_README'>
							<img
								className='d-block w-100'
								src={cliReadmeScreenshot}
								alt='screenshot of command line based README generator application'
							/>
						</Link>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>CLI README</h3>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<Link to='https://github.com/BrahmVanH/eCommerce_Back-end'>
							<img
								className='d-block w-100'
								src={eCommerceScreenshot}
								alt='screenshot of a heroku demo of eCommerce back-end application'
							/>
						</Link>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>eCommerce Back-End</h3>
								<p>Server-side data handling for eCommerce using MySql </p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
}

export default Creations;
