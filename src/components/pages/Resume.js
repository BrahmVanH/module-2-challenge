import React, { useEffect, useState, useRef } from 'react';
import gsap, { Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';

import myResume from '../../assets/pdf/developerResume.pdf';
import { render } from '@testing-library/react';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function Resume() {
	const main = useRef();
	const smoother = useRef();

	const [numPages, setNumPages] = useState(0);

	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	useEffect(() => {
		pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	});
	useEffect(() => {
		gsap.from(
			'.document',

			{
				opacity: 0,
				y: 60,
				duration: 1,
				ease: Power1.easeIn,
			}
		);
	}, []);

	 const renderPages = () => {
			const pages = [];
			for (let i = 1; i <= numPages; i++) {
				pages.push(<Page key={i} pageNumber={i} />);
			}
			return pages;
		};

	return (
		<div ref={main} id='smooth-wrapper' className='d-flex justify-content-center'>
			<Link to='../../assets/pdf/developerResume.pdf'>
				<Document
					id='smooth-content'
					data-speed='0.5'
					className='py-3 document'
					file={myResume}
					onLoadSuccess={onDocumentLoadSuccess}>
				{renderPages()}
				</Document>
			</Link>
		</div>
	);
}

export default Resume;
