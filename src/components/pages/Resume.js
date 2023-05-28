import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom'

import myResume from '../../assets/pdf/developerResume.pdf';

export function Resume() {

	 const [numPages, setNumPages] = useState(null);
		const [pageNumber, setPageNumber] = useState(1);

		function onDocumentLoadSuccess({ numPages }) {
			setNumPages(numPages);
		}
	useEffect(() => {
		pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	});
	return (
		<div className='d-flex justify-content-center'>
				<Link to='../../assets/pdf/developerResume.pdf'>

				<Document file={myResume} onLoadSuccess={onDocumentLoadSuccess}>
					<Page pageNumber={pageNumber} />
				</Document>
				</Link>
		</div>
	);
}

export default Resume;
