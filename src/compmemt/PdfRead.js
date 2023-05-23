import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pdfFile from "../file/file1.pdf"

function PdfRead() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const param1 = urlParams.get('param1');
    console.log('Param1:', param1);
    
    const [numPages, setNumPages] = useState(null)
    function onDocumentSuccess ({numPages}) {
    setNumPages (numPages)
    }

  return (
        <div>
            <Document file={pdfFile} onLoadSuccess={onDocumentSuccess}>
  {
Array (numPages).fill().map((_, i) => (
<Page pageNumber={i+1}></Page>
))
}
</Document> 
        </div>
  );
}
export default PdfRead;