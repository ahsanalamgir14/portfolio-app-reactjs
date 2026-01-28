import React from 'react';
import Card from './Card';
import './ProjectsSection.css';

const projects = [
  {
    title: "React E-Commerce App",
    description: "A fully functional e-commerce platform built with React, featuring shopping cart, product filtering, and checkout.",
    imageSrc: "https://via.placeholder.com/400x300",
  },
  {
    title: "Task Manager Pro",
    description: "An intuitive task management application with drag-and-drop functionality and real-time collaboration.",
    imageSrc: "https://via.placeholder.com/400x300",
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather app that provides real-time forecasts and interactive maps using API integration.",
    imageSrc: "https://via.placeholder.com/400x300",
  },
  {
    title: "Social Media App",
    description: "A social networking platform with user profiles, posts, comments, and real-time notifications.",
    imageSrc: "https://via.placeholder.com/400x300",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
