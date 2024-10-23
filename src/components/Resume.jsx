import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Import the download icon
import { motion } from 'framer-motion'; // Optional for animation

const Resume = () => {
  const glassEffectStyle = {
    background: 'rgba(75, 0, 130, 0.1)', // Light indigo color with transparency
    backdropFilter: 'blur(10px)', // Glass effect
    borderRadius: '20px', // Rounded corners
    padding: '24px', // Padding
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Shadow effect
    color: 'white', // Text color
    maxWidth: '600px', // Maximum width for the component
    margin: '40px auto', // Center the component
    border: '1px solid pink', // Border similar to achievement cards
  };

  return (
    <div>
      {/* Header with Framer Motion animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <p style={{ fontSize: '18px', textAlign: 'center', color: '#6B7280' }}>My </p>
        <h2 style={{ fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>Resume</h2>
      </motion.div>

      {/* Resume Card */}
      <motion.div
        style={glassEffectStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>Resume</h2>
        <p style={{ fontSize: '14px', marginBottom: '16px' }}>
          I am a passionate web developer with experience in building responsive web applications. 
          Below are my skills and experience.
        </p>

        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontWeight: 'semibold', fontSize: '18px' }}>Skills</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>JavaScript, React, Node.js</li>
            <li>HTML, CSS, Tailwind CSS</li>
            <li>Django, Flask</li>
            <li>Git, SQL, MongoDB</li>
          </ul>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontWeight: 'semibold', fontSize: '18px' }}>Experience</h3>
          <p style={{ fontSize: '14px' }}>Web Developer at XYZ Company (2023 - Present)</p>
          <p style={{ fontSize: '14px' }}>Intern at ABC Company (2022 - 2023)</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
          <a
            href="/path-to-your-resume.pdf" // Replace with your resume file path
            download
            style={{
              backgroundColor: 'white',
              color: '#000', // Adjust this to your desired text color
              display: 'flex',
              alignItems: 'center',
              padding: '10px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'background-color 0.3s',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Optional shadow for the button
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
          >
            <FaDownload style={{ marginRight: '8px' }} /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
