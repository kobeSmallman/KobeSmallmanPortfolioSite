// src/pages/projects/projects.js

import React, { useState } from 'react';
import './projects.css'; // Ensure correct path
import cppsnip from '../../assets/images/cppsnip.png';
import oneoftablemadephp from '../../assets/images/oneoftablemadephp.png';
import phpcoding from '../../assets/images/phpcoding.png';
import phpcodingview from '../../assets/images/phpcodingview.png';
import javasnip from '../../assets/images/javasnip.png';
import icpwix from '../../assets/images/icpwix.png';
import csharp from '../../assets/images/csharp.png';
import crm from '../../assets/images/crm.png';
import blockchainImage from '../../assets/images/BlockchainImage.png';

const Projects = () => {
    const [viewCompleted, setViewCompleted] = useState(true);

    const projectsInProgress = [
        {
            name: 'BlockchainTickets Project',
            images: [blockchainImage],
            description: (
                <div>
                    <h1>Blockchain-Based Event Ticketing System</h1>
                    <p>
                        BlockchainTickets aims to enhance transparency, security, and efficiency in event ticketing. 
                        Leveraging Ethereum blockchain technology, this project minimizes fraud, unauthorized reselling, and ensures 
                        every ticket is unique and securely owned. Key features include secure ticket sales and transfers, real-time availability, 
                        detailed seating arrangements, and integration with payment gateways. The technology stack includes React (frontend), .NET Core (backend), 
                        PostgreSQL (database), and Ethereum blockchain.
                    </p>
                </div>
            ),
        }
    ];

    const completedProjects = [
        {
            name: 'WIDACRM Project',
            images: [crm],
            description: (
                <div>
                    <p>
                        A collaborative development of a full-fledged CRM system using ASP.NET, MySQL, and modern front-end technologies.
                        The project focused on features like user and vendor management, data security, and scalability. This experience 
                        enhanced skills in database design, secure coding practices, and creating a user-friendly interface. It was a key team project 
                        involving six developers working in an agile environment.
                    </p>
                </div>
            ),
        },
        {
            name: 'C++ Text Analysis',
            description: 'Main function begins by setting all the strings, ints, ifstream, vectors to null. ' +
                'It then prompts the user to input a file to read, calculating each word\'s occurrence ' +
                'and displaying in 3 columns: the word and its frequency.',
            images: [cppsnip],
        },
        {
            name: 'PHP/MySQL Dashboard',
            description: 'Developed a dashboard featuring an article page with a comment section. ' +
                'Users can view articles and comments, but need to log in or register to comment. ' +
                'Features user registration with profile editing capabilities. Admins can manage user data. ' +
                'Built with PHP, HTML, CSS, JavaScript, and MySQL.',
            images: [
                oneoftablemadephp,
                phpcoding,
                phpcodingview
            ],
        },
        {
            name: 'C# Team Management GUI',
            description: 'Created a C# application for managing a sports team, featuring a unique team object model with ' +
                'attributes like jersey number and goals scored. Implemented a rule to prevent duplicate jersey numbers ' +
                'within the same team. The GUI facilitates user input for team data, enhancing the interactive experience.',
            images: [csharp],
        },
        {
            name: 'Java Character Counter',
            description: 'A Java application that reads a user-selected file and counts each character, ' +
                'including spaces, uppercase and lowercase letters, and control characters. ' +
                'Results are displayed in a GUI, offering an interactive way to analyze text data.',
            images: [javasnip],
        },
        {
            projectUrl: 'https://kobe4smallman.wixsite.com/learnicp',
            name: 'UI/UX Design Project',
            description: 'Focused on creating a visually appealing and educational website. ' +
                'This project aimed to balance aesthetic design with functionality, ' +
                'demonstrating an effective learning style website. The design was implemented on Wix.', 
            images: [icpwix],
        }
    ];

    const displayProjects = viewCompleted ? completedProjects : projectsInProgress;
    const buttonStyle = {
        backgroundColor: viewCompleted ? '#004d40' : '#ff7eb3',
        padding: '10px 20px',
        margin: '10px 0',
        cursor: 'pointer',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    };
    const githubButtonStyle = {
        backgroundColor: '#004d41',
        padding: '10px 20px',
        margin: '10px 0',
        cursor: 'pointer',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        display: 'block',
        width: 'fit-content',
        margin: '10px auto' // Center the button
    };

    const renderImages = (images) => {
        return images.map((image, index) => (
            <img key={index} src={image} alt="Project Screenshot" className="project-image" />
        ));
    };

    return (
        <div className="projects-container">
            <h1>My Coding Projects</h1>
            <button
                style={githubButtonStyle}
                onClick={() => window.open("https://github.com/kobeSmallman", "_blank")}>
                View my GitHub
            </button>
            <button
                style={buttonStyle}
                onClick={() => setViewCompleted(!viewCompleted)}>
                {viewCompleted ? "Show Projects in Progress" : "Show Completed Projects"}
            </button>
            {displayProjects.map((project, index) => (
                <div key={index} className="project-rectangle">
                    {renderImages(project.images)}
                    <div className="project-info">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        {project.projectUrl && (
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                Visit Project Site
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
