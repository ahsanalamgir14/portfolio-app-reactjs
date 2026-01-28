import React from 'react';
import './LandingSection.css';

const LandingSection = () => {
  return (
    <section id="landing-section" className="landing-section">
      <div className="landing-content">
        <img 
          src="https://picsum.photos/200" 
          alt="Avatar" 
          className="avatar"
        />
        <h1 className="greeting">Hello, I am Pete!</h1>
        <h2 className="bio">A frontend developer specialized in React</h2>
      </div>
    </section>
  );
};

export default LandingSection;
