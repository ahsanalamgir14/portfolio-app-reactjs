import React from 'react';
import './Card.css';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
