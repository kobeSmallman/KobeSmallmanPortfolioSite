// src/components/skillbar/skillbar.js

import React from 'react';
import './skillbar.css'; // Ensure you have the CSS file for styling

const SkillBar = ({ language, level }) => {
    return (
        <div className="skillbar-container">
            <span className="skillbar-label">{language}</span>
            <div className="skillbar">
                <div className="skillbar-level" style={{ width: `${level}%` }}>
                    <span className="skillbar-percentage">{level}%</span>
                </div>
            </div>
        </div>
    );
};

export default SkillBar;
