// src/pages/home/home.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'; // Ensure this is the correct path to your home.css
import kobeprofilepic from '../../assets/images/kobeprofilepic.jpg';
import brandon from '../../assets/images/brandon.png';
import Antonio from '../../assets/images/tony.png';
import Brigham from '../../assets/images/briggs.png';
import Michelle from '../../assets/images/michelle.png';
import Alyssa from '../../assets/images/alyssa.png';
// Testimonial data structure
const testimonials = [
    {
        quote: "In every client interaction, Kobe demonstrates an impressive balance of technical know-how and persuasive communication, ensuring both product excellence and customer satisfaction.",
        author: "Brandon Crane",
        authorPhoto: brandon
    },
    {
        quote: "In every project, Kobe demonstrates a rare combination of speed, accuracy, and attention to detail, making them a valuable asset to any team.",
        author: "Antonio Mendes",
        authorPhoto: Antonio
    },
    {
        quote: "What sets Kobe apart is their ability to not just solve technical problems, but to anticipate them, saving time and resources.",
        author: "Brigham Baker",
        authorPhoto: Brigham
    },
    {
        quote: "Kobe's s ability to understand and articulate complex technical concepts to non-technical stakeholders is truly remarkable.",
        author: "Michelle Moen",
        authorPhoto: Michelle
    },
    {
        quote: "In the fast-paced world of tech, Kobe stands out with their ability to learn and adapt quickly, always staying ahead of the curve.",
        author: "Alyssa Sinclair",
        authorPhoto: Alyssa
    },
    
    // ... more testimonials
];

const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: false, // Disable center mode
};
const Home = () => {
    const phrases = [
        "Junior Full Stack Developer",
        "A Front End Developer",
        "Modern Junior UI/UX Designer",
        "Junior Blockchain Developer",
        "Junior Mobile App Developer"
    ];

    const [currentPhrase, setCurrentPhrase] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let timer;
        const typingDelay = 200;
        const erasingDelay = 100;
        const newTextDelay = 2000; // Delay between current and next text
        const totalLength = currentPhrase.length;
        const originalPhrase = phrases[loopNum % phrases.length];

        const handleTyping = () => {
            if (!isDeleting && totalLength < originalPhrase.length) {
                setCurrentPhrase(currentPhrase + originalPhrase[totalLength]);
                setTypingSpeed(typingDelay);
            } else if (isDeleting && totalLength !== 0) {
                setCurrentPhrase(currentPhrase.substring(0, totalLength - 1));
                setTypingSpeed(erasingDelay);
            } else if (isDeleting) {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(typingDelay);
            } else {
                setIsDeleting(true);
                setTypingSpeed(newTextDelay);
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentPhrase, isDeleting, loopNum, phrases, typingSpeed]);

    return (
        <div className="home">
                <div className="hero">
                    <img src={kobeprofilepic} alt="Kobe Douglas Smallman" className="your-photo" />
                <h1>Kobe Douglas Smallman</h1>
                <div id="dynamic-text">{currentPhrase}</div>

                    <p className="your-quote">"Innovation and efficiency are the hallmarks of my development approach."</p>
                </div>
            <div className="testimonials">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-slide">
                            <div className="testimonial">
                                <img src={testimonial.authorPhoto} alt={`${testimonial.author}`} className="testimonial-photo" />
                                <div className="testimonial-text-container">
                                    <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>
                                    <p className="testimonial-author">{testimonial.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Home;
