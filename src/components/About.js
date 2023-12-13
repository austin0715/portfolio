import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h2 className="headings-font">About</h2>
      <div className="person-icon">
        <FontAwesomeIcon icon={['far', 'user']} />
      </div>
      <p className="description">
          Over the course of eight years in software developing, I have attained significant experience coding with a variety of programming languages, working directly with corporate leadership and clients.
      </p>
      <p className="description">
          Working in my current job at KKday, I have four years of experience with systems architecture and full-stack web development. I have been responsible for developing, maintaining and trouble-shooting 12 websites serving five million+ users monthly. I have also recently gained experience in DevOps, providing solutions in programming, database technology, and operating systems.
      </p>
    </div>
  );
};

export default About;
