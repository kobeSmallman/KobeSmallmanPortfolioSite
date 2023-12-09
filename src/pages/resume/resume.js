// src/pages/resume/resume.js

import React from 'react';
import './resume.css'; // Ensure you have the correct path to your CSS file

const ResumePage = () => {
    return (
        <div className="resume-container">
            <iframe
                src={`${process.env.PUBLIC_URL}/koberesume.pdf`}
                title="Kobe Smallman's Resume"
                width="100%"
                height="1000px"
            >
                This browser does not support PDFs. Please download the PDF to view it:
                <a href={`${process.env.PUBLIC_URL}/koberesume.pdf`}>Download PDF</a>.
            </iframe>
        </div>
    );
};

export default ResumePage;
