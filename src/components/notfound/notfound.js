// src/components/notfound/notfound.js

import React from 'react';
import './notfound.css'; // Lowercase as per your project structure

const Notfound = () => {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
    );
};

export default Notfound;
