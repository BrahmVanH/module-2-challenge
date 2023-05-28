import React from 'react';
import { Document, Page } from 'react-pdf';

import myResume from '../../../public/pdf/Brahm_vanhouzen_developer-resume.pdf';

export default function Test() {
	return (
		<Document file={myResume}>
			<Page pageNumber={1} />
		</Document>
	);
}
