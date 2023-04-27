import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import weatherNowScreenshot from '../../images/weathernow_screenshot.png';
import recipeMeScreenshot from '../../images/RecipeMe_screenshot.svg';
import myNotepadScreenshot from '../../images/My_Notepad_screenshot.svg';
import jateScreenshot from '../../images/JATE-screenshot.jpg';
import '../../styles/Creations.css';

const carouseCaptionStyle = {
	backgroundColor: 'rgba(128, 128, 128, 0.5)',
	padding: '20',
	borderRadius: '',
	width: '40%',
};

function Creations() {
	return (
		<>
			<div
				id='myCreationsCarousel'
				style={{ maxHeight: '70vh' }}>
				<h4>My Creations</h4>
				<Carousel>
					<Carousel.Item interval={5000}>
						<img
							className='d-block w-100'
							src={weatherNowScreenshot}
							alt='weather now web application screenshot'
							href='https://brahmvanh.github.io/Weather-Forecast/'
						/>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>WEATHERNOW.</h3>
								<p>A sleek, easy to use weather application.</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<img
							className='d-block w-100'
							src={myNotepadScreenshot}
							alt='my notepad web application screenshot'
							href='https://my-notepad.herokuapp.com/'
						/>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>My Notepad</h3>
								<p>A simple note taking application.</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<img
							className='d-block w-100'
							src={recipeMeScreenshot}
							alt='my notepad web application screenshot'
							href='https://quiet-forest-61314.herokuapp.com/'
						/>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>RecipeMe</h3>
								<p>A customizable, web-based recipe book.</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={5000}>
						<img
							className='d-block w-100'
							src={jateScreenshot}
							alt='just another text editor application screen shot'
							href='https://text-editor-pwa-vanhouzen.herokuapp.com/'
						/>
						<Carousel.Caption>
							<div style={carouseCaptionStyle}>
								<h3>Just Another Text Editor</h3>
								<p>An installable text editor application</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
}

export default Creations;
