import * as React from 'react';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


const Curiculum = () => {
    const handlePrint = () => {
        window.print();
      };
    window.scrollTo(0, 0)
    return (
        <div className=' modalContainer'>
            <button className='imprimerPdf' onClick={handlePrint}>Imprimer</button>
            <div className='retour'>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div className="cvpdf">
                        <Viewer fileUrl="./cv2024-1.pdf" defaultScale={SpecialZoomLevel.PageFit} />
                    </div>
                </Worker>
            </div>
        </div>
    );
};

export default Curiculum;
