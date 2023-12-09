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
const Projects = () => {
    const [viewCompleted, setViewCompleted] = useState(true);

    const projectsInProgress = [
        {
            name: 'Comprehensive CRM Development',
            images: [crm],
            description: (
                <div>
                    <h1>I am currently engaged in an ambitious and cutting-edge project</h1>
                    <p>Project Overview
                        I am currently engaged in an ambitious and cutting-edge project: the development of a full-fledged Customer Relationship Management (CRM) system. This project is being undertaken in collaboration with a dynamic team of six skilled developers, each bringing a unique set of skills and perspectives to the table. Our goal is to create a CRM system that not only meets but exceeds the expectations and requirements of our client, a renowned company in its respective industry.

                        Technical Aspects and Features
                        At the core of this project is the use of ASP.NET, a powerful and versatile framework known for its robustness and scalability. This choice of technology enables us to build a highly responsive and efficient CRM system capable of handling complex business processes and large volumes of data seamlessly.

                        The front-end development is being handled with a combination of the latest web technologies, including HTML5, CSS3, and JavaScript. This ensures that the user interface is not only intuitive and user-friendly but also aesthetically pleasing and engaging. We are dedicated to creating an experience that is both efficient and enjoyable for the end-users.

                        For the database management system, we have chosen MySQL because of its proven reliability, high performance, and compatibility with ASP.NET. This allows us to manage vast amounts of data securely and efficiently, which is crucial for any CRM system. The database design is meticulously planned to ensure data integrity, security, and quick access to information.

                        Key Features of the CRM
                        User Information Management: At the heart of the CRM is the capability to manage detailed user profiles. This includes storing, retrieving, and updating user information in a streamlined manner.

                        Vendor Information Handling: Apart from user data, the system is also equipped to manage vendor-related information, facilitating smoother interactions and transactions between the company and its vendors.

                        Customized User Experience: Recognizing the diverse needs of different users, the CRM is designed to offer a personalized experience, tailoring functionalities and data presentation to individual preferences and roles.

                        Data Security and Privacy: Adhering to the highest standards of data security and privacy, the CRM incorporates advanced security measures to protect sensitive information from unauthorized access and breaches.

                        Scalability and Flexibility: The architecture of the CRM is designed to be both scalable and flexible, accommodating the evolving needs of the company and integrating new technologies as they emerge.

                        Development Approach and Team Dynamics
                        The development process is highly collaborative and agile. We follow a methodology that allows for rapid prototyping, regular feedback, and iterative improvements. This approach ensures that we can adapt quickly to changing requirements and incorporate new ideas efficiently.

                        Our team's synergy is a key factor in the project's success. Each member brings their expertise in various aspects of software development, from front-end design to back-end logic and database management. Regular meetings, brainstorming sessions, and open communication channels foster a creative and productive work environment.</p>
                    
                </div>
            ),
        }
    ];

    const completedProjects = [
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
        // This function can be replaced with a more complex carousel component if needed
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
                    {project.images.map((img, idx) => (
                        <img key={idx} src={img} alt={`Screenshot of ${project.name}`} className="project-image" />
                    ))}
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