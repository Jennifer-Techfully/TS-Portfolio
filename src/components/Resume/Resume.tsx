
/*import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import resume from './resume.pdf'


const Resume = () =>{
 const PdfViewer: React.FC<{ file: string }> = ({ file }) => {
 
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  const onPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageNumber(parseInt(event.target.value));
  };
  const PdfDownloader: React.FC<{ url: string }> = ({ url }) => {
    const onClick = async () => {

        const response = await fetch(url);
        const blob = await response.blob();

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'pdf-file.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <select value={pageNumber} onChange={onPageChange}>
        {Array.from({ length: numPages ?? 0 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <button onClick={onClick}>Download PDF</button>
    </div>
  );
}
}
};
export default { PdfViewer, PdfDownloader };*/

/*import React from 'react';
import { PdfDisplay } from './PdfDisplay';
import { Document, Page } from 'react-pdf';



const Resume: React.FC = () => {
  return (
    <div>
      <h1>PDF Display Example</h1>
      <PdfDisplay file={} url={} />
    </div>
  );
};

export default Resume;*/
import React from 'react'

const Resume = () => {
  return (
    <div>Resume</div>
  )
}

export default Resume
 
