import React, { useState } from 'react';
import './about.css';
import '../../components/skillbar/skillbar.css'; // Ensure the skill bar CSS is properly imported
import aboutme from '../../assets/images/aboutme.jpg'; // Ensure the path is correct
import frenchdiploma from '../../assets/images/frenchdiploma.jpg';
import hsdiploma from '../../assets/images/hsdiploma.jpg';

const skillsData = [
    { name: 'HTML', percentage: 85, description: 'Experienced with HTML5 and semantic markup, creating well-structured pages.' },
    { name: 'CSS', percentage: 70, description: 'Skilled in styling with CSS3, Flexbox, and CSS Grid for responsive designs.' },
    { name: 'JavaScript', percentage: 50, description: 'Fairly good at implementing code, though practice is needed to deepen my skills.' },
    { name: 'Java', percentage: 55, description: 'Handled various projects with GUI on NetBeans; solid understanding with room to grow.' },
    { name: 'C#', percentage: 55, description: 'Comparable experience to Java; utilized Visual Studio Code for various projects.' },
    { name: 'C++', percentage: 60, description: 'Understanding of vectors and more complex concepts gives me a strong foundation.' },
    { name: 'PHP', percentage: 65, description: 'One of my favorite languages; strong skills in server-side scripting.' },
    { name: 'MySQL', percentage: 75, description: '75% skill level in coding; 50% in database design and ERDs.' },
    { name: 'React', percentage: 50, description: 'Familiar with the basics and can build simple React applications.' },
    { name: 'Kotlin', percentage: 40, description: 'Limited experience with Kotlin, mainly for basic Android applications.' },
    { name: 'ASP.NET', percentage: 30, description: 'Not very familiar with ASP.NET; have hardly used it in practical scenarios.' },
    { name: 'Apache', percentage: 45, description: 'Basic understanding of Apache server configuration and management.' },
    { name: 'Laravel', percentage: 35, description: 'Minimal experience with Laravel; still learning the ropes.' },
    { name: 'Hardware', percentage: 80, description: 'Confident in most hardware configurations; not quite an expert but knowledgeable.' },
    { name: 'Networking', percentage: 40, description: 'Still a beginner, but steadily increasing my networking knowledge.' },
    { name: 'GitHub', percentage: 85, description: 'I understand how to integrate and work with others on GitHub. Still need some work with version control.' },
    { name: 'Selling Technology', percentage: 95, description: 'Selling technology is one of my strengths; highly skilled in this area.' },
];

function getGradient(percentage) {
    return 'transparent';
}

const About = () => {
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <div className="about">
            <div className="profile-section">
                <img src={aboutme} alt="Kobe Douglas Smallman" className="profile-picture" />
                <div className="description">
                    <p>Hello! I'm Kobe Smallman, a dedicated and passionate Full Stack Developer with a solid foundation in both front-end and back-end technologies. I graduated in May 2024 with a Computer Information Technology Diploma from Lethbridge College, earning a 3.8 GPA and contributing to a capstone project focused on supply chain management.</p>
                    <p>My goal is to start a career in a dynamic environment where I can leverage my skills in PHP, Laravel, MySQL, and React to contribute meaningfully while continuing to grow professionally. I'm eager to work on innovative projects, whether in front-end, back-end, or full-stack roles, and to make a lasting impact in the tech industry.</p>
                </div>
            </div>

            <div className="skills-section">
                <h2>Skills Legend</h2>
                <p>0-49%: Beginner | 50-89%: Intermediate | 90-100%: Expert</p>
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-bar-container"
                        onMouseEnter={() => setActiveSkill(index)}
                        onMouseLeave={() => setActiveSkill(null)}
                    >
                        <div className="skill-bar" style={{ background: getGradient(skill.percentage) }}>
                            <div className="skill-bar-inner" style={{ width: `${skill.percentage}%` }}>
                                <span>{skill.name} - {skill.percentage}%</span>
                            </div>
                        </div>
                        {activeSkill === index && <div className="skill-description">{skill.description}</div>}
                    </div>
                ))}
            </div>

            <div className="work-experience-section section">
                <h2>Work Experience</h2>
                <div>
                    <h3>Technical Support Specialist</h3>
                    <p>City Hall, Lethbridge | May 2024 - Sept 2024 (Seasonal)</p>
                    <ul>
                        <li>Performed data migrations and resolved technical issues, enhancing system reliability.</li>
                        <li>Managed hardware swaps and inventory for seamless operational continuity.</li>
                        <li>Communicated technical solutions effectively to non-technical clients.</li>
                    </ul>
                </div>
                <div>
                    <h3>Staples-Bell, Lethbridge</h3>
                    <p>June 2023 - May 2024</p>
                    <ul>
                        <li>Kept up to date with the latest phones and plan pricing.</li>
                        <li>Provided managers with updates on current sales approach and goals.</li>
                        <li>Set up phones and migrated phones & phone numbers.</li>
                    </ul>
                </div>
                <div>
                    <h3>Staples, Lethbridge</h3>
                    <p>Nov. 2020 - June 2023</p>
                    <ul>
                        <li>Electronics sales associate.</li>
                        <li>Assisted customers with products, services, and promotions.</li>
                        <li>Discussed and sold service plans, warranty plans, and accessories.</li>
                    </ul>
                </div>
            </div>

            <div className="volunteer-section section">
                <h2>Volunteer Experience</h2>
                <div>
                    <h3>Millenium Foundation, Sri Lanka</h3>
                    <p>July 2018</p>
                    <ul>
                        <li>Taught English to teens and monks in classroom settings.</li>
                        <li>Assisted in an orphanage for children up to 8 years old; childcare, play activities.</li>
                        <li>Cared for elephants by cleaning, feeding, bathing, and exercising them.</li>
                    </ul>
                </div>
            </div>

            <div className="certificates-section section">
                <h2>Certificates</h2>
                <div className="certificate">
                    <img src={frenchdiploma} alt="French Diploma" />
                    <p>French Language Diploma</p>
                </div>
                <div className="certificate">
                    <img src={hsdiploma} alt="High School Diploma" />
                    <p>High School Diploma</p>
                </div>
            </div>
        </div>
    );
};

export default About;
